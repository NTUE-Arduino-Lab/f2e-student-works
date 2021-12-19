import styles from "./WorkItem.module.css";
import Github from "../assets/images/github.svg?component";
import Ppt from "../assets/images/ppt.svg?component";
import img_404 from "../assets/images/404.png";

function WorkItem({ data, school, categroy }) {
  const year_text = categroy.split("-");

  return (
    <div
      className={`${styles.workitem} ${
        school === "ntue" ? styles.workitem_ntue : styles.workitem_ntut
      }`}
    >
      <a href={data.websiteUrl} className={styles.link_website} target="_blank">
        <div className={styles.mask}></div>
        {data.imgUrl.slice(-4) === ".png" || data.imgUrl.slice(-4) === ".jpg" ? (
          <img src={data.imgUrl} alt="" />
        ) : (
          <img src={img_404} alt="" />
        )}
      </a>
      <h3>{data.workName}</h3>
      <div className={styles.skilllist}>
        {data.skill.length > 0
          ? data.skill.map((ele) =>
              ele !== "" ? <span key={`skill-${ele}`}>{ele}</span> : null
            )
          : null}
      </div>
      <div className={styles.linklist}>
        <a href={data.pptUrl} target="_blank">
          <Ppt />
        </a>
        <a href={data.githubUrl} target="_blank">
          <Github />
        </a>
      </div>
      <div className={styles.line}></div>
      <div className={styles.namelist}>
        <span>BY</span>
        <span>{data.name.join(" ")}</span>
      </div>
      <div className={styles.categroy}>
        {year_text[0]}年・{year_text[1] === "1" ? "期中專題" : "期末專題"}
      </div>
    </div>
  );
}

export default WorkItem;
