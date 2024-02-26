import { handler } from '../../src/actions/sendEmail';

// TODO #1: Rename xit() to it() to enable the test.
// TODO #2: Change the test name below to match your use case.
xit('should verify if the SendEmail action works as expected', async () => {
  const configuration = {
    /* TODO #3: Specify configuration parameters for the plugin. */
  };
  const input = {
    /* TODO #4: Specify input parameters for the action. */
  };

  const result = await handler({ input, configuration });

  expect(result).toEqual({
    /* TODO #5: Specify the expected value of the result. */
  });
});
