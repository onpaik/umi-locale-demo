import React from 'react';
import withIntl from '@utils/withIntl';
import Child from './child';

@withIntl({
  intlUrl: '/get/remote/lang',
})
class Demo extends React.Component {
  getContext = () => {
    return this.props.intl;
  };

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <>
        <span style={{ fontSize: '20px' }}>
          {formatMessage(
            {
              id: 'remote-1',
            },
            { type: '中文' },
          )}
          <br />
          {formatMessage({
            id: 'sssssssss',
          })}
        </span>
        <br />
        <Child />
      </>
    );
  }
}
export default Demo;
