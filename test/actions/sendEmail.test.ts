import { handler } from '../../src/actions/sendEmail';

xit('should verify if the sendEmail action works as expected', async () => {
  const input = {};

  const result = await handler({ input });

  expect(result).toEqual({
  });
});
