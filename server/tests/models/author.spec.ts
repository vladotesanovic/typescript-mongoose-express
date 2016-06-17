process.env.NODE_ENV = "testing";

import { Author, IAuthor } from "../../models/models";
import * as chai from "chai";

const expect = chai.expect;

describe("Models Author", () => {

    it("insert new author", (done: Function) => {

       const author: IAuthor = new Author();
       author.name = "John";
       author.description = "He is writer";
       author.save((err: Error, res: IAuthor) => {

           expect(res).to.be.an("object");
           expect(res.name).to.be.equal("John");
           done();
       });

    });
});