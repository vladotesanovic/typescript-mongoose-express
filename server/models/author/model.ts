import { mongoose } from "../../config/database";
import { Schema, Model, Document } from "mongoose";

export interface IAuthor extends Document {
    age: number;
    name: string;
    create?: Date;
    description?: string;
}

export interface IAuthorModel extends Model<IAuthor> {
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

export const Author = mongoose.model<IAuthor>("Author", schema) as IAuthorModel;