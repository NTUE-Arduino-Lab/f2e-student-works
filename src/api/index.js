import axios from "axios";

// const baseUrl =
//   "https://script.google.com/macros/s/AKfycbzUvJmNkD6ho5dgCKL5gTLE9pcZc8wXhuxsAE5Uy17OxOBSxoZuPDC2tgdcShzRFr1g7w/exec";

// const baseUrl = "https://script.google.com/macros/s/AKfycbzW5fTHL6mV3UUeACV10FkdWak2Z5CNFuMYBF2GsfHsAGs4SGrxdUPSKRsamWQx5n8j/exec";

const baseUrl = "https://script.google.com/macros/s/AKfycbztMYGVrkUe-V5JLIKMVqfnNULDTAcwK-6WDRjEkgE5Xpq-_k9-xjq_EggHqBEl_0M/exec"


export const getSheetData = async () => {
  try {
    let result = await axios.get(baseUrl, {
      headers: {
        'Accept': 'application/json',
      },
      // 確保 axios 不會自動添加可能導致 CORS 問題的請求頭
      withCredentials: false,
    });

    // 確保返回的是對象
    let data = result.data;
    
    // 如果 data 是字符串，嘗試解析（處理 GAS 可能返回的字符串格式）
    if (typeof data === 'string') {
      // 移除可能的響應頭信息（如 "Access-Control-Allow-Origin: *"）
      // 找到第一個 { 和最後一個 }，提取純 JSON 部分
      const jsonStart = data.indexOf('{');
      const jsonEnd = data.lastIndexOf('}') + 1;
      
      if (jsonStart !== -1 && jsonEnd > jsonStart) {
        const jsonString = data.substring(jsonStart, jsonEnd);
        try {
          data = JSON.parse(jsonString);
        } catch (parseError) {
          console.error('解析 JSON 時出錯:', parseError);
          // 嘗試移除所有非 JSON 內容
          const cleaned = jsonString.replace(/Access-Control-Allow-Origin:\s*\*\s*/gi, '');
          data = JSON.parse(cleaned);
        }
      } else {
        console.error('無法找到有效的 JSON 內容');
        return null;
      }
    }

    // 驗證數據格式
    if (data && typeof data === 'object' && (data.ntue || data.ntut)) {
      return data;
    } else {
      console.error('API 返回的數據格式不正確:', data);
      return null;
    }
  } catch (err) {
    console.error('獲取數據時出錯:', err);
    return null;
  }
};
