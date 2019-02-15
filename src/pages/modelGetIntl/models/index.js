import { error, info } from '@utils/message';
import { formatMessage } from 'umi/locale';

export default {
  namespace: 'modelGetIntl',
  state: [],
  reducers: {
    click(state, { payload }) {
      error(
        formatMessage({
          id: 'global-tip',
        }),
      );
      error(
        formatMessage({
          id: 'model-1',
        }),
      );
      info(payload);
      return state;
    },
  },
};
