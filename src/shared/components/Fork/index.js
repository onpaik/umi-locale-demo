import Forksvg from './forksvg';
import style from './index.less';

export default () => (
  <a
    href="https://github.com/onpaik/umi-lib-paik"
    target="_blank"
    rel="noopener noreferrer"
    className={style['github-corner']}
    aria-label="View source on GitHub"
  >
    <Forksvg />
  </a>
);
