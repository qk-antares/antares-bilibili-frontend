import LeftContent from '@/components/Header/LeftContent/LeftContent';
import LeftContentFixed from '@/components/Header/LeftContentFixed/LeftContentFixed';
import RightContent from '@/components/Header/RightContent/RightContent';
import SearchBox from '@/components/Header/SearchBox/SearchBox';
import { HotIcon, PostIcon } from '@/utils/icons';
import { Col, Row } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';
import styles from './styles.less';

interface BaseLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (Math.abs(window.scrollY - scrollY) > 5) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const flag = window.scrollY > 32;
  const navCss: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
    height: 64,
    padding: '0 24px',
    color: flag ? '#18191C' : 'white',
    position: flag ? 'fixed' : 'absolute',
    top: 0,
    zIndex: 1002,
    backgroundColor: flag ? 'white' : 'transparent',
    minWidth: 1100,
    boxShadow: flag ? '0 2px 4px rgba(0,0,0,.08)' : undefined
  }

  return (
    <>
      <div className={styles.header}>
        <div style={navCss}>
          {scrollY > 32 ? <LeftContentFixed/> : <LeftContent/>}

          <SearchBox/>

          <RightContent/>
        </div>

        <div className={styles.bg}>
          <picture className={styles.bgPic}>
            <img className={styles.bgImg}  src='img/bg.webp' alt='背景'/>
          </picture>
        </div>

        <Row className={styles.headerChannel}>
          <Col className={styles.headerIcons}>
            <Row>
              <Col span={12}>
                <a className={styles.post}>
                  <div className={styles.iconBg} style={{backgroundColor: '#ff9212'}}>
                    <PostIcon style={{color: 'white'}} width='25' height='25'/>
                  </div>
                  <span className={styles.iconTitle}>动态</span>
                </a>
              </Col>
              <Col span={12}>
                <a className={styles.post}>

                  <div className={styles.iconBg} style={{backgroundColor: '#f07775'}}>
                    <HotIcon width='25' height='25'/>
                  </div>
                  <span className={styles.iconTitle}>热门</span>
                </a>
              </Col>
            </Row>
          </Col>

          <Col flex='auto'>
            <div className={styles.channelItems}>
              <div className={styles.channelItemsLeft}>
                <a className={styles.btn}>番 剧</a>
                <a className={styles.btn}>电 影</a>
                <a className={styles.btn}>国 创</a>
                <a className={styles.btn}>电 视 剧</a>
                <a className={styles.btn}>综 艺</a>
                <a className={styles.btn}>纪 录 片</a>
                <a className={styles.btn}>动 画</a>
                <a className={styles.btn}>游 戏</a>
                <a className={styles.btn}>鬼 畜</a>

                <a className={styles.btn}>音 乐</a>
                <a className={styles.btn}>舞 蹈</a>
                <a className={styles.btn}>影 视</a>
                <a className={styles.btn}>娱 乐</a>
                <a className={styles.btn}>知 识</a>
                <a className={styles.btn}>科 技</a>
                <a className={styles.btn}>资 讯</a>
                <a className={styles.btn}>美 食</a>
                <a className={styles.btn}>生 活</a>
                <a className={styles.btn}>搞 笑</a>
                <a className={styles.btn}>更 多</a>
              </div>

              <div className={styles.channelItemsRight}>
                <a className={styles.link}>
                  <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M810.6496 153.6C843.6736 153.6 870.4 180.3264 870.4 213.3504v597.2992c0 33.024-26.7264 59.7504-59.7504 59.7504H213.3504A59.7504 59.7504 0 0 1 153.6 810.6496V213.3504C153.6 180.3264 180.3264 153.6 213.3504 153.6z m-332.8 460.8H341.3504a34.1504 34.1504 0 0 0 0 68.2496h136.4992a34.1504 34.1504 0 1 0 0-68.2496z m204.8-136.6016H341.3504a34.1504 34.1504 0 0 0 0 68.2496h341.2992a34.1504 34.1504 0 0 0 0-68.2496z m0-136.3968H341.3504a34.1504 34.1504 0 0 0 0 68.2496h341.2992a34.1504 34.1504 0 1 0 0-68.2496z"></path></svg>
                  <span>专 栏</span>
                </a>

                <a className={styles.link}>
                  <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M682.6496 204.8512c35.4816 0 64.6656 27.136 67.9424 61.696l0.3072 6.6048V358.4l81.92-61.44a34.2016 34.2016 0 0 1 53.248 17.408l1.024 4.7616 0.3584 5.12v392.5504a34.1504 34.1504 0 0 1-50.2784 30.1056l-4.352-2.7648-81.92-61.4912v68.3008c0 33.1264-23.552 60.7232-54.8352 66.9696l-6.8608 1.024-6.5536 0.256H204.8a68.2496 68.2496 0 0 1-67.9936-61.696l-0.3072-6.5536V273.152c0-35.4816 27.136-64.6656 61.696-67.9936L204.8 204.8512h477.8496zM385.3824 389.12a34.1504 34.1504 0 0 0-34.0992 34.1504v179.6096a34.1504 34.1504 0 0 0 53.0432 28.416l134.7584-89.8048a34.1504 34.1504 0 0 0 0-56.832L404.3264 394.8544a34.1504 34.1504 0 0 0-18.944-5.7344z"></path></svg>
                  <span>直 播</span>
                </a>

                <a className={styles.link}>
                  <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M772.4544 229.2736l2.048 6.4512 87.2448 283.136c8.8576 33.1264-10.24 66.56-41.984 78.4384l-6.5536 2.048-118.1696 31.744a32.768 32.768 0 0 1-8.192 1.0752l-4.096-0.2048-124.672-14.6432-193.3824 51.8144 36.6592 136.704a49.152 49.152 0 0 1-93.184 30.8736l-1.792-5.4272L155.2896 267.264a49.152 49.152 0 0 1 93.184-30.8736l1.792 5.4272 4.096 15.36 188.928-50.6368a32.768 32.768 0 0 1 8.1408-1.0752l4.096 0.2048 124.5184 14.592 112.1792-30.0544c33.4336-8.96 68.1984 7.7824 80.2304 39.0144z"></path></svg>
                  <span>活 动</span>
                </a>

                <a className={styles.link}>
                  <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M749.2096 168.96a102.4 102.4 0 0 1 102.2464 96.3584l0.1536 6.0416v477.8496a102.4 102.4 0 0 1-96.3584 102.2464l-6.0416 0.1536H271.36a102.4 102.4 0 0 1-102.2464-96.3584l-0.1536-6.0416V271.36a102.4 102.4 0 0 1 96.3584-102.2464L271.36 168.96h477.8496z m-69.9392 385.4848a34.1504 34.1504 0 0 0-48.2816 0 170.6496 170.6496 0 0 1-241.3568 0 34.1504 34.1504 0 1 0-48.2816 48.2304 238.9504 238.9504 0 0 0 337.92 0 34.1504 34.1504 0 0 0 0-48.2304zM322.56 339.6608a51.2 51.2 0 0 0-51.2 51.2v34.1504a51.2 51.2 0 1 0 102.4 0v-34.1504a51.2 51.2 0 0 0-51.2-51.2z m375.4496 0a51.2 51.2 0 0 0-51.2 51.2v34.1504a51.2 51.2 0 1 0 102.4 0v-34.1504a51.2 51.2 0 0 0-51.2-51.2z"></path></svg>
                  <span>课 堂</span>
                </a>

                <a className={styles.link}>
                  <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M836.3008 170.6496c17.1008 0 31.2832 12.6464 33.7408 29.0816L870.4 204.8v316.16a34.1504 34.1504 0 0 1-29.0816 33.792l-5.0176 0.3584h-102.4v195.7888a34.1504 34.1504 0 0 1-29.1328 33.792l-5.0176 0.3584H386.7648l-127.3344 95.5392a34.2016 34.2016 0 0 1-53.248-17.3568l-1.024-4.8128-0.3584-5.12-0.0512-68.3008H153.6a34.1504 34.1504 0 0 1-32.6656-24.2176l-1.0752-4.8128-0.4096-5.0688v-409.6c0-17.152 12.6464-31.3344 29.0816-33.792L153.6 307.2h174.2336V204.8c0-17.152 12.6464-31.3344 29.1328-33.792l5.0176-0.3584h474.3168z m-477.9008 409.6H256l-5.0688 0.4096a34.1504 34.1504 0 0 0 0 67.4816l5.0688 0.4096h102.4l5.0688-0.4096A34.1504 34.1504 0 0 0 358.4 580.2496z m102.4-136.4992H256l-5.0688 0.4096a34.1504 34.1504 0 0 0 0 67.4816l5.0688 0.4096h204.8l5.0688-0.4096A34.1504 34.1504 0 0 0 460.8 443.7504z m341.2992-204.8512h-406.016v68.2496h303.616c17.152 0 31.3856 12.6464 33.792 29.1328l0.3584 5.0176v145.4592l68.2496 0.0512V238.8992z"></path></svg>
                  <span>社区中心</span>
                </a>

                <a className={styles.link}>
                  <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M783.36 221.8496a102.4 102.4 0 0 1 102.0928 94.7712l0.3072 7.68v409.6a102.4 102.4 0 0 1-94.72 102.0928l-7.68 0.256H237.2096a102.4 102.4 0 0 1-102.0928-94.72l-0.3072-7.68v-409.6A102.4 102.4 0 0 1 229.5808 222.208l7.68-0.3072H783.36z m-155.5968 81.408a34.1504 34.1504 0 0 0-50.7904 23.6032l-54.1696 203.3152a128 128 0 1 0-108.288 220.8256l6.7584 1.024a128 128 0 0 0 141.5168-104.8576l71.7824-253.7984 47.4624 35.4816 3.2768 2.2016a34.1504 34.1504 0 0 0 37.5808-56.832l-91.8528-68.7616z"></path></svg>
                  <span>新歌热榜</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {children}
    </>
  );
};

export default HomeLayout;
