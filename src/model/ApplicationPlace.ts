import mongoose, { Schema, Document, HydratedDocument, PopulatedDoc, ObjectId  } from "mongoose";
import { IApplicationUser } from "./ApplicationUser";

export interface IApplicationPlace extends Document {
  location: string;
  // maintainer: PopulatedDoc<Document<ObjectId> & IApplicationUser>
  maintainer: HydratedDocument<IApplicationUser>['_id']
}

const ApplicationPlaceSchema: Schema = new Schema({
  location: { type: String, required: true },
  maintainer: { type: Schema.Types.ObjectId, required: true },
});

export default mongoose.model<IApplicationPlace>(
  "ApplicationPlace",
  ApplicationPlaceSchema
);
