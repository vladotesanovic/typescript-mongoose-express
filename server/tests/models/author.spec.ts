process.env.NODE_ENV = "testing";

import { Author, IAuthor } from "../../models/models";
import * as chai from "chai";

const expect = chai.expect;

describe("Models Author",  () => {

    let authorObject: IAuthor;

    it("should insert new author", async () => {

        const author = new Author();
        author.name = "John";
        author.age = 30;
        author.description = "He is writer";

        const res = await author.save();
        authorObject = res;

        expect(res).to.be.an("object");
        expect(res.name).to.be.equal("John");
    });

    it("should update user", async() => {
        const results: { nModified: number} = await Author.updateAuthor(authorObject._id, "He is not writer");

        expect(+results.nModified).to.be.equal(1);
    });

    it("should update by age", async() => {
        const results: { nModified: number} = await Author.updateByAge(21, "Good one :)");
        const author: IAuthor = <IAuthor>await Author.findById(authorObject._id).lean().exec();

        expect(author.description).to.be.equal("Good one :)");
        expect(+results.nModified).to.be.equal(1);
    });
});
