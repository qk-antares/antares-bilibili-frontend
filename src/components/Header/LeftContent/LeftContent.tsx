import React from "react";
import styles from './styles.less'
import {BiliIcon} from "@/utils/icons";

const LeftContent:React.FC = ()=>{
  return <div className={styles.outerDiv}>
    <BiliIcon height='18' width='18' style={{marginRight: 6}}/>
    <a className={styles.home}>
      <span>首页</span>
    </a>

    <a className={styles.item}>
      <span>番剧</span>
    </a>

    <a className={styles.item}>
      <span>直播</span>
    </a>

    <a className={styles.item}>
      <span>游戏中心</span>
    </a>

    <a className={styles.item}>
      <span>会员购</span>
    </a>

    <a className={styles.item}>
      <span>漫画</span>
    </a>
  </div>
}

export default LeftContent