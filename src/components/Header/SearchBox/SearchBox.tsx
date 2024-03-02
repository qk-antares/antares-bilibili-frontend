import { IconFont } from '@/utils/iconUtil';
import { Button, Input, Tag } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.less';

const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false); // 用于跟踪搜索框是否被聚焦
  const [searchHistory, setSearchHistory] = useState([]); // 搜索历史数据，你可以替换为你的实际数据
  const searchPanelRef = useRef<any>(null);

  //下面的代码处理搜索面板的显示和隐藏
  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      if (searchPanelRef.current && !searchPanelRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);


  const outerDiv: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flex: '1 auto',
    borderRadius: isFocused ? '8px 8px 0 0' : '8px',
    maxWidth: 500,
    backgroundColor: '#F1F2F3',
    height: 40,
    padding: '0 4px'
  }

  const searchInput: React.CSSProperties = {
    margin: '0 42px 0 3px',
    border: 0,
    color: 'black',
    backgroundColor: isFocused ? '#E3E5E7' : '#F1F2F3',
    boxShadow: '0 0 0 0 white!important'
  }

  return (
    <div style={outerDiv} ref={searchPanelRef}>
      <Input style={searchInput} placeholder="试试搜索吧！" onFocus={()=>setIsFocused(true)}/>
      <Button type='text' icon={<IconFont type='icon-search1' style={{fontSize: 15}}/>} style={{right: 7, position: 'absolute', width: 32, border: 0}}/>

      {isFocused && (
        <div
          style={isFocused ? { border:  '1px solid var(--line_regular)', borderTop: "none"} : undefined}
          className={styles.searchPanel}>
          <div>
            <div className={styles.header}>
              <div className={styles.title}>搜索历史</div>
              <div className={styles.historyClear}>清空</div>
            </div>

            <div className={styles.historiesWrap}>
              <div className={styles.histories}>
                <div className={styles.historyItem}>
                  <div className={styles.historyText}>树奈奈</div>
                  <div className={styles.close}>
                    <IconFont type='icon-closefill' style={{fontSize: 16}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.header}>
              <div className={styles.title}>bilibili热搜</div>
            </div>
            
            <div>
              <div className={styles.trendingItem}>
                <div className={styles.trendingRank}>1</div>
                <div className={styles.trendingText}>近一半中国人超重或肥胖</div><Tag>热</Tag>
              </div>
              
              <div className={styles.trendingItem}>
                <div className={styles.trendingRank}>2</div>
                <div className={styles.trendingText}>年轻人可以改变中国足球吗</div><Tag>新</Tag>
              </div>
              
              <div className={styles.trendingItem}>
                <div className={styles.trendingRank}>3</div>
                <div className={styles.trendingText}>iPhone被曝夜间自动关机</div>
              </div>
              
              <div className={styles.trendingItem}>
                <div className={styles.trendingRank}>4</div>
                <div className={styles.trendingText}>校方回应4人宿舍自行买床</div>
              </div>
              
              <div className={styles.trendingItem}>
                <div className={styles.trendingRank}>5</div>
                <div className={styles.trendingText}>GALA 有我就有人兜底</div>
              </div>
              
              <div className={styles.trendingItem}>
                <div className={styles.trendingRank}>6</div>
                <div className={styles.trendingText}>宫崎骏红猪内地定档</div>
              </div>
              
              <div className={styles.trendingItem}>
                <div className={styles.trendingRank}>7</div>
                <div className={styles.trendingText}>作家七月新番去世</div>
              </div>
              
              <div className={styles.trendingItem}>
                <div className={styles.trendingRank}>8</div>
                <div className={styles.trendingText}>0+1镜流大招30万伤害</div>
              </div>
              
              <div className={styles.trendingItem}>
                <div className={styles.trendingRank}>9</div>
                <div className={styles.trendingText}>月销百万的台灯竟成瞎眼灯</div>
              </div>
              
              <div className={styles.trendingItem}>
                <div className={styles.trendingRank}>10</div>
                <div className={styles.trendingText}>李狗嗨终于来B站了</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
