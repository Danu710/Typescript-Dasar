export enum CustomerType {
  PLATINUM = 0,
  REGULAR = 1,
  GOLD = 2,
}

export type Customer = {
  id: string;
  name: string;
  type: CustomerType;
};
