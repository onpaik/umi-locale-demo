import { FormattedMessage } from 'umi/locale';

export default () => (
  <>
    <br />
    <span style={{ color: 'green', fontSize: '30px' }}>
      <FormattedMessage
        {...{ id: 'remote-1' }}
        values={{ type: '孙子代能获取国际化数据' }}
      />
    </span>
    <br />
    <span style={{ color: 'green', fontSize: '30px' }}>
      <FormattedMessage
        {...{ id: 'remote-2' }}
        values={{ type: '孙子子代能获取国际化数据' }}
      />
    </span>
  </>
);
