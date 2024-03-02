import {Button, Popover} from 'antd';
import React from 'react';
import styles from "../styles.less";

const Upload: React.FC = () => {
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
          <Button className={styles.uploadButton}>
            <svg style={{marginRight: 5}} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-upload-entry__icon"><path d="M12.0824 10H14.1412C15.0508 10 15.7882 10.7374 15.7882 11.6471V12.8824C15.7882 13.792 15.0508 14.5294 14.1412 14.5294H3.84707C2.93743 14.5294 2.20001 13.792 2.20001 12.8824V11.6471C2.20001 10.7374 2.93743 10 3.84707 10H5.90589" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.99413 11.2353L8.99413 3.82353" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.0823 6.29413L8.9941 3.20589L5.90587 6.29413" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            投稿
          </Button>
        </a>
      </li>
    </Popover>
  );
};
export default Upload;
