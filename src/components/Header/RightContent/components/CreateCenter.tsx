import React from 'react';
import styles from "../styles.less";
import {CreateIcon} from "@/utils/icons";

const CreateCenter: React.FC = () => {
  return (
    <li className={styles.iconWrap}>
      <a className={styles.iconLink} onClick={e => e.preventDefault()}>
        <CreateIcon className={styles.icon} width="20" height="21"/>
        <span>创作中心</span>
      </a>
    </li>
  );
};
export default CreateCenter;
