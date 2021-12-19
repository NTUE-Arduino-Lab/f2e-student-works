import { useState, useEffect } from "react";
import WorksList from "../components/WorksList";
import Nav from "../components/Nav";
import Filter from "../components/Filter";
import Select from "../components/Select";
import styles from "./Works.module.css";
import main_img_ntue from "../assets/images/ntue.png";
import main_img_ntut from "../assets/images/ntut.png";
import { Link, useLocation, useParams } from "react-router-dom";

function Works({ data, school }) {
  const params = useParams();
  const location = useLocation();

  const [options_categroy, setoptions_categroy] = useState([]);
  const [works, setworks] = useState([]);
  const [showFilter, setshowFilter] = useState(false);

  const [filter, setfilter] = useState([]);

  useEffect(() => {
    _initData();
  }, [data, params.categroy]);

  const _initData = () => {
    //clean state
    let options_category = [];
    let works = [];
    let newFilter = [];

    if (data !== undefined) {
      //set categroy options
      options_category = Object.keys(data).map((ele) =>
        Object.assign(
          {},
          {
            label: `${ele.split("-")[0]}${
              ele.split("-")[1] === "1" ? "期中" : "期末"
            }`,
            value: ele,
          }
        )
      );

      if (data[`${params.categroy}`] !== undefined) {
        //init filter
        data[`${params.categroy}`].forEach((work) => {
          work.skill.forEach((skill) => {
            if (
              !newFilter.some((filter) => filter.name === skill) &&
              skill !== ""
            ) {
              newFilter.push({ name: skill, selected: false });
            }
          });
        });

        newFilter.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });

        works = data[`${params.categroy}`];
      }
    }

    setoptions_categroy(options_category);
    setfilter(newFilter);
    setworks(works);
    setshowFilter(false);
  };

  const filterWorks = (filter) => {
    setfilter(filter);

    let targetData = data[`${params.categroy}`];
    let newWorks = [];

    if (filter.every((filterItem) => !filterItem.selected))
      newWorks = targetData;
    else
      filter.forEach((filterItem) => {
        if (filterItem.selected)
          newWorks = newWorks.concat(
            targetData.filter(
              (work) =>
                work.skill.some((skill) => skill === filterItem.name) &&
                !newWorks.includes(work)
            )
          );
      });

    setworks(newWorks);
  };

  return (
    <div
      className={`${styles.works} ${
        school === "ntue" ? styles.works_ntue : styles.works_ntut
      }`}
    >
      {showFilter ? (
        <Filter
          filterData={filter}
          filterWorks={filterWorks}
          setShowFilter={setshowFilter}
        />
      ) : null}
      <div className={styles.cotent_wrapper}>
        <Nav school={school} />
        <header className={styles.header}>
          <ul className={styles.breadcrumb}>
            <li>
              <Link to="/">首頁</Link>
            </li>
            <li>{">"}</li>
            <li>{school === "ntue" ? "國北教" : "北科大"}</li>
          </ul>
          <div className={styles.title_wrapper}>
            <h1>{school === "ntue" ? "NTUEDTD" : "NTUTIXD"}</h1>
            {school === "ntue" ? (
              <img src={main_img_ntue} alt="" />
            ) : (
              <img src={main_img_ntut} alt="" />
            )}
          </div>
          <ul className={styles.search_bar}>
            <li>
              <label className={styles.categroy}>
                <span>分類</span>
                {data !== undefined ? (
                  <Select options={options_categroy} school={school} />
                ) : null}
              </label>
            </li>
            <li>
              <a
                className={`${
                  filter.some((ele) => ele.selected) ? styles.a_active : ""
                }`}
                style={
                  data !== undefined
                    ? data.hasOwnProperty(params.categroy) && filter.length > 0
                      ? null
                      : { color: "rgba(119, 119, 119, 0.533)" }
                    : null
                }
                onClick={() =>
                  data !== undefined
                    ? data.hasOwnProperty(params.categroy) && filter.length > 0
                      ? setshowFilter(true)
                      : null
                    : null
                }
              >
                進階搜尋
              </a>
            </li>
          </ul>
        </header>
        <WorksList
          works={works}
          school={school}
          selected_categroy={params.categroy}
        />
      </div>
    </div>
  );
}

export default Works;
