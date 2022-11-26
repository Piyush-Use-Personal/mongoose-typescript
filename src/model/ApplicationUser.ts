import mongoose, { Schema, Document, Model, HydratedDocument } from "mongoose";

export interface IApplicationUser {
  email: string;
  firstName: string;
  lastName: string;
}

interface IApplicationUserMethods {
  fullName(): string;
}

interface IApplicationUserModel extends Model<
  IApplicationUser,
  {},
  IApplicationUserMethods
> {
    findAllUsers(): Promise<HydratedDocument<IApplicationUser, IApplicationUserMethods>>
}

const ApplicationUserSchema = new Schema<
  IApplicationUser,
  IApplicationUserModel
>({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
// static method
ApplicationUserSchema.statics.findAllUsers = function() {
  return this.find();
}

// instance method
ApplicationUserSchema.method("fullName", function fullName() {
  return this.firstName + " " + this.lastName;
});

const ApplicationUser = mongoose.model<IApplicationUser, IApplicationUserModel>(
  "ApplicationUser",
  ApplicationUserSchema
);
export default ApplicationUser;

