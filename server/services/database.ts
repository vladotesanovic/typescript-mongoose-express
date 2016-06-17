import { Mongoose } from "mongoose";
import mockgoose = require("mockgoose");

const mongo: Mongoose & { isMocked: boolean} = <Mongoose & { isMocked: boolean }>new Mongoose();

mongo.Promise = global.Promise;

if (process.env.NODE_ENV === "testing") {
    mockgoose(mongo).then((): void => { mongo.connect("mongodb://example.com/TestingDB") });
} else {
    mongo.connect("mongodb://127.0.0.1/typescript_mongoose");
}

export { mongo };