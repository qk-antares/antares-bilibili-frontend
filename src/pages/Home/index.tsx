import React, {useEffect, useState} from 'react';
import HomeLayout from "@/layouts/HomeLayout/HomeLayout";
import styles from './styles.less'
import Recommend from "@/components/Home/Recommend/Recommend";
import VideoCard from "@/components/Home/VideoCard/VideoCard";
import {Skeleton} from "antd";

const Home: React.FC = () => {
  const [recommends, setRecommends] = useState<Home.Recommend[]>([]);

  useEffect(()=>{
    //todo: 请求后端获取推荐
    setRecommends([
      {
        img: 'img/mock/recommend/1.png',
        title: '14万吨的船，靠什么漂在海面上？',
        url: '',
      },
      {
        img: 'img/mock/recommend/2.png',
        title: '新版本来啦！',
        url: '',
      },
      {
        img: 'img/mock/recommend/3.png',
        title: '正在直播S13入围赛：DFM vs CFO！',
        url: '',
      },
      {
        img: 'img/mock/recommend/4.png',
        title: '根本停不下来！魔法动作肉鸽限时试玩',
        url: '',
      },
      {
        img: 'img/mock/recommend/5.png',
        title: '欢迎来到机械生命体的世界',
        url: '',
      },
    ])
  }, []);

  return (
    <HomeLayout>
      <div className={styles.feed}>
        {
          recommends.length > 0 ?
            <Recommend recommends={recommends}/> :
            <Skeleton/>
        }
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
      </div>
    </HomeLayout>
  );
};

export default Home;
