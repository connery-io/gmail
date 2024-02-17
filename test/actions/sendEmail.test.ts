import { handler } from "$actions/sendEmail.ts";
import { assertEquals } from "$devDeps";

Deno.test("it should verify if the SendEmail action works as expected", async () => {
  const configurationParameters = {
    /* TODO #3: Specify configuration parameters for the plugin. */
  };
  const inputParameters = {
    /* TODO #4: Specify input parameters for the action. */
  };

  const result = await handler({ inputParameters, configurationParameters });

  assertEquals(result, {});
});
