import { useState, useEffect } from "react";
import WorkItem from "../components/WorkItem";
import styles from "../pages/Works.module.css";

function WorksList({ works, school, selected_categroy }) {
  const [page, setpage] = useState(1);
  const [_works, setworks] = useState(works);

  useEffect(() => {
    setworks(works);
  }, [works]);

  const _renderPageBtn = () => {
    let list = [];
    for (let i = 1; i <= works.length / 12 + 1; i++) {
      list.push(
        <a
          key={`page-${i}`}
          className={`${page === i ? styles.a_active : ""}`}
          onClick={() => (page === i ? null : _clickPageBtn(i))}
        >
          {i}
        </a>
      );
    }
    return list;
  };

  const _clickPageBtn = (newpage) => {
    if (newpage <= parseInt(works.length / 12) + 1 && newpage >= 1) {
      setpage(newpage);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className={styles.section}>
      {_works.length > 0 ? (
        <>
          <div className={styles.workslist}>
            {_works
              .slice(0 + (page - 1) * 12, 12 + (page - 1) * 12)
              .map((ele, idx) => (
                <WorkItem
                  data={ele}
                  key={`work-${idx}`}
                  school={school}
                  categroy={selected_categroy}
                />
              ))}
          </div>
          <div className={styles.pagelist}>
            {_renderPageBtn()}
            <a
              className={`${
                page >= _works.length / 12 ? styles.a_disable : ""
              }`}
              onClick={
                page < _works.length / 12 ? () => _clickPageBtn(page + 1) : null
              }
            >
              Next
            </a>
          </div>
        </>
      ) : (
        <div className={styles.error_message}>查無作品資料</div>
      )}
    </section>
  );
}

export default WorksList;
