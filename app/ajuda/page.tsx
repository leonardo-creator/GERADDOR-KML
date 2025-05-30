"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  FileSpreadsheet, 
  Map, 
  Download, 
  Upload, 
  CheckCircle, 
  AlertTriangle,
  ArrowLeft,
  Info,
  FileText,
  Globe
} from "lucide-react"
import Link from "next/link"

export default function AjudaPage() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Gerador
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">
            Como Usar o Gerador de KML
          </h1>
          <p className="text-white/80 text-lg">
            Guia completo para iniciantes - transforme suas coordenadas em mapas!
          </p>
        </div>

        <div className="space-y-6">
          {/* O que é KML */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#110043] flex items-center gap-2">
                <Globe className="h-5 w-5" />
                O que é um arquivo KML?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#110043]/80">
                <strong>KML</strong> significa "Keyhole Markup Language". É um formato de arquivo usado para exibir 
                dados geográficos em mapas como Google Earth, Google Maps e outros aplicativos de mapas.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#110043] mb-2">Para que serve?</h4>
                <ul className="list-disc list-inside text-sm text-[#110043]/70 space-y-1">
                  <li>Marcar pontos específicos no mapa (como locais de fotos, endereços, etc.)</li>
                  <li>Criar rotas e trajetos</li>
                  <li>Compartilhar localizações com outras pessoas</li>
                  <li>Importar dados para aplicativos de GPS</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Como funciona o sistema */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#110043] flex items-center gap-2">
                <Info className="h-5 w-5" />
                Como funciona este sistema?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#110043]/80">
                Este sistema permite criar arquivos KML de <strong>duas maneiras diferentes</strong>:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Método 1: Entrada Manual
                  </h4>
                  <p className="text-sm text-green-700 mb-3">
                    Digite ou cole as coordenadas diretamente no sistema
                  </p>
                  <Badge variant="outline" className="text-green-700 border-green-300">
                    Ideal para poucos pontos
                  </Badge>
                </div>

                <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <FileSpreadsheet className="h-4 w-4" />
                    Método 2: Upload Excel
                  </h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Carregue um arquivo Excel com seus dados organizados
                  </p>
                  <Badge variant="outline" className="text-blue-700 border-blue-300">
                    Ideal para muitos pontos
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Método 1: Entrada Manual */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#110043] flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Método 1: Entrada Manual de Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">📝 Como usar:</h4>
                <ol className="list-decimal list-inside text-sm text-yellow-700 space-y-2">
                  <li>Na caixa de texto, digite suas coordenadas no formato:</li>
                  <li><code className="bg-white px-2 py-1 rounded">Nome do Local, Latitude, Longitude</code></li>
                  <li>Uma linha para cada ponto</li>
                  <li>Clique em "Gerar KML"</li>
                </ol>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#110043] mb-2">📋 Exemplo:</h4>
                <pre className="text-sm bg-white p-3 rounded border overflow-x-auto">
{`Escola Municipal, -15.7942, -47.8822
Posto de Saúde, -15.7943, -47.8823
Praça Central, -15.7944, -47.8824`}
                </pre>
              </div>

              <div className="flex items-start gap-2 text-sm text-[#110043]/70">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Use vírgulas para separar nome, latitude e longitude</span>
              </div>
            </CardContent>
          </Card>

          {/* Método 2: Upload Excel */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#110043] flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5" />
                Método 2: Upload de Arquivo Excel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">💻 Como usar:</h4>
                <ol className="list-decimal list-inside text-sm text-blue-700 space-y-2">
                  <li>Prepare seu arquivo Excel (.xlsx) com as coordenadas</li>
                  <li>Clique em "Escolher arquivo" na seção de upload</li>
                  <li>Selecione seu arquivo Excel</li>
                  <li>O sistema processará automaticamente!</li>
                  <li>Clique em "Gerar KML" quando os dados aparecerem na tabela</li>
                </ol>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-[#110043] mb-3">📊 Estrutura do Excel:</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-medium text-green-800 mb-2">✅ Colunas Obrigatórias:</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li><code className="bg-white px-2 py-1 rounded">name</code> - Nome do ponto</li>
                      <li><code className="bg-white px-2 py-1 rounded">Latitude</code> - Coordenada de latitude</li>
                      <li><code className="bg-white px-2 py-1 rounded">Longitude</code> - Coordenada de longitude</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">📝 Colunas Opcionais:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li><code className="bg-white px-2 py-1 rounded">description</code> - Descrição do ponto</li>
                      <li><code className="bg-white px-2 py-1 rounded">status</code> - Status do ponto</li>
                      <li><code className="bg-white px-2 py-1 rounded">date</code> - Data</li>
                      <li><code className="bg-white px-2 py-1 rounded">fileSize</code> - Tamanho do arquivo</li>
                      <li><code className="bg-white px-2 py-1 rounded">fileType</code> - Tipo do arquivo</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Não tem um arquivo Excel?
                </h4>
                <p className="text-sm text-yellow-700 mb-3">
                  Clique no botão "Baixar Exemplo" para baixar um arquivo modelo que você pode editar!
                </p>
                <Badge variant="outline" className="text-yellow-700 border-yellow-300">
                  Recomendado para iniciantes
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Dicas importantes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#110043] flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Dicas Importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-red-800">Coordenadas corretas</h5>
                    <p className="text-sm text-red-700">
                      Use pontos (.) para decimais, não vírgulas. Exemplo: -15.7942 ✅ | -15,7942 ❌
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-800">Latitude e Longitude</h5>
                    <p className="text-sm text-blue-700">
                      Latitude: -90 a +90 | Longitude: -180 a +180
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-green-800">Onde encontrar coordenadas?</h5>
                    <p className="text-sm text-green-700">
                      Google Maps: clique com botão direito → "O que há aqui?" → copie as coordenadas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* O que fazer com o arquivo KML */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#110043] flex items-center gap-2">
                <Map className="h-5 w-5" />
                O que fazer com o arquivo KML gerado?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#110043]/80">
                Depois de gerar seu arquivo KML, você pode:
              </p>
              
              <div className="grid gap-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Abrir no Google Earth</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Map className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Importar no Google Maps (Meus Mapas)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <FileSpreadsheet className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">Usar em aplicativos de GPS</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Upload className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">Compartilhar com outras pessoas</span>
                </div>
              </div>
            </CardContent>          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#110043] flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Perguntas Frequentes (FAQ)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold text-[#110043] mb-1">🤔 O botão de upload não funciona?</h5>
                  <p className="text-sm text-[#110043]/70">
                    Não há problema! O upload acontece automaticamente quando você seleciona um arquivo. 
                    Só precisa clicar em "Escolher arquivo" e selecionar seu Excel.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-[#110043] mb-1">📊 Que tipo de coordenadas posso usar?</h5>
                  <p className="text-sm text-[#110043]/70">
                    Use coordenadas decimais (ex: -15.7942, -47.8822). O sistema aceita coordenadas do Google Maps, GPS ou qualquer fonte em formato decimal.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h5 className="font-semibold text-[#110043] mb-1">❌ Meu arquivo Excel não foi aceito?</h5>
                  <p className="text-sm text-[#110043]/70">
                    Verifique se: 1) O arquivo é .xlsx, 2) Tem as colunas "name", "Latitude", "Longitude", 3) As coordenadas usam ponto (.) para decimais.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h5 className="font-semibold text-[#110043] mb-1">🗺️ O arquivo KML não abre no Google Earth?</h5>
                  <p className="text-sm text-[#110043]/70">
                    Certifique-se de que o Google Earth está instalado. Você também pode tentar importar o arquivo através de "Arquivo" → "Abrir" no Google Earth.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-[#110043] mb-1">🔢 Quantos pontos posso adicionar?</h5>
                  <p className="text-sm text-[#110043]/70">
                    O sistema suporta até 1000 pontos por arquivo Excel. Para entrada manual, não há limite específico.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-4">
                  <h5 className="font-semibold text-[#110043] mb-1">💾 Como salvo meu trabalho?</h5>
                  <p className="text-sm text-[#110043]/70">
                    Depois de gerar o KML, o arquivo será baixado automaticamente. Salve-o em uma pasta fácil de encontrar no seu computador.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Botão voltar */}
          <div className="text-center pt-6">
            <Link href="/">
              <Button className="bg-[#3700ff] text-white hover:bg-[#42eedc] hover:text-[#110043] transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar e Começar a Usar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
