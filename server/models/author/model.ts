import { Schema, Document, Model } from "mongoose";
import { mongo } from "../../services/database";

export interface IAuthor extends Document {
    name: string;
    create?: Date;
    description?: string;
}

export interface IAuthorModel extends Model<IAuthor> {}

const schema = new Schema({
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

export const Author: IAuthorModel = <IAuthorModel>mongo.model<IAuthor>("Author", schema);