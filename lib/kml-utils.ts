export function parseData(input: string) {
  const rows = input.trim().split("\n")
  const data = rows
    .map((row) => {
      const columns = row.split("\t")
      if (columns.length === 4) {
        return {
          nome: columns[0],
          descricao: columns[1],
          latitude: columns[2],
          longitude: columns[3],
        }
      }
      return null
    })
    .filter((item) => item !== null)
  return data
}

export function escapeHTML(str: string) {
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[tag] || tag,
  )
}

export function generateKML(data: any[]) {
  let kmlContent = '<?xml version="1.0" encoding="UTF-8"?>'
  kmlContent += '<kml xmlns="http://www.opengis.net/kml/2.2">'
  kmlContent += "<Document>"

  data.forEach((item) => {
    kmlContent += `<Placemark>
        <name>${escapeHTML(item.nome)}</name>
        <description>${escapeHTML(item.descricao)}</description>
        <Point>
            <coordinates>${item.longitude},${item.latitude},0</coordinates>
        </Point>
    </Placemark>`
  })

  kmlContent += "</Document></kml>"

  downloadKML(kmlContent)
}

export function downloadKML(kmlContent: string) {
  const blob = new Blob([kmlContent], { type: "application/vnd.google-earth.kml+xml" })
  const url = URL.createObjectURL(blob)
  const downloadLink = document.createElement("a")
  downloadLink.href = url
  downloadLink.download = "pontos.kml"
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
  URL.revokeObjectURL(url)
}
