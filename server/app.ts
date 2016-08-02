import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as http from "http";

import { PostRouter } from "./routes/post";
import { AuthorRouter } from "./routes/author";

const app: express.Express = express();

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

const server: http.Server = app.listen(3000);

export { server };