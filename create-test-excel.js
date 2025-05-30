// Teste simples do sistema Excel
const XLSX = require('xlsx');

// Dados de teste simples
const testData = [
  {
    name: "Teste 1",
    Latitude: -15.7942,
    Longitude: -47.8822,
    description: "Ponto de teste 1"
  },
  {
    name: "Teste 2", 
    Latitude: -15.7943,
    Longitude: -47.8823,
    description: "Ponto de teste 2"
  }
];

const ws = XLSX.utils.json_to_sheet(testData);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Pontos");
XLSX.writeFile(wb, "teste-simples.xlsx");

console.log("Arquivo teste-simples.xlsx criado para teste!");
