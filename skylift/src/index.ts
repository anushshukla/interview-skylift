import Express, { json } from "express";
import cors from "cors";
import logsRouter from "./routes/logs";

(() => {
  const app = Express();
  const port = 3002;
  app.use(json());
  app.use(cors());

  app.use("/logs", logsRouter);

  app.listen(port, () => {
    console.log(`Skylift listening at http://localhost:${port}`);
  });
})();
