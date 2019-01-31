import withIntl, { parseArguments } from 'umi/withIntl';
import locale from './getLocale';

const getFloder = () => {
  if (locale.match(/^zh$/g)) return 'zh-CN';
  if (locale.match(/^en$/g)) return 'en-US';
  return locale;
};

export default (...arg) => {
  const { component, options } = parseArguments(arg);
  return withIntl(getFloder(), component, {
    host: `http://localhost:${PORT}`,
    resHandler: res => {
      const ret = {
        ...res,
        sssssssss: 'jahahjhahaha',
      };
      return ret;
    },
    ...options,
  });
};
