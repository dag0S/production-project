declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: "storybook" | "jest" | "frontend";

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
}