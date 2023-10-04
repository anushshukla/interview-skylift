import Express, { Request, Response, json } from "express";
import cors from "cors";
import Skylift from 'skylift-sdk';

async function sendChatMessage(req: Request, res: Response): Promise<any> {
  const skylift = new Skylift();
  await skylift.addLogs('chat-msg-sent');
  const response = await skylift.getLogs();
  res.json({
    message: 'Success!',
    data: response.data.data,
  });
}

(() => {
  const app = Express();
  const port = 3001;
  app.use(json());
  app.use(cors());

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  

  app.post('/chat/message', sendChatMessage);
})();