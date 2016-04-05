import { Mongoose } from "mongoose";

export const mongo: Mongoose = new Mongoose().connect("mongodb://127.0.0.1/tsc_mongoose");