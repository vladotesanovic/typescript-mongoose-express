import mockgoose = require("mockgoose");
import mongoose = require("mongoose");

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === "testing") {
    mockgoose(mongoose).then((): void => {
      mongoose.connect("mongodb://example.com/TestingDB", {
        useMongoClient: true,
      });
    });
} else {
    mongoose.connect("mongodb://127.0.0.1/typescript_mongoose", {
      useMongoClient: true,
    });
}

export { mongoose };
