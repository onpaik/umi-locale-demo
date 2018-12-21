import { info } from 'shared/utils/message';

export default {
  namespace: 'listCompose',
  state: ['list1', 'list2'],
  reducers: {
    click(state, { payload: name }) {
      info(`you clicked ${name}`);
      return state;
    },
  },
};
