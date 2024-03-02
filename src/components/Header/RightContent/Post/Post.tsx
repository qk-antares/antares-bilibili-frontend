import {Badge, Divider, Popover} from 'antd';
import React, {useState} from 'react';
import publicStyles from "../styles.less";
import styles from "./styles.less"
import {ArrowIcon, PostIcon} from "@/utils/icons";
import TopTabs from "@/components/Common/TopTabs/TopTabs";

const Post: React.FC = () => {
  const items = [
    {id: '1', label: '视频'},
    {id: '2', label: '直播'},
    {id: '3', label: '专栏'},
  ]
  const [activeId, setActiveId] = useState<string>('1');

  return (
    <Popover
      overlayInnerStyle={{padding: 0}}
      arrow={false}
      placement="bottom"
      content={
        <div style={{width: 370}}>
          <TopTabs items={items} activeId={activeId} setActiveId={setActiveId}/>

          <div className={styles.tabsPanelContent}>
            <div>
              <div className={styles.tipBox}>暂时没有新动态了哦！</div>

              <div className={styles.splitLine}>
                <Divider plain style={{color: 'var(--text3)',fontSize: 12}}>历史动态</Divider>
              </div>

              <div className={styles.dynamicItem}>
                <div className={styles.dynamicListItem} title="你醒啦？手术很成功">
                  <div className={styles.dynamicContainer}>
                    <div className={styles.dynamicBoxLeft}>
                      <a className={styles.dynamicAvatar} title="落九川">
                        <div className={styles.biliAvatar}>
                          <img className={styles.biliAvatarImg} src='img/mock/dynamic/user1.png'/>
                          <span className={styles.biliAvatarRightIcon}></span>
                        </div>
                      </a>
                    </div>

                    <div className={styles.dynamicBoxCenter}>
                      <div className={styles.dynamicNameLine}>
                        <div className={styles.userName}>
                          <a title="落九川">落九川</a>
                        </div>
                      </div>
                      <a className={styles.dynamicInfoContent} title="你醒啦？手术很成功">你醒啦？手术很成功</a>
                      <span className={styles.publishTime}>1小时前</span>
                    </div>

                    <a className={styles.dynamicBoxRight}>
                      <div className={styles.cover}>
                        <picture className={styles.img}>
                          <img src="img/mock/dynamic/cover1.png" loading="lazy"/>
                        </picture>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <a className={styles.bottomBtn}>
              查看全部动态
              <ArrowIcon width='10' height='10' className={styles.bottomBtnIcon}/>
            </a>
          </div>
        </div>
      }
    >

      <li className={publicStyles.iconWrap}>
        <a className={publicStyles.iconLink} onClick={e => e.preventDefault()}>
          <Badge style={{padding: '0 2px', height: 16, minHeight: 16, width: 16, minWidth: 16, display: 'flex', alignItems: 'center', justifyContent: 'center'}} count={9}>
            <PostIcon className={publicStyles.icon} width="20" height="21"/>
          </Badge>
          <span>动态</span>
        </a>
      </li>
    </Popover>
  );
};
export default Post;
