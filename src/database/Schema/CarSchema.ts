import { Realm } from "@realm/react";

export class CarSchema extends Realm.Object {
  static schema = {
    name: "CarTable",
    properties: {
      IdMobile: { type: 'string' },
      Name: { type: 'string' },
      BasePrice: { type: 'double' },
      Type: { type: 'string' },
      Transmission: { type: 'int' },
      Brand: { type: 'string' },
      Fuel: { type: 'int' },
      Model: { type: 'int' },
      Accessories: { type: 'AccessoriesTable[]' },
      Color: { type: 'string' },
      ImgUrl: { type: 'string' },
    },
    primaryKey: "IdMobile",
  }

  public IdMobile: 'string';
  public Name: 'string';
  public BasePrice: 'double';
  public Type: 'string';
  public Transmission: 'int';
  public Brand: 'string';
  public Fuel: 'int';
  public Model: 'int';
  public Accessories: 'Accessories[]';
  public Color: 'string';
  public ImgUrl: 'string';
};
