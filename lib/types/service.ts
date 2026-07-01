export type ServiceIcon =
  | "users"
  | "briefcase"
  | "layers"
  | "code"
  | "cloud"
  | "database"
  | "sparkles"
  | "lightbulb";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
}