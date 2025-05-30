"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, FileSpreadsheet, AlertCircle, Download } from "lucide-react"
import * as XLSX from "xlsx"
import { EXCEL_CONFIG, findColumnValue, validateCoordinates } from "@/lib/excel-config"

interface ExcelRow {
  index?: number
  name?: string
  Name?: string
  nome?: string
  Nome?: string
  status?: string
  Status?: string
  description?: string
  Description?: string
  descricao?: string
  Descricao?: string
  fileSize?: string
  FileSize?: string
  fileType?: string
  FileType?: string
  date?: string
  Date?: string
  Latitude?: number
  latitude?: number
  lat?: number
  Lat?: number
  Longitude?: number
  longitude?: number
  lon?: number
  Lon?: number
  lng?: number
  Lng?: number
  predictionDate?: string
  PredictionDate?: string
  [key: string]: any // Para permitir outras propriedades
}

interface ExcelUploadProps {
  onDataParsed: (data: any[]) => void
}

export default function ExcelUpload({ onDataParsed }: ExcelUploadProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const downloadSampleFile = () => {
    // Criar arquivo de exemplo
    const sampleData = [
      {
        name: "IMG_1661.JPG",
        status: "Pendente",
        description: "Descrição do ponto 1",
        fileSize: "5470.95 KB",
        fileType: "image/jpeg",
        date: "24/05/2025, 17:31:47",
        Latitude: -12.039469444444444,
        Longitude: -48.53828055555555,
        predictionDate: "2025-06-10"
      },
      {
        name: "IMG_1663.JPG",
        status: "Processado",
        description: "Descrição do ponto 2",
        fileSize: "5407.46 KB",
        fileType: "image/jpeg",
        date: "24/05/2025, 17:31:47",
        Latitude: -12.03946388888889,
        Longitude: -48.538086111111106,
        predictionDate: "2025-06-10"
      }
    ]

    const ws = XLSX.utils.json_to_sheet(sampleData)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "Pontos")
    XLSX.writeFile(wb, "exemplo-pontos.xlsx")
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      setError(EXCEL_CONFIG.ERROR_MESSAGES.NO_FILE)
      return
    }

    // Verificar extensão
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'))
    if (!EXCEL_CONFIG.ACCEPTED_EXTENSIONS.includes(fileExtension)) {
      setError(EXCEL_CONFIG.ERROR_MESSAGES.INVALID_EXTENSION)
      return
    }

    // Verificar tamanho do arquivo
    if (file.size > EXCEL_CONFIG.MAX_FILE_SIZE) {
      setError(EXCEL_CONFIG.ERROR_MESSAGES.FILE_TOO_LARGE)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const buffer = await file.arrayBuffer()
      const workbook = XLSX.read(buffer, { type: "array" })
      
      if (workbook.SheetNames.length === 0) {
        throw new Error(EXCEL_CONFIG.ERROR_MESSAGES.NO_SHEETS)
      }

      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]
      const jsonData = XLSX.utils.sheet_to_json(worksheet) as ExcelRow[]

      // Verificar se tem dados
      if (jsonData.length === 0) {
        throw new Error(EXCEL_CONFIG.ERROR_MESSAGES.EMPTY_SHEET)
      }

      // Verificar limite de linhas
      if (jsonData.length > EXCEL_CONFIG.MAX_ROWS) {
        throw new Error(EXCEL_CONFIG.ERROR_MESSAGES.TOO_MANY_ROWS)
      }

      // Verificar se as colunas obrigatórias existem
      const firstRow = jsonData[0]
      const nameValue = findColumnValue(firstRow, EXCEL_CONFIG.COLUMN_NAMES.name)
      const latValue = findColumnValue(firstRow, EXCEL_CONFIG.COLUMN_NAMES.latitude)
      const lonValue = findColumnValue(firstRow, EXCEL_CONFIG.COLUMN_NAMES.longitude)

      if (!nameValue && !latValue && !lonValue) {
        throw new Error(EXCEL_CONFIG.ERROR_MESSAGES.MISSING_COLUMNS)
      }

      // Converter dados para o formato esperado pelo KML generator
      const parsedData = jsonData.map((row, index) => {
        const name = findColumnValue(row, EXCEL_CONFIG.COLUMN_NAMES.name) || `Ponto ${index + 1}`
        const latitude = findColumnValue(row, EXCEL_CONFIG.COLUMN_NAMES.latitude) || '0'
        const longitude = findColumnValue(row, EXCEL_CONFIG.COLUMN_NAMES.longitude) || '0'
        
        return {
          nome: name.toString(),
          descricao: findColumnValue(row, EXCEL_CONFIG.COLUMN_NAMES.description) || 
                    findColumnValue(row, EXCEL_CONFIG.COLUMN_NAMES.status) || 
                    'Sem descrição',
          latitude: latitude.toString(),
          longitude: longitude.toString(),
          // Campos adicionais
          status: findColumnValue(row, EXCEL_CONFIG.COLUMN_NAMES.status),
          fileSize: findColumnValue(row, EXCEL_CONFIG.COLUMN_NAMES.fileSize),
          fileType: findColumnValue(row, EXCEL_CONFIG.COLUMN_NAMES.fileType),
          date: findColumnValue(row, EXCEL_CONFIG.COLUMN_NAMES.date),
          predictionDate: findColumnValue(row, EXCEL_CONFIG.COLUMN_NAMES.predictionDate)
        }
      })

      // Validar se pelo menos um ponto tem coordenadas válidas
      const validPoints = parsedData.filter(point => 
        validateCoordinates(point.latitude, point.longitude)
      )

      if (validPoints.length === 0) {
        throw new Error(EXCEL_CONFIG.ERROR_MESSAGES.NO_VALID_POINTS)
      }

      // Mostrar aviso se alguns pontos foram filtrados
      if (validPoints.length < parsedData.length) {
        const invalidCount = parsedData.length - validPoints.length
        console.warn(`${invalidCount} pontos com coordenadas inválidas foram ignorados`)
      }

      onDataParsed(parsedData)
      
    } catch (error) {
      console.error('Erro ao processar arquivo:', error)
      setError(error instanceof Error ? error.message : 'Erro inesperado ao processar arquivo')
    } finally {
      setIsLoading(false)
      // Limpar o input
      event.target.value = ''
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#110043] flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5" />
          Importar Arquivo Excel (.xlsx)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-[#110043]/70">
            Faça upload de um arquivo .xlsx com as seguintes colunas: 
            <strong> name, Latitude, Longitude</strong> (obrigatórias) e opcionalmente: 
            status, description, fileSize, fileType, date, predictionDate
          </p>
          
          {error && (
            <Alert className="border-[#ff3f19] bg-[#ff3f19]/10">
              <AlertCircle className="h-4 w-4 text-[#ff3f19]" />
              <AlertDescription className="text-[#110043]">
                {error}
              </AlertDescription>
            </Alert>
          )}

          <div className="flex items-center gap-4">
            <Input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              disabled={isLoading}
              className="border-[#d4d4d8] focus:border-[#3700ff] focus:ring-[#3700ff]"
            />
            <Button 
              disabled={isLoading}
              className="bg-[#3700ff] text-white hover:bg-[#42eedc] hover:text-[#110043] transition-colors"
            >
              <Upload className="h-4 w-4 mr-2" />
              {isLoading ? 'Processando...' : 'Upload'}
            </Button>
            <Button 
              variant="outline"
              onClick={downloadSampleFile}
              className="border-[#3700ff] text-[#3700ff] hover:bg-[#3700ff] hover:text-white transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Baixar Exemplo
            </Button>
          </div>

          <div className="text-xs text-[#110043]/60">
            <p>Exemplo de estrutura esperada:</p>
            <pre className="mt-1 p-2 bg-gray-100 rounded text-xs overflow-x-auto">
{`name              | Latitude           | Longitude          | description
IMG_1661.JPG      | -12.039469444444444| -48.53828055555555 | hjkhjk
IMG_1663.JPG      | -12.03946388888889 | -48.538086111111106| hjkhjk`}
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
