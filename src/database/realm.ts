import { createRealmContext } from "@realm/react";

import { AccessoriesSchema } from "./Schema/AcessoriesSchema";
import { CarSchema } from "./Schema/CarSchema";

const config = {
  path: "car-tech-sales",
  schema: [CarSchema, AccessoriesSchema],
  schemaVersion: 3
}

export const {
  RealmProvider,
  useRealm,
  useQuery,
  useObject
} = createRealmContext(config);
