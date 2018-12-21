import { withIntl } from 'umi/withIntl';
import locale from './getLocale';

const getFloder = () => {
  if (locale.match(/^zh$/g)) return 'zh-CN';
  if (locale.match(/^en$/g)) return 'en-US';
  return locale;
};

export default component => withIntl(getFloder(), component);
