import path from "path";
import { BuildPaths } from "../build/types/config";
import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push(".ts", "tsx");

  config!.module!.rules = config!.module!.rules!.map(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    (rule: RuleSetRule | "...") => {
      if (
        rule !== "..." &&
        rule.test instanceof RegExp &&
        rule.test?.toString().includes("svg")
      ) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    }
  );

  config!.module!.rules!.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config!.module!.rules!.push(buildCssLoaders(true));

  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify(""),
      __PROJECT__: JSON.stringify("storybook"),
    })
  );

  return config;
};
