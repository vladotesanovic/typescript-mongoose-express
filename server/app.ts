import * as express from "express";
import { json, urlencoded } from "body-parser";

import { PostRouter } from "./routes/post";
import { AuthorRouter } from "./routes/author";

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

app.use("/api", PostRouter.routes());
app.use("/api", AuthorRouter.routes());

app.listen("3000");