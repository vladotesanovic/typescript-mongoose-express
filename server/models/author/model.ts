import { mongoose } from "../../services/database";
import { Schema, Document, Model } from "mongoose";

export interface IAuthor extends Document {
    name: string;
    create?: Date;
    description?: string;
}

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

export type AuthorModel = Model<IAuthor>;

export const Author: AuthorModel = mongoose.model<IAuthor>("Author", schema);