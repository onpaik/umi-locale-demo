import React /* useState */ from 'react';
import moment from 'moment';
import style from './index.less';

const getTime = () => moment().format('YYYY-MM-DD HH:mm:ss');

export default class Demo extends React.Component {
  state = {
    time: getTime(),
  };

  timer = null;

  polling = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({
        time: getTime(),
      });
    }, 1000);
  };

  componentDidMount = () => {
    this.polling();
  };

  componentDidUpdate = () => {
    this.polling();
  };

  render() {
    const { time } = this.state;
    return (
      <>
        <div className={style.page}>
          <span>{time}</span>
        </div>
      </>
    );
  }
}
