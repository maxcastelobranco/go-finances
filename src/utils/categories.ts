export interface CategoryData {
  name: CategoryNames;
  iconName: string;
  color: string;
}

export type CategoryNames =
  | "Purchases"
  | "Food"
  | "Salary"
  | "Car"
  | "Leisure"
  | "Studies";

export const categories: CategoryData[] = [
  { name: "Salary", iconName: "dollar-sign", color: "#12A454" },
  { name: "Purchases", iconName: "shopping-bag", color: "#5636D3" },
  { name: "Food", iconName: "coffee", color: "#FF872C" },
  { name: "Car", iconName: "crosshair", color: "#E83F5B" },
  { name: "Leisure", iconName: "heart", color: "#26195C" },
  { name: "Studies", iconName: "book", color: "#9C001A" },
];
