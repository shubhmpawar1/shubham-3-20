import { configure_apis } from "../config/configure-apis";
import { app } from "./setup/hono";

// Run Tests
// await run_tests()

// Configure Apis
await configure_apis()

// export default app

// export default {
//     fetch: app.fetch,
// };

Bun.serve({
  fetch: app.fetch,
  port: 3000,
  idleTimeout: 60, // 60 seconds timeout arun
});
