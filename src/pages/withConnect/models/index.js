import { info } from '@utils/message';

export default {
  namespace: 'listConnect',
  state: ['list1', 'list2'],
  reducers: {
    click(state, { payload: name }) {
      info(`you clicked ${name}`);
      return state;
    },
  },
};
