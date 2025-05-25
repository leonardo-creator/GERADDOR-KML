"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { parseData, generateKML } from "@/lib/kml-utils"
import DataTable from "@/components/data-table"
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
        </Alert>
      )}

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
              className="bg-[#3700ff] hover:bg-[#42eedc] hover:text-[#110043] transition-colors"
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
