import styles from "./WorkItem.module.css";
import Github from "../assets/images/github.svg?component";
import Ppt from "../assets/images/ppt.svg?component";
import img_404 from "../assets/images/404.png";

function WorkItem({ data, school, categroy }) {
  const year_text = categroy.split("-");

  // 檢查 imgUrl 是否有效（存在且不為空字符串）
  const isValidImgUrl = data.imgUrl && data.imgUrl.trim() !== '';
  
  // 如果 imgUrl 無效，直接使用 404 圖片；否則使用原始 imgUrl
  const imgSrc = isValidImgUrl ? data.imgUrl : img_404;

  const add404Img = (ev) => {
    // 防止無限循環：如果已經是 404 圖片，就不再設置
    if (ev.target.src !== img_404) {
      ev.target.src = img_404;
    }
  }

  return (
    <div
      className={`${styles.workitem} ${
        school === "ntue" ? styles.workitem_ntue : styles.workitem_ntut
      }`}
    >
      <a href={data.websiteUrl} className={styles.link_website} target="_blank">
        <div className={styles.mask}></div>
        <img
          onError={add404Img}
          src={imgSrc}
          alt={data.workName || "專題圖片"}
        />
      </a>
      <h3
        className={school=="ntue" ? styles.workitem__title_ntue : styles.workitem__title_ntut}
      >{data.workName}</h3>
      <div className={styles.skilllist}>
        {data.skill && data.skill.length > 0
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
