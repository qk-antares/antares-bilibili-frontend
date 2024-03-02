import { IconFont } from "@/utils/iconUtil";
import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import styles from './styles.less';

interface RecommendProps {
  recommends: Home.Recommend[]
}

const Recommend: React.FC<RecommendProps> = ({recommends})=>{
  const [activeSlide, setActiveSlide] = useState<number>(0);

  //幻灯片自动播放的样式
  const carouselTransform: React.CSSProperties = {
    overflow: 'hidden',
    transform: `translateX(-${100*activeSlide/recommends.length}%)`,
    transition: 'transform 300ms ease 0s',
    width: `${recommends.length * 100}%`
  }

  const carouselSlide: React.CSSProperties = {
    float: 'left',
    transition: 'all .3s',
    width: `${100/recommends.length}%`
  }

  useEffect(() => {
    const autoPlayTimer = setTimeout(() => {
      setActiveSlide((activeSlide + 1) % recommends.length); // 循环轮播
    }, 3500); // 自动播放每3秒

    return () => {
      clearTimeout(autoPlayTimer); // 在组件卸载时清除定时器
    };
  }, [activeSlide]);

  return <div className={styles.recommendedSwipe}>
    <div className={styles.recommendedSwipeCore}>
      <div className={styles.recommendedSwipeShim}>
        <div className={styles.videoCard}>
          <div className={styles.skeleton}>
            <div className={styles.skeletonCover}></div>
            <div className={styles.skeletonInfo}>
              <div className={styles.skeletonRight}>
                <p className={styles.skeletonText}></p>
                <p className={styles.skeletonTextShort}></p>
                <p className={styles.skeletonLight}></p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.videoCard}>
          <div className={styles.skeleton}>
            <div className={styles.skeletonCover}></div>
            <div className={styles.skeletonInfo}>
              <div className={styles.skeletonRight}>
                <p className={styles.skeletonText}></p>
                <p className={styles.skeletonTextShort}></p>
                <p className={styles.skeletonLight}></p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.shimCard}></div>
        <div className={styles.shimCard}></div>
      </div>

      <div className={styles.recommendedSwipeBody}>
        <div className={styles.carouselArea}>
          <div className={styles.carousel}>
            <div className={styles.carouselContainer}>
              <div style={carouselTransform}>
                {
                  recommends.map((item, index) =>
                    <div key={index} style={carouselSlide}>
                      <a className={styles.carouselItem}>
                        <div className={styles.carouselInner}>
                          <picture className={styles.picture}>
                            <img className={styles.img} src={item.img} alt={item.title}/>
                          </picture>
                        </div>
                      </a>
                    </div>
                  )
                }
              </div>

              <div className={styles.carouselFooter}>
                <div className={styles.carouselMask}></div>
                <div className={styles.carouselTool}>
                  <a>
                    <span className={styles.recommendedTitle}>{recommends[activeSlide].title}</span>
                  </a>
                  <ul className={styles.notGray}>
                    {
                      recommends.map((item, index) =>
                        <li onClick={()=>setActiveSlide(index)} key={index}
                            className={activeSlide === index ? styles.isActive : undefined}></li>
                      )
                    }
                  </ul>
                </div>

                <div className={styles.buttons}>
                  <Space>
                    <Button
                      onClick={()=>setActiveSlide((activeSlide-1+recommends.length)%recommends.length)}
                      className={styles.btn} size='small'
                      icon={<IconFont type='icon-angle-left' style={{fontSize: 10}}/>}/>

                    <Button
                      onClick={()=>setActiveSlide((activeSlide+1)%recommends.length)}
                      className={styles.btn} size='small'
                      icon={<IconFont type='icon-angle-right' style={{fontSize: 10}}/>}/>
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Recommend