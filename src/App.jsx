import { useEffect, useState } from "react";
import { HashRouter as BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import { getSheetData } from "./api/index";
import Home from "./pages/Home";
import Works from "./pages/Works";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import styles from "./App.module.css";
import projects from "./json/projects.json"

function App() {
  const [data, setdata] = useState(() => {
    const initialState = localStorage.getItem('projects');
    return initialState ? JSON.parse(initialState) : projects;
  });

  const [loading, setloading] = useState(true);
  const [readyLoadingEnd, setreadyLoadingEnd] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(data)); 
  }, [data]);

  const getData = async () => {
    const result = await getSheetData();
    if (result !== undefined) {
      // console.log('result', JSON.stringify(result));
      setdata(result);
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
          {data.ntue !== undefined ? (
            <Route
              path="/ntue"
              element={
                <Navigate replace to={`/ntue/${Object.keys(data.ntue)[0]}`} />
              }
            />
          ) : null}
          <Route
            path="/ntue/:categroy"
            element={<Works data={data.ntue} school={"ntue"} />}
          ></Route>
          {data.ntut !== undefined ? (
            <Route
              path="/ntut"
              element={
                <Navigate replace to={`/ntut/${Object.keys(data.ntut)[0]}`} />
              }
            />
          ) : null}
          <Route
            path="/ntut/:categroy"
            element={<Works data={data.ntut} school={"ntut"} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
