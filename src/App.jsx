import { useEffect, useState } from "react";
import { HashRouter as BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import { getSheetData } from "./api/index";
import Home from "./pages/Home";
import Works from "./pages/Works";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import styles from "./App.module.css";
import projects from "./json/projects.json"

// 驗證數據格式是否正確
const validateDataFormat = (data) => {
  return data && 
         typeof data === 'object' && 
         (data.ntue !== undefined || data.ntut !== undefined);
};

function App() {
  const [data, setdata] = useState(() => {
    try {
      const initialState = localStorage.getItem('projects');
      if (initialState) {
        const parsed = JSON.parse(initialState);
        // 驗證 localStorage 中的數據格式
        if (validateDataFormat(parsed)) {
          return parsed;
        } else {
          // 如果格式不對，清除 localStorage 並使用預設數據
          console.warn('localStorage 中的數據格式不正確，使用預設數據');
          localStorage.removeItem('projects');
          return projects;
        }
      }
      return projects;
    } catch (error) {
      console.error('解析 localStorage 數據時出錯:', error);
      localStorage.removeItem('projects');
      return projects;
    }
  });

  const [loading, setloading] = useState(true);
  const [readyLoadingEnd, setreadyLoadingEnd] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // 只有在數據格式正確時才保存到 localStorage
    if (validateDataFormat(data)) {
      localStorage.setItem('projects', JSON.stringify(data)); 
    }
  }, [data]);

  console.log('data', (data));
  console.log('ntue', (data?.ntue));
  console.log('ntut', (data?.ntut));

  const getData = async () => {
    try {
      const result = await getSheetData();
      if (result !== undefined && result !== null) {
        console.log('result', (result));
        // 驗證 API 返回的數據格式
        if (validateDataFormat(result)) {
          setdata(result);
          setreadyLoadingEnd(true);
          setTimeout(() => {
            setloading(false);
          }, 2000);
        } else {
          console.error('API 返回的數據格式不正確:', result);
          // 如果 API 數據格式不對，保持使用預設數據
          setreadyLoadingEnd(true);
          setTimeout(() => {
            setloading(false);
          }, 2000);
        }
      } else {
        // 如果 API 沒有返回數據，使用預設數據
        console.warn('API 未返回數據，使用預設數據');
        setreadyLoadingEnd(true);
        setTimeout(() => {
          setloading(false);
        }, 2000);
      }
    } catch (error) {
      console.error('獲取數據時出錯:', error);
      setreadyLoadingEnd(true);
      setTimeout(() => {
        setloading(false);
      }, 2000);
    }
  };

  return (
    <div className={styles.app}>
      {!data ? (
        <div className={styles.loading_wrapper}>
          <div
            className={styles.mask}
            style={{
              opacity: !readyLoadingEnd ? "1" : "0",
            }}
          ></div>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets8.lottiefiles.com/packages/lf20_1whhjts9.json"
            style={{
              width: "320px",
              transition: "all 0.2s",
              opacity: !readyLoadingEnd ? "1" : "0",
            }}
          ></lottie-player>
        </div>
      ) : null}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Navigate replace to={"/"} />} />
          {data?.ntue && Object.keys(data.ntue).length > 0 ? (
            <Route
              path="/ntue"
              element={
                <Navigate replace to={`/ntue/${Object.keys(data.ntue)[0]}`} />
              }
            />
          ) : null}
          {data?.ntue ? (
            <Route
              path="/ntue/:categroy"
              element={<Works data={data.ntue} school={"ntue"} />}
            ></Route>
          ) : null}
          {data?.ntut && Object.keys(data.ntut).length > 0 ? (
            <Route
              path="/ntut"
              element={
                <Navigate replace to={`/ntut/${Object.keys(data.ntut)[0]}`} />
              }
            />
          ) : null}
          {data?.ntut ? (
            <Route
              path="/ntut/:categroy"
              element={<Works data={data.ntut} school={"ntut"} />}
            ></Route>
          ) : null}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
