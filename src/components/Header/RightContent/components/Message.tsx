import {Badge, Dropdown, MenuProps} from 'antd';
import React from 'react';
import {InfoCircleOutlined, LikeOutlined, MailOutlined, UnorderedListOutlined} from "@ant-design/icons";
import styles from '../styles.less'
import {MsgIcon} from "@/utils/icons";

const Message: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <>
          <a onClick={()=>{}}>收到的赞</a>
          <Badge style={{padding: '0 4px'}} count={5} offset={[5,-4]}></Badge>
        </>
      ),
      icon: <LikeOutlined />
    },
    {
      key: '2',
      label: (
        <>
          <a onClick={()=>{}}>回复我的</a>
          <Badge style={{padding: '0 4px'}} count={5} offset={[5,-4]}></Badge>
        </>
      ),
      icon: <UnorderedListOutlined />
    },
    {
      key: '3',
      label: (
        <>
          <a onClick={()=>{}}>我的消息</a>
          <Badge style={{padding: '0 4px'}} count={3} offset={[5,-4]}></Badge>
        </>
      ),
      icon: <MailOutlined />
    },
    {
      key: '4',
      label: (
        <>
          <a onClick={()=>{}}>系统消息</a>
          <Badge style={{padding: '0 4px'}} count={2} offset={[5,-4]}></Badge>
        </>
      ),
      icon: <InfoCircleOutlined />
    },
  ];

  return (
    <Dropdown placement='bottom' menu={{items}}>
      <li className={styles.iconWrap}>
        <a className={styles.iconLink} onClick={e => e.preventDefault()}>
          <Badge style={{padding: '0 2px', height: 16, minHeight: 16, width: 16, minWidth: 16, display: 'flex', alignItems: 'center', justifyContent: 'center'}} count={9}>
            <MsgIcon className={styles.icon} width="20" height="20"/>
          </Badge>
          <span>消息</span>
        </a>
      </li>
    </Dropdown>
  );
};
export default Message;
