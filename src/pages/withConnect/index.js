import React from 'react';
import { connect } from 'dva';
import withIntl from 'shared/utils/withIntl';
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
class List extends React.PureComponent {
  render() {
    const { list, intl } = this.props;
    const { formatMessage } = intl;
    return (
      <>
        <div className={style['with-connect']}>
          {list.map(id => {
            const msg = formatMessage({
              id,
            });
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

export default withIntl('WithConnect')(List);
