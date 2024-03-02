import {Popover} from 'antd';
import React from 'react';
import styles from "../styles.less";
import {HistoryIcon} from "@/utils/icons";

const History: React.FC = () => {
  return (
    <Popover
      overlayInnerStyle={{padding: 0}}
      onOpenChange={(open)=>{

      }}
      placement="bottomRight"
      title={<div style={{padding: '8px 0 0 16px'}}>动态</div>}
      content={
        <div id="scrollableDiv" style={{width: 400, maxHeight: 480, overflow: 'scroll'}}>
          156456
        </div>
      }
      arrow={{pointAtCenter: true}}
    >

      <li className={styles.iconWrap}>
        <a className={styles.iconLink} onClick={e => e.preventDefault()}>
          <HistoryIcon width="20" height="21" className={styles.icon}/>
          <span>历史</span>
        </a>
      </li>
    </Popover>
  );
};
export default History;
