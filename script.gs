// 處理 OPTIONS 預檢請求（CORS）
function doOptions() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {

  const SheetMain = SpreadsheetApp.openById(`1rakucsNa4DxaQ0Y9nZxEedFY2Zu-UaEGBo5HGKtaPPk`).getSheets()[0];

  let data = {
    ntue: {},
    ntut: {}
  }

  const sheetLastRow = SheetMain.getLastRow()

  // ntue
  for (let i = 0; i < sheetLastRow - 1; i++) {
    const id = SheetMain.getSheetValues(2 + i, 2, 1, 1)[0][0]
    if (id !== "") {
      const SheetChildSpreadsheet = SpreadsheetApp.openById(id)
      const SheetChild = SheetChildSpreadsheet.getSheets()[0] // 獲取第一個工作表
      data.ntue[SheetMain.getSheetValues(2 + i, 1, 1, 1)[0][0]] = getData(SheetChild, 'ntue');
    }
  }

  //ntut
  for (let i = 0; i < sheetLastRow - 1; i++) {
    const id = SheetMain.getSheetValues(2 + i, 3, 1, 1)[0][0]
    if (id !== "") {
      const SheetChildSpreadsheet = SpreadsheetApp.openById(id)
      const SheetChild = SheetChildSpreadsheet.getSheets()[0] // 獲取第一個工作表
      year = SheetMain.getSheetValues(2 + i, 1, 1, 1)[0][0]
      if(year == '112-1')
        console.log(getData(SheetChild,'ntut', year))
      data.ntut[SheetMain.getSheetValues(2 + i, 1, 1, 1)[0][0]] = getData(SheetChild,'ntut', year);
    }
  }

  // 正確設置 JSON 響應
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// 輔助函數：獲取儲存格中的超連結 URL，如果沒有超連結則返回顯示的文字
function getHyperlinkUrl(sheet, row, col) {
  try {
    // 確保 row 和 col 是數字類型
    const rowNum = Number(row);
    const colNum = Number(col);
    
    // 驗證參數是否為有效數字
    if (isNaN(rowNum) || isNaN(colNum) || rowNum < 1 || colNum < 1) {
      // 如果參數無效，使用 getSheetValues 作為備用
      const value = sheet.getSheetValues(rowNum, colNum, 1, 1)[0][0];
      return value || '';
    }
    
    const cell = sheet.getRange(rowNum, colNum);
    const richTextValue = cell.getRichTextValue();
    const linkUrl = richTextValue.getLinkUrl();
    
    // 如果有超連結，返回 URL；否則返回顯示的文字
    if (linkUrl) {
      return linkUrl;
    } else {
      // 檢查是否為 HYPERLINK 公式
      const formula = cell.getFormula();
      if (formula && formula.toUpperCase().startsWith('=HYPERLINK(')) {
        // 提取 HYPERLINK 公式中的 URL
        const match = formula.match(/=HYPERLINK\("([^"]+)"/);
        if (match && match[1]) {
          return match[1];
        }
      }
      // 如果都沒有，返回儲存格的值
      return cell.getValue();
    }
  } catch (e) {
    // 如果出錯，使用 getSheetValues 作為備用
    try {
      const rowNum = Number(row);
      const colNum = Number(col);
      const value = sheet.getSheetValues(rowNum, colNum, 1, 1)[0][0];
      return value || '';
    } catch (e2) {
      return '';
    }
  }
}

function getData(SheetName,school, year) {
  year = year? year : '' 
  // Logger.log(school + year);
  let data = []
  const sheetLastRow = SheetName.getLastRow()
  let pastName = ''

  for (let i = 0; i < sheetLastRow; i += 1) {
    let info = {}
    const row = 2 + i; // 實際行號（從第 2 行開始，因為第 1 行是標題）
    
    // work
    if((SheetName.getSheetValues(row, 5, 1, 1)[0][0] != pastName) && (SheetName.getSheetValues(row, 5, 1, 1)[0][0] != '')) {
      pastName = SheetName.getSheetValues(row, 5, 1, 1)[0][0]

      info.workName = SheetName.getSheetValues(row, 5, 1, 1)[0][0]
      // 使用輔助函數獲取超連結 URL
      info.githubUrl = getHyperlinkUrl(SheetName, row, 6)
      info.websiteUrl = getHyperlinkUrl(SheetName, row, 7)
      // Logger.log('i = ' + i)
      // Logger.log('workName = ' + info.workName)
      // Logger.log('Git URL = ' + info.githubUrl)
      // Logger.log('Web URL = ' + info.websiteUrl)
      info.pptUrl = getHyperlinkUrl(SheetName, row, 8)
      
      switch(SheetName.getLastColumn()){
        case 12:
          info.imgUrl = getHyperlinkUrl(SheetName, row, 10)
          info.skill = SheetName.getSheetValues(row, 11, 1, 1)[0][0].split('/')
          break;
        case 11:
          info.imgUrl = getHyperlinkUrl(SheetName, row, 9)
          info.skill = SheetName.getSheetValues(row, 10, 1, 1)[0][0].split('/')
          break;
        default:
          break;
      }

      // name
      let name = []
      for (let j = 0; j < 3; j++) {
        let temp = SheetName.getSheetValues(row + j, 4, 1, 1)[0][0]
        if (temp !== "") {
          name.push(temp)
          if (j == 2)
            i++
        }
      }
      info.name = name

      data.push(info)

    }

  }
  return data
}