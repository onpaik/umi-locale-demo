import React from 'react';
import withIntl from '@utils/withIntl';
import { Button } from 'antd';
import { connect } from 'dva';
import { handleClick } from './actions';

@connect(
  null,
  {
    handleClick,
  },
)
@withIntl({
  intlUrl: '/get/remote/lang/model',
})
class ModelGetIntl extends React.Component {
  click = () => {
    const { formatMessage } = this.props.intl;
    const msg = formatMessage({
      id: 'model-1',
    });
    this.props.handleClick(msg);
  };

  render() {
    // console.log(this.props);
    return (
      <>
        <div>model使用获取的远程国际化数据</div>
        <Button onClick={this.click} type="primary">
          点击
        </Button>
      </>
    );
  }
}

export default ModelGetIntl;
