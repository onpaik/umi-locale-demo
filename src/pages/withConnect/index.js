import React from 'react';
import { connect } from 'dva';
import withIntl from '@utils/withIntl';
import locale from '@utils/getLocale';
import { handleClick } from './actions';
import ChangeLocale from '../changeLocale';
import style from './index.less';

@connect(
  ({ listConnect }) => ({
    list: listConnect,
  }),
  {
    handleClick,
  },
)
@withIntl('WithConnect')
class List extends React.PureComponent {
  render() {
    const { list, intl } = this.props;
    const { formatMessage } = intl;
    return (
      <>
        <div className={style['with-connect']}>
          {list.map(id => {
            const msg = formatMessage(
              {
                id,
              },
              {
                type: locale,
              },
            );
            return (
              <span key={id} onClick={() => this.props.handleClick(msg)}>
                {msg}
                &nbsp;click
              </span>
            );
          })}
        </div>
        <br />
        <ChangeLocale />
      </>
    );
  }
}

export default List;
