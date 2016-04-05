import { Router, Request, Response } from "express";
import { Author } from "../models/author/model";

export class AuthorRouter {

    static routes(): Router {
        return Router()
            .get("/author", async (request: Request, response: Response) => {

                const authors = await Author.find({}).exec();

                response.json(authors)
            })
            .post("/author", async (request: Request, response: Response) => {

                const author = await Author.create(request.body);

                response.json(author);
            });
    }
}