import { defineConfig } from "tsup";
import { glob } from "glob";

const entries = glob.sync("src/*/index.ts");

export default defineConfig({
  entry: entries,
  format: ["esm"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
});
