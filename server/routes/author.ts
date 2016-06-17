import { Router, Request, Response } from "express";
import { Author } from "../models/author/model";

export class AuthorRouter {

    private router: Router = Router();

    getRouter(): Router {

        this.router.get("/author", async(request: Request, response: Response) => {

            const authors = await Author.find({}).lean().exec();

            response.json(authors)
        });

        this.router.post("/author", async(request: Request, response: Response) => {

            const author = await Author.create(request.body);

            response.status(200).json(author);
        });

        return this.router;
    }
}