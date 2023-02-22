import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT;
const app: Express = express();

app.get("/", (req: Request, res: Response) => res.send("hello world!"));

const send = (res: Response) => {
    res.write("data: " + "hello!\n\n");

    setTimeout(() => send(res), 1000);
};

app.get("/stream", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "text/event-stream");
    
    send(res);
});

app.use(cors({ origin: "*" }));

app.listen(port);

console.log(`Listening on ${port}!`);