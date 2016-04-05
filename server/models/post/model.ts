import { Schema, Document, Model, Types } from "mongoose";
import { mongo } from "../../services/database";

interface IPost extends Document {
    title: string;
    create: Date;
    author: {},
    description: string;
}

interface IPostModel extends Model<IPost> {
    byAuthor(id: string): Promise<IPost>
}

const schema = new Schema({
    title: String,
    create: {
        type: Date, "default": Date.now
    },
    author: {
        type: Schema.Types.ObjectId, ref: 'Author'
    },
    description: String
});

export const Post = <IPostModel>mongo.model<IPost>("Post", schema);