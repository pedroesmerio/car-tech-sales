export const CarSchema = {
  name: "Car",
  properties: {
    IdMobile: 'string',
    Name: 'string',
    BasePrice: 'double',
    Type: 'string',
    Transmission: 'int',
    Brand: 'string',
    Fuel: 'int',
    Model: 'int',
    Accessories: 'Accessories[]',
    Color: 'string',
    ImgUrl: 'string',
  },
  primaryKey: "IdMobile",
};
