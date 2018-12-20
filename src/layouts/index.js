import React from 'react';
import Fork from 'shared/components/Fork/';
import style from './index.less';

const Layout = props => (
  <>
    <div className={style.normal}>{props.children}</div>
    <Fork />
  </>
);

export default Layout;
