import mongoose from "mongoose";
class DatabaseConfig {
  connect = (url: string) => {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(url)
        .then(resolve)
        .catch(reject);
    });
  };

  disconnect = () => {
    mongoose.connection.close();
  };
}
export default new DatabaseConfig();
