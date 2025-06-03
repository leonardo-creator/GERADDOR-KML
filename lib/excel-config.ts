export const EXCEL_CONFIG = {
  // Extensões de arquivo aceitas
  ACCEPTED_EXTENSIONS: ['.xlsx', '.xls'],
  
  // Nomes de colunas aceitos (case-insensitive)
  COLUMN_NAMES: {
    name: ['name', 'Name', 'nome', 'Nome', 'filename', 'fileName', 'arquivo'],
    latitude: ['Latitude', 'latitude', 'lat', 'Lat', 'LAT'],
    longitude: ['Longitude', 'longitude', 'lon', 'Lon', 'lng', 'Lng', 'LON', 'LNG'],
    description: ['description', 'Description', 'descricao', 'Descricao', 'desc', 'Desc'],
    status: ['status', 'Status', 'estado', 'Estado'],
    fileSize: ['fileSize', 'FileSize', 'size', 'Size', 'tamanho', 'Tamanho'],
    fileType: ['fileType', 'FileType', 'type', 'Type', 'tipo', 'Tipo'],
    date: ['date', 'Date', 'data', 'Data', 'datetime', 'dateTime'],
    predictionDate: ['predictionDate', 'PredictionDate', 'prediction', 'Prediction', 'previsao', 'Previsao']
  },
  
  // Tamanho máximo do arquivo (10MB)
  MAX_FILE_SIZE: 10 * 1024 * 1024,
  
  // Número máximo de linhas processadas
  MAX_ROWS: 10000000,
  
  // Mensagens de erro
  ERROR_MESSAGES: {
    NO_FILE: 'Nenhum arquivo foi selecionado',
    INVALID_EXTENSION: 'Por favor, selecione um arquivo Excel (.xlsx ou .xls)',
    FILE_TOO_LARGE: 'Arquivo muito grande. Tamanho máximo: 10MB',
    NO_SHEETS: 'O arquivo não contém planilhas',
    EMPTY_SHEET: 'A planilha está vazia',
    MISSING_COLUMNS: 'Colunas obrigatórias não encontradas. Verifique se existem colunas: name/nome, Latitude/latitude, Longitude/longitude',
    NO_VALID_POINTS: 'Nenhum ponto com coordenadas válidas foi encontrado',
    TOO_MANY_ROWS: `Muitas linhas para processar. Máximo: 1000 linhas`,
    INVALID_COORDINATES: 'Coordenadas inválidas encontradas. Verifique se latitude e longitude são números válidos'
  }
}

export function findColumnValue(row: any, columnNames: string[]): any {
  for (const name of columnNames) {
    if (row.hasOwnProperty(name) && row[name] !== undefined && row[name] !== null && row[name] !== '') {
      return row[name]
    }
  }
  return null
}

export function validateCoordinates(lat: any, lon: any): boolean {
  const latitude = parseFloat(lat)
  const longitude = parseFloat(lon)
  
  if (isNaN(latitude) || isNaN(longitude)) {
    return false
  }
  
  // Validar ranges válidos para coordenadas
  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    return false
  }
  
  return true
}
