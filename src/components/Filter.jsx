import { useState } from "react";
import img_cancel from "../assets/images/cancel.png";
import styles from "./Filter.module.css";

function Filter({ filterData, filterWorks, setShowFilter }) {
  const [input_filter, setinput_filter] = useState(filterData);

  const _selectFilter = (idx) => {
    let arr = [...input_filter];
    arr[idx].selected = !arr[idx].selected;
    setinput_filter(arr);
  };

  const _resetSelectFilter = () => {
    let arr = [...input_filter];
    arr.forEach((ele) => {
      ele.selected = false;
    });
    setinput_filter(arr);
    // filterWorks(arr);
  };

  return (
    <div className={styles.filter_wrapper}>
      <div className={styles.mask} onClick={() => setShowFilter(false)}></div>
      <div className={styles.filter}>
        <a className={styles.btn_cancel} onClick={() => setShowFilter(false)}>
          <img src={img_cancel} alt="" />
        </a>
        <div className={styles.container}>
          <div className={styles.title}>選擇標籤</div>
          <div className={styles.line}></div>
          <div className={styles.skilllist}>
            {input_filter !== undefined && input_filter.length > 0
              ? input_filter.map((ele, idx) => (
                  <a
                    key={`filter-${idx}`}
                    className={`${ele.selected ? styles.btn_skill_active : ""}`}
                    onClick={() => _selectFilter(idx)}
                  >
                    {ele.name}
                  </a>
                ))
              : null}
          </div>
          <div className={styles.btnlist}>
            <a onClick={_resetSelectFilter}>清除</a>
            <a
              onClick={() => {
                filterWorks(input_filter);
                setShowFilter(false);
              }}
            >
              確認
            </a>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Filter;
