import React from 'react';
import Message from "@/components/Header/RightContent/components/Message";
import UserAvatar from "@/components/Header/RightContent/components/UserAvatar";
import styles from './styles.less'
import Vip from "@/components/Header/RightContent/components/Vip";
import Post from "@/components/Header/RightContent/Post/Post";
import Star from "@/components/Header/RightContent/Star/Star";
import History from "@/components/Header/RightContent/components/History";
import CreateCenter from "@/components/Header/RightContent/components/CreateCenter";
import Upload from "@/components/Header/RightContent/components/Upload";

const RightContent: React.FC = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center'}} >
      <span style={{margin: '0 10px'}} className={styles.outerDiv}>
        <UserAvatar/>
      </span>

      <span className={styles.outerDiv}>
        <Vip/>
      </span>

      <span className={styles.outerDiv}>
        <Message/>
      </span>

      <span className={styles.outerDiv}>
        <Post/>
      </span>

      <span className={styles.outerDiv}>
        <Star/>
      </span>

      <span className={styles.outerDiv}>
        <History/>
      </span>

      <span className={styles.outerDiv}>
        <CreateCenter/>
      </span>

      <span className={styles.outerDiv} style={{marginLeft: 8}}>
        <Upload/>
      </span>
    </div>
  );
};
export default RightContent;

