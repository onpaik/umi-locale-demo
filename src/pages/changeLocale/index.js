/**
 * title: locale-demo
 */

import { FormattedMessage, setLocale, getLocale } from 'umi/locale';
import withIntl from 'shared/utils/withIntl';
import { Button } from 'antd';
import Msg from './messages/index.js';

const demo = () => {
  const locale = getLocale();
  const getType = target => (target === locale ? 'primary' : '');
  const click = lang => setLocale(lang);
  const style = { fontSize: '20px' };
  const support = ['zh-CN', 'zh-TW', 'zh-HK', 'en-US'];
  return (
    <div style={style}>
      <div>
        语言切换测试
        <br />
        <FormattedMessage {...Msg.localeChange} values={{ type: locale }} />
      </div>
      {support.map(lang => (
        <Button key={lang} onClick={() => click(lang)} type={getType(lang)}>
          {lang}
        </Button>
      ))}
    </div>
  );
};

export default withIntl('TransLate')(demo);
