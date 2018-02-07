import { Mockgoose } from "mockgoose-fix";
import * as mongoose from "mongoose";

(mongoose as any).Promise = global.Promise;

if (process.env.NODE_ENV === "testing") {

  const mockgoose = new Mockgoose(mongoose);
  mockgoose.helper.setDbVersion("3.4.3");

  mockgoose.prepareStorage().then((): void => {
    mongoose.connect("mongodb://example.com:23400/TestingDB", {
      useMongoClient: true,
    });
  });

} else {

  mongoose.connect("mongodb://127.0.0.1:27021/typescript_mongoose", {
    useMongoClient: true,
  });

}

export { mongoose };
