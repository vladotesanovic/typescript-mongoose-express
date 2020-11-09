// import * as mongoose from "mongoose";
import { mongoose } from "../../config/database";
import { Document, Model, Schema } from "mongoose";

export interface IPost extends Document {
  title: string;
  create: Date;
  author: {},
  description: string;
}

export interface IPostModel extends Model<IPost> {
  findAllByAuthor(id: string): Promise<IPost[]>
}

const schema = new Schema({
  title: String,
  create: {
    type: Date,
    "default": Date.now
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  description: String
});

schema.static("findAllByAuthor", (author: {}) => {

  return Post
    .find({ author: author })
    .lean()
    .exec();
});

export const Post = mongoose.model<IPost>("Post", schema) as IPostModel;
