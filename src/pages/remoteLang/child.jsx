import { FormattedMessage } from 'umi/locale';
import Grandson from './grandson';

export default () => (
  <>
    <br />
    <span style={{ color: 'blue', fontSize: '20px' }}>
      <FormattedMessage
        {...{ id: 'remote-1' }}
        values={{ type: '子代能获取国际化数据' }}
      />
      <Grandson />
    </span>
  </>
);
