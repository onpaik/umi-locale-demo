import { Spin } from 'antd';
import style from './index.less';

export default () => (
  <div className={style.loading}>
    <Spin tip="Loading..." />
  </div>
);
