import { Realm } from "@realm/react";

export class AccessoriesSchema extends Realm.Object {
  static schema = {
    name: "AccessoriesTable",
    properties: {
      IdMobile: { type: 'string' },
      Accessorie: { type: 'int' },
      Price: { type: 'double' },
    },
    primaryKey: "IdMobile",
  }

  public IdMobile: 'string';
  public Accessorie: 'int';
  public Price: 'double';
};
