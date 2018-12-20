import { withIntl } from 'umi/withIntl';
import { getLocale } from 'umi/locale';

const locale = getLocale();
const getFloder = () => {
  if (locale.match(/^zh$/g)) return 'zh-CN';
  if (locale.match(/^en$/g)) return 'en-US';
  return locale;
};

export default component => withIntl(getFloder(), component);
