import { testRunner } from '../../test-runner/test-runner';

describe('Auto Reply Handler Test', () => {
  it('Testing auto-reply logic', async () => {
    await testRunner({
      fixturePath: 'on_work_created_event.json',
      functionName: 'auto_reply_handler',
    });
  });
});
