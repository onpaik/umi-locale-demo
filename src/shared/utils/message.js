import { message } from 'antd';

message.config({
  top: 50,
  duration: 3,
});

const showMessage = ({ type = 'info', text, onClose }) => {
  message.destroy();
  setTimeout(() => {
    if (onClose) {
      message[type](text, onClose);
    } else {
      message[type](text);
    }
  }, 10);
};

export const error = (text, onClose) => {
  showMessage({ type: 'error', text, onClose });
};
export const info = (text, onClose) => {
  showMessage({ type: 'info', text, onClose });
};
export const success = (text, onClose) => {
  showMessage({ type: 'success', text, onClose });
};
export const warning = (text, onClose) => {
  showMessage({ type: 'warning', text, onClose });
};
