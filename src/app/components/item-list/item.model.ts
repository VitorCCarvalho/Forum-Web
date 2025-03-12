export interface Item {
  id: number;
  title: string;
  text: string;
  additionalInfo?: string; // Optional field for additional information (e.g., forum name, author, etc.)
  routerLink?: string; // Optional field for navigation
}
