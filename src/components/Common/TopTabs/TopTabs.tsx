import styles from "./styles.less";
import React from "react";

export type MyTabsItem = {
  id: string;
  label: string;
}

interface MyTabsProps {
  items: MyTabsItem[];
  activeId: string;
  setActiveId: React.Dispatch<React.SetStateAction<string>>;
}

const TopTabs: React.FC<MyTabsProps> = ({items, activeId, setActiveId})=>{
  return  <div className={styles.tabsPanel}>
    {
      items.map(item =>
        <div
          key={item.id}
          className={item.id === activeId ? styles.tabsPanelItemActive : styles.tabsPanelItem}
          onClick={()=>setActiveId(item.id)}>
          {item.label}
        </div>
      )
    }
  </div>
}

export default TopTabs;