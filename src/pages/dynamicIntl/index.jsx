/**
 * title: locale-demo
 */

import { FormattedMessage, getLocale } from 'umi/locale';
import withIntl from '@utils/withIntl';
import ChangeLocale from '../changeLocale';

const demo = props => {
  const { formatMessage } = props.intl;
  const locale = getLocale();
  const style = { fontSize: '20px' };
  return (
    <div style={style}>
      <div style={{ color: 'red' }}>
        动态加载国际化, 带变量
        <br />
        <span>
          <FormattedMessage
            {...{ id: 'translate-demo' }}
            values={{ type: locale }}
          />
        </span>
        <br />
        <br />
        动态加载国际化, 不带变量
        <br />
        <span>
          {formatMessage({
            id: 'translate-demo-1',
          })}
        </span>
        <br />
      </div>
      <br />
      <ChangeLocale />
    </div>
  );
};

export default withIntl('TransLate')(demo);
