import React from 'react';
import Fork from '@components/Fork/';
import withIntl from '@utils/withIntl';
import style from './index.less';

const Layout = props => (
  <>
    <div className={style.normal}>{props.children}</div>
    <Fork />
  </>
);

export default withIntl({
  intlUrl: '/get/remote/lang/1',
})(Layout);
