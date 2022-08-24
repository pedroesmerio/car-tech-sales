import Realm from "realm";
import { AccessoriesSchema } from "./Schema/AcessoriesSchema";
import { CarSchema } from "./Schema/CarSchema";

export const getRealm = async () => await Realm.open({
  path: "decode-app",
  schema: [CarSchema, AccessoriesSchema],
  schemaVersion: 3
});
