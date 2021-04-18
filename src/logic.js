import logo from './assets/images/logo.png';
import './App.css';
import { useEffect, useState } from "react"


const getData = async () => {
  const SHEET_ID = "18XEdllvhMFlR_kiK5nDi0JWRHW0DyOmEUzbjhlBd3Bg"
  const sheetApi = {
    worksheets: `https://spreadsheets.google.com/feeds/worksheets/${SHEET_ID}/public/full?alt=json`,
    cells: numberSheet => `https://spreadsheets.google.com/feeds/cells/${SHEET_ID}/${numberSheet}/public/full?alt=json`,
  }
  const data = { worksheets: {} }

  const getWorksheets = await fetch(sheetApi.worksheets)
  const getWorksheetsJSON = await getWorksheets.json()
  const { entry: entryWorksheets } = getWorksheetsJSON.feed

  entryWorksheets.forEach((worksheet, idx) => {
    const worksheetName = worksheet.content["$t"].toLowerCase().trim()
    data.worksheets[idx + 1] = worksheetName
  })

  const worksheetEntries = Object.entries(data.worksheets)

  for (const worksheet of worksheetEntries) {
    const numberSheet = worksheet[0]
    const sheetName = worksheet[1]

    data[sheetName] = { headers: {}, values: {} }

    const getCells = await fetch(sheetApi.cells(numberSheet))
    const getCellsJSON = await getCells.json()
    const { entry: entryCells } = getCellsJSON.feed

    entryCells.forEach(cells => {
      const { row, col, $t: cellValue } = cells['gs$cell']

      if (row === "1") data[sheetName].headers[parseInt(col)] = cellValue.trim()
      else {
        const register = data[sheetName].values[parseInt(row) - 1]
        const title = data[sheetName].headers[parseInt(col)]
        const dataRegister = { [`${title}`]: cellValue.trim() }
        data[sheetName].values[parseInt(row) - 1] = register ? { ...register, ...dataRegister } : { ...dataRegister }
      }
    })
  }

  return data
}

const App = () => {
  const [sheetData, setSheetData] = useState(null);

  useEffect(async () => {
    const dataGoogleSheets = await getData()
    console.log(dataGoogleSheets)
    setSheetData(dataGoogleSheets);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Delicius Gourmet
        </p>
      </header>
    </div>
  );
}

export default App;
