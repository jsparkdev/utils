import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/array/index.ts", "src/string/index.ts", "src/string/index.ts"],
  format: ["esm"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
});
