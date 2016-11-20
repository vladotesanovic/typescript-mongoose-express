import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as http from "http";

process.env.NODE_ENV = "testing";

import { PostRouter } from "./routes/post/post";
import { AuthorRouter } from "./routes/author/author";
import { APIDocsRouter } from "./routes/swagger";

const app: express.Application = express();

app.use(json());
app.use(urlencoded({
    extended: true
}));

app.get("/", (request: express.Request, response: express.Response) => {
    response.json({
        name: "Express application"
    })
});

app.use((err: Error & { status: number }, request: express.Request, response: express.Response, next: express.NextFunction): void => {

    response.status(err.status || 500);
    response.json({
        error: "Server error"
    })
});

app.use("/api", PostRouter.routes());
app.use("/api", new AuthorRouter().getRouter());
app.use("/api/docs", new APIDocsRouter().getRouter());

const server: http.Server = app.listen(3003);

export { server };