import { Schema, Document, Model } from "mongoose";
import { mongo } from "../../services/database";

interface IAuthor extends Document {
    name: string;
    create?: Date;
    description?: string;
}

interface IAuthorModel extends Model<IAuthor> {}

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    create: {
        type: Date, "default": Date.now
    },
    description: {
        type: String
    }
});

export const Author = <IAuthorModel>mongo.model<IAuthor>("Author", schema);