import { LinkIcon, LogoutIcon, LV6Icon, RightIcon, UserIcon } from "@/utils/icons";
import { Avatar } from 'antd';
import React, { useState } from 'react';
import styles from '../styles.less';

const UserAvatar: React.FC = () => {
  const [init, setInit] = useState(false);
  const [hover0, setHover0] = useState(false);
  const [hover1, setHover1] = useState(false);

  const avatar: React.CSSProperties = {
    position: 'absolute',
    display: 'block',
    top: '5px',
    left: '10px',
    width: '38px',
    height: '38px',
    cursor: 'pointer',
    animation: `${hover0 || hover1 ? styles.fadeOut : styles.fadeIn} .3s both`
  }

  const entryAvatar: React.CSSProperties = {
    display: init ? 'block' : 'none',
    animation: `${hover0 || hover1 ? styles.avatarFadeLarge : styles.avatarFadeSmall} .3s both` ,
    position: 'absolute',
    top: '5px',
    left: '10px',
    zIndex: 2,
    borderRadius: '50%',
    cursor: 'pointer',
    transformOrigin: 'top left',
  }

  return (
    <>
      <a onMouseEnter={()=>{setHover0(true);setInit(true)}} onMouseLeave={()=>setHover0(false)} style={avatar}>
        <Avatar
          src={<img src={'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'}/>}
          style={{width: '100%', height: '100%', border: '2px solid #fff'}}
        />
      </a>

      <a onMouseEnter={()=>setHover0(true)} onMouseLeave={()=>setHover0(false)} style={entryAvatar}>
        <div className={styles.biliAvatar}>
          <img className={styles.biliAvatarImg} src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>
        </div>
      </a>

      <div style={{display: hover0 || hover1 ? 'block' : 'none'}} onMouseEnter={()=>setHover1(true)} onMouseLeave={()=>setHover1(false)} className={styles.popover}>
        <div className={styles.popoverContent}>
          <div className={styles.avatarPanelPopover}>
            <a className={styles.bigAvatar}></a>
            <a className={styles.nicknameItem}>心宿ニ</a>

            <div className={styles.vipItem}>
              <div className={styles.seniorInfo}>
                <span className={styles.senior}>硬核会员</span>
                <a className={styles.levelMax}>
                  <LV6Icon/>
                </a>
              </div>
            </div>

            <div className={styles.coinsItem}>
              <a>
                <span className={styles.coinItemText}>硬币:</span>
                <span className={styles.coinItemNum}>461</span>
              </a>
              <a>
                <span className={styles.coinItemText}>B币:</span>
                <span className={styles.coinItemNum}>0</span>
              </a>
            </div>

            <div className={styles.countsItem}>
              <a className={styles.singleCountItem}>
                <div className={styles.countNum}>52</div>
                <div className={styles.countText}>关注</div>
              </a>
              <a className={styles.singleCountItem}>
                <div className={styles.countNum}>9</div>
                <div className={styles.countText}>粉丝</div>
              </a>
              <a className={styles.singleCountItem}>
                <div className={styles.countNum}>60</div>
                <div className={styles.countText}>动态</div>
              </a>
            </div>

            <div>
              <a className={styles.singleLinkItem}>
                <div className={styles.linkTitle}>
                  <UserIcon width='18' height='18' style={{marginRight: 16}}/>
                  <span>个人中心</span>
                </div>
                <RightIcon width='10' height='10' style={{transform: 'rotate(-90deg)'}}/>
              </a>

              <a className={styles.singleLinkItem}>
                <div className={styles.linkTitle}>
                  <LinkIcon width='18' height='18' style={{marginRight: 16}}/>
                  <span>投稿管理</span>
                </div>
                <RightIcon width='10' height='10' style={{transform: 'rotate(-90deg)'}}/>
              </a>
            </div>

            <div className={styles.splitLine}></div>
            <div className={styles.logoutItem}>
              <LogoutIcon width='18' height='18' style={{marginRight: 16}}/>
              <span>退出登录</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserAvatar;
