import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DataPoint {
  nome: string
  descricao: string
  latitude: string
  longitude: string
  status?: string
  fileSize?: string
  fileType?: string
  date?: string
  predictionDate?: string
}

interface DataTableProps {
  data: DataPoint[]
}

export default function DataTable({ data }: DataTableProps) {
  // Detectar quais colunas adicionais estão presentes nos dados
  const hasAdditionalColumns = data.some(item => 
    item.status || item.fileSize || item.fileType || item.date || item.predictionDate
  )

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-[#d4d4d8]/30 text-[#110043] font-semibold">Nome do Ponto</TableHead>
            <TableHead className="bg-[#d4d4d8]/30 text-[#110043] font-semibold">Descrição</TableHead>
            <TableHead className="bg-[#d4d4d8]/30 text-[#110043] font-semibold">Latitude</TableHead>
            <TableHead className="bg-[#d4d4d8]/30 text-[#110043] font-semibold">Longitude</TableHead>
            {hasAdditionalColumns && (
              <>
                <TableHead className="bg-[#d4d4d8]/30 text-[#110043] font-semibold">Status</TableHead>
                <TableHead className="bg-[#d4d4d8]/30 text-[#110043] font-semibold">Tamanho</TableHead>
                <TableHead className="bg-[#d4d4d8]/30 text-[#110043] font-semibold">Tipo</TableHead>
                <TableHead className="bg-[#d4d4d8]/30 text-[#110043] font-semibold">Data</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <TableRow key={index} className="border-b border-[#d4d4d8]">
                <TableCell className="text-[#110043]">{item.nome}</TableCell>
                <TableCell className="text-[#110043]">{item.descricao}</TableCell>
                <TableCell className="text-[#110043]">{item.latitude}</TableCell>
                <TableCell className="text-[#110043]">{item.longitude}</TableCell>
                {hasAdditionalColumns && (
                  <>
                    <TableCell className="text-[#110043]">{item.status || '-'}</TableCell>
                    <TableCell className="text-[#110043]">{item.fileSize || '-'}</TableCell>
                    <TableCell className="text-[#110043]">{item.fileType || '-'}</TableCell>
                    <TableCell className="text-[#110043]">{item.date || '-'}</TableCell>
                  </>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={hasAdditionalColumns ? 8 : 4} className="text-center py-4 text-[#110043]">
                Nenhum dado disponível. Cole seus dados na área de texto acima ou faça upload de um arquivo Excel.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
