import { Realm } from "@realm/react";
import { AcessoriesSchema } from "./AcessoriesSchema";

export class CarSchema extends Realm.Object {
  static schema = {
    name: "CarTable",
    properties: {
      IdMobile: { type: "string" },
      Name: { type: "string" },
      Year: { type: "int" },
      BasePrice: { type: "double" },
      Transmission: { type: "int" },
      Brand: { type: "string" },
      Fuel: { type: "int" },
      Model: { type: "int" },
      Color: { type: "string" },
      ImgUrl: { type: "string" },
      Date: { type: "date" },
      Acessories: { type: "AcessoriesTable[]", default: [] },
    },
    primaryKey: "IdMobile",
  };

  public IdMobile: string;
  public Name: string;
  public Year: number;
  public BasePrice: number;
  public Transmission: number;
  public Brand: string;
  public Fuel: number;
  public Model: number;
  public Color: string;
  public ImgUrl: string;
  public Date: Date;
  public Acessories: AcessoriesSchema[];
}
