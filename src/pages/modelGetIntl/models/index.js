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
      info(payload);
      return state;
    },
  },
};
