
export const getGoogleSheetData = async (sheetId) => {
  const sheetApis = {
    worksheets: `https://spreadsheets.google.com/feeds/worksheets/${sheetId}/public/full?alt=json`,
    cells: numberSheet => `https://spreadsheets.google.com/feeds/cells/${sheetId}/${numberSheet}/public/full?alt=json`,
  }
  const data = { worksheets: {} }

  const getWorksheets = await fetch(sheetApis.worksheets)
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

    const getCells = await fetch(sheetApis.cells(numberSheet))
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

