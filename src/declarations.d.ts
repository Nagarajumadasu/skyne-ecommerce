declare module "*.jsx" {
  import { ComponentType } from "react";
  const component: ComponentType<any>;
  export default component;
}

declare module "*.tsx" {
  import { ComponentType } from "react";
  const component: ComponentType<any>;
  export default component;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.mp4" {
  const value: string;
  export default value;
}
