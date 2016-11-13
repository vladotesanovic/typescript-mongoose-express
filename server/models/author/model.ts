import { mongoose } from "../../services/database";
import { Schema, Model, Document } from "mongoose";

export interface IAuthor extends Document {
    age: number;
    name: string;
    create?: Date;
    description?: string;
}

export interface IAuthorModel {
    updateAuthor(id: {}, description: string): Promise<{ nModified: number }>
    updateByAge(ageLimit: number, text: string): Promise<{ ok: number, nModified: number, n: number }>
}

const schema = new Schema({
    age: {
      type: Number
    },
    name: {
        type: String,
        required: true
    },
    create: {
        type: Date,
        "default": Date.now
    },
    description: {
        type: String
    }
});

schema.static("updateAuthor", (author: {}, description: string) => {

    return Author
        .update({
            "_id": author
        }, {
            "$set": {
                "description": description
            }
        })
        .exec();
});

schema.static("updateByAge", (ageLimit: number, text: string) => {

    return Author
        .where("age")
        .gte(ageLimit)
        .update({
            "$set": {
                description: text
            }
        })
        .exec();
});

export type AuthorModel = Model<IAuthor> & IAuthorModel & IAuthor;

export const Author: AuthorModel = <AuthorModel>mongoose.model<IAuthor>("Author", schema);