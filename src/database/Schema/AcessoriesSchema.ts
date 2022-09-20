import { Realm } from "@realm/react";

export class AcessoriesSchema extends Realm.Object {
  static schema = {
    name: "AcessoriesTable",
    properties: {
      IdMobile: { type: 'string' },
      Acessorie: { type: 'int' },
      Price: { type: 'double' },
      Date: { type: 'date' },
    },
    primaryKey: "IdMobile",
  }

  public IdMobile: string;
  public Acessorie: number;
  public Price: number;
  public Date: Date;
};
