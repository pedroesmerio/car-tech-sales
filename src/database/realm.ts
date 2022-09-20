import { createRealmContext } from "@realm/react";

import { AcessoriesSchema } from "./Schema/AcessoriesSchema";
import { CarSchema } from "./Schema/CarSchema";

const config = {
  path: "car-tech-sales",
  schema: [CarSchema, AcessoriesSchema],
  schemaVersion: 7,
};

export const { RealmProvider, useRealm, useQuery, useObject } =
  createRealmContext(config);
