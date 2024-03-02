import styles from "./styles.less";
import React from "react";

export type MyTabsItem = {
  id: string;
  data: any;
}

interface LeftTabsProps {
  items: MyTabsItem[];
  activeId: string;
  setActiveId: React.Dispatch<React.SetStateAction<string>>;
}

const TopTabs: React.FC<LeftTabsProps> = ({items, activeId, setActiveId})=>{
  return <div className={styles.leftTabs}>
    {
      items.map(item =>
        <div
          key={item.id}
          className={item.id === activeId ? styles.tabItemActive : styles.tabItem}
          onClick={()=>setActiveId(item.id)}>
          <span
            className={item.id === activeId ? styles.tabItemTitleActive : styles.tabItemTitle}
            title={item.data.title}>
            {item.data.title}
          </span>
          <span className={item.id === activeId ? styles.tabItemNumActive : styles.tabItemNum}>343</span>
        </div>
      )
    }
  </div>
}

export default TopTabs;