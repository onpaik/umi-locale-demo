import { info } from 'shared/utils/messages';

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
