import { run } from '../functions/auto_reply_handler';

describe('Test some function', () => {
  it('Something', () => {
    run([{
      payload: {
        work_created: {
          work: {
            id: 'some-id'
          }
        }
      }
    }]);
  });
});
