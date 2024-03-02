import React, {useState} from "react";
import styles from './styles.less'
import {
  ArrowIcon,
  BilibiliIcon, ChannelActivityIcon, ChannelAnimalIcon,
  ChannelAnimeIcon, ChannelBlackRoomIcon, ChannelCarIcon,
  ChannelCinephileIcon,
  ChannelDanceIcon, ChannelDanjiyouxiIcon,
  ChannelDocumentaryIcon,
  ChannelDougaIcon,
  ChannelEntIcon, ChannelFashionIcon, ChannelFoodIcon,
  ChannelGameIcon, ChannelGaoxiaoIcon, ChannelGongkaikeIcon,
  ChannelGuochuangIcon, ChannelInformationIcon,
  ChannelKichikuIcon, ChannelKnowledgeIcon, ChannelLifeIcon, ChannelLiveIcon, ChannelLoveIcon,
  ChannelMovieIcon,
  ChannelMusicIcon, ChannelMusicplusIcon, ChannelReadIcon, ChannelSportsIcon, ChannelTechIcon,
  ChannelTeleplayIcon, ChannelVlogIcon, ChannelVtuberIcon, ChannelZhishiIcon,
  ChannelZongyiIcon, LinkIcon
} from "@/utils/icons";

const iconsWithName = [
  {
    icon: <ChannelAnimeIcon className={styles.navigationChannelIcon}/>,
    name: '番剧'
  },
  {
    icon: <ChannelMovieIcon className={styles.navigationChannelIcon}/>,
    name: '电影'
  },
  {
    icon: <ChannelGuochuangIcon className={styles.navigationChannelIcon}/>,
    name: '国创'
  },
  {
    icon: <ChannelTeleplayIcon className={styles.navigationChannelIcon}/>,
    name: '电视剧'
  },
  {
    icon: <ChannelZongyiIcon className={styles.navigationChannelIcon}/>,
    name: '综艺'
  },
  {
    icon: <ChannelDocumentaryIcon className={styles.navigationChannelIcon}/>,
    name: '纪录片'
  },
  {
    icon: <ChannelDougaIcon className={styles.navigationChannelIcon}/>,
    name: '动画'
  },
  {
    icon: <ChannelGameIcon className={styles.navigationChannelIcon}/>,
    name: '游戏'
  },
  {
    icon: <ChannelKichikuIcon className={styles.navigationChannelIcon}/>,
    name: '鬼畜'
  },
  {
    icon: <ChannelMusicIcon className={styles.navigationChannelIcon}/>,
    name: '音乐'
  },
  {
    icon: <ChannelDanceIcon className={styles.navigationChannelIcon}/>,
    name: '舞蹈'
  },
  {
    icon: <ChannelCinephileIcon className={styles.navigationChannelIcon}/>,
    name: '影视'
  },
  {
    icon: <ChannelEntIcon className={styles.navigationChannelIcon}/>,
    name: '娱乐'
  },
  {
    icon: <ChannelKnowledgeIcon className={styles.navigationChannelIcon}/>,
    name: '知识'
  },
  {
    icon: <ChannelTechIcon className={styles.navigationChannelIcon}/>,
    name: '科技'
  },
  {
    icon: <ChannelInformationIcon className={styles.navigationChannelIcon}/>,
    name: '资讯'
  },
  {
    icon: <ChannelFoodIcon className={styles.navigationChannelIcon}/>,
    name: '美食'
  },
  {
    icon: <ChannelLifeIcon className={styles.navigationChannelIcon}/>,
    name: '生活'
  },
  {
    icon: <ChannelCarIcon className={styles.navigationChannelIcon}/>,
    name: '汽车'
  },
  {
    icon: <ChannelFashionIcon className={styles.navigationChannelIcon}/>,
    name: '时尚'
  },
  {
    icon: <ChannelSportsIcon className={styles.navigationChannelIcon}/>,
    name: '运动'
  },
  {
    icon: <ChannelAnimalIcon className={styles.navigationChannelIcon}/>,
    name: '动物圈'
  },
  {
    icon: <ChannelVlogIcon className={styles.navigationChannelIcon}/>,
    name: 'VLOG'
  },
  {
    icon: <ChannelGaoxiaoIcon className={styles.navigationChannelIcon}/>,
    name: '搞笑'
  },
  {
    icon: <ChannelDanjiyouxiIcon className={styles.navigationChannelIcon}/>,
    name: '单机游戏'
  },
  {
    icon: <ChannelVtuberIcon className={styles.navigationChannelIcon}/>,
    name: '虚拟UP主'
  },
  {
    icon: <ChannelLoveIcon className={styles.navigationChannelIcon}/>,
    name: '公益'
  },
  {
    icon: <ChannelGongkaikeIcon className={styles.navigationChannelIcon}/>,
    name: '公开课'
  },
  {
    icon: <ChannelReadIcon className={styles.navigationChannelIcon}/>,
    name: '专栏'
  },
  {
    icon: <ChannelLiveIcon className={styles.navigationChannelIcon}/>,
    name: '直播'
  },
  {
    icon: <ChannelActivityIcon className={styles.navigationChannelIcon}/>,
    name: '活动'
  },
  {
    icon: <ChannelZhishiIcon className={styles.navigationChannelIcon}/>,
    name: '课堂'
  },
  {
    icon: <ChannelBlackRoomIcon className={styles.navigationChannelIcon}/>,
    name: '社区中心'
  },
  {
    icon: <ChannelMusicplusIcon className={styles.navigationChannelIcon}/>,
    name: '热歌新榜'
  },
]

const LeftContentFixed:React.FC = ()=>{
  const [hover0, setHover0] = useState<boolean>(false);
  const [hover1, setHover1] = useState<boolean>(false);


  return <div className={styles.outerDiv}>
    <BilibiliIcon height='140' width='64' style={{marginRight: 12}}/>

    <a onMouseEnter={()=>setHover0(true)} onMouseLeave={()=>setHover0(false)} className={styles.home}>
      <span style={{marginRight: 5}}>首页</span>
      <ArrowIcon width='10' height='10'/>
    </a>

    <div onMouseEnter={()=>setHover1(true)} onMouseLeave={()=>setHover1(false)} style={{display: hover0 || hover1 ? 'block' : 'none'}} className={styles.popover}>
      <div className={styles.popoverContent}>
        <div className={styles.biliHeaderChannelPanel}>
          <div className={styles.channelPanelColumn}>
            {
              iconsWithName.slice(0,10).map(item =>
                <a key={item.name} className={styles.channelPanelItem}>
                  {item.icon} <span>{item.name}</span>
                </a>
              )
            }
          </div>

          <div className={styles.channelPanelColumn}>
            {
              iconsWithName.slice(10,20).map(item =>
                <a key={item.name} className={styles.channelPanelItem}>
                  {item.icon} <span>{item.name}</span>
                </a>
              )
            }
          </div>

          <div className={styles.channelPanelColumn}>
            {
              iconsWithName.slice(20,28).map(item =>
                <a key={item.name} className={styles.channelPanelItem}>
                  {item.icon} <span>{item.name}</span>
                </a>
              )
            }
          </div>

          <div className={styles.channelPanelColumn}>
            {
              iconsWithName.slice(28,34).map(item =>
                <a key={item.name} className={styles.channelPanelItem}>
                  {item.icon} <span>{item.name}</span>
                </a>
              )
            }
          </div>
        </div>
      </div>
    </div>

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

export default LeftContentFixed