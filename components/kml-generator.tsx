"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { parseData, generateKML } from "@/lib/kml-utils"
import DataTable from "@/components/data-table"
import ExcelUpload from "@/components/excel-upload"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function KmlGenerator() {
  const [inputData, setInputData] = useState("")
  const [parsedData, setParsedData] = useState<any[]>([])
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null)

  useEffect(() => {
    if (inputData.trim() !== "") {
      const data = parseData(inputData)
      setParsedData(data)
    } else {
      setParsedData([])
    }
  }, [inputData])

  const handleExcelDataParsed = (data: any[]) => {
    setParsedData(data)
    // Limpar a textarea quando dados do Excel são carregados
    setInputData("")
    setAlert({
      type: "success",
      message: `${data.length} pontos carregados do arquivo Excel com sucesso!`,
    })
    setTimeout(() => setAlert(null), 3000)
  }

  const handleGenerateKML = () => {
    if (parsedData.length > 0) {
      generateKML(parsedData)
      setAlert({
        type: "success",
        message: "Arquivo KML gerado com sucesso!",
      })
      setTimeout(() => setAlert(null), 3000)
    } else {
      setAlert({
        type: "error",
        message: "Por favor, insira dados válidos na área de texto.",
      })
      setTimeout(() => setAlert(null), 3000)
    }
  }
  return (
    <div className="space-y-6">
      {/* Início Rápido */}
      <Card className="border-[#3700ff] bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-[#110043] flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#3700ff]" />
            🚀 Início Rápido - Como usar em 3 passos:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border border-[#3700ff]/20">
              <div className="w-8 h-8 bg-[#3700ff] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
              <h4 className="font-semibold text-[#110043] mb-2">Escolha o Método</h4>
              <p className="text-sm text-[#110043]/70">
                Use <strong>Upload Excel</strong> para muitos pontos ou <strong>Entrada Manual</strong> para poucos
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-[#3700ff]/20">
              <div className="w-8 h-8 bg-[#3700ff] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
              <h4 className="font-semibold text-[#110043] mb-2">Adicione os Dados</h4>
              <p className="text-sm text-[#110043]/70">
                Faça upload do Excel ou digite as coordenadas na caixa de texto
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-[#3700ff]/20">
              <div className="w-8 h-8 bg-[#3700ff] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
              <h4 className="font-semibold text-[#110043] mb-2">Gere o KML</h4>
              <p className="text-sm text-[#110043]/70">
                Clique em "Gerar KML" e seu arquivo será baixado automaticamente
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-[#110043]/60 mb-3">
              Primeira vez usando? Não sabe por onde começar?
            </p>
            <Link href="/ajuda">
              <Button variant="outline" className="border-[#3700ff] text-[#3700ff] hover:bg-[#3700ff] hover:text-white">
                📖 Ver Guia Completo
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {alert && (
        <Alert
          className={`${
            alert.type === "success" ? "border-[#a2ff00] bg-[#a2ff00]/10" : "border-[#ff3f19] bg-[#ff3f19]/10"
          }`}
        >
          {alert.type === "success" ? (
            <CheckCircle2 className="h-4 w-4 text-[#a2ff00]" />
          ) : (
            <AlertCircle className="h-4 w-4 text-[#ff3f19]" />
          )}
          <AlertDescription className={`${alert.type === "success" ? "text-[#110043]" : "text-[#110043]"}`}>
            {alert.message}
          </AlertDescription>
        </Alert>      )}

      <ExcelUpload onDataParsed={handleExcelDataParsed} />

      <Card>
        <CardHeader>
          <CardTitle className="text-[#110043]">Entrada de Dados</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-[#110043]">
            Cole seus dados no formato de tabela abaixo seguindo a ordem: Nome do Ponto, Descrição, Latitude, Longitude
            (separados por tabulação):
          </p>
          <Textarea
            id="dataInput"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Exemplo:&#10;Ponto1&#9;Descrição1&#9;-11.7090&#9;-49.0530&#10;Ponto2&#9;Descrição2&#9;-11.7218&#9;-49.0934"
            className="min-h-[150px] border-[#d4d4d8] focus:border-[#3700ff] focus:ring-[#3700ff]"
          />
          <div className="mt-4">
            <Button
              onClick={handleGenerateKML}
              className="bg-[#3700ff] text-white hover:bg-[#42eedc] hover:text-[#110043] transition-colors"
            >
              Gerar e Baixar KML
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-[#110043]">Dados da Tabela</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable data={parsedData} />
        </CardContent>
      </Card>
    </div>
  )
}
