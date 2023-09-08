import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
// import progress from "rollup-plugin-progress";
import scss from "rollup-plugin-scss";

const config = {
    input: "index.js",
    output: {
        name: "What2Study",
        file: "dist/what2StudyClient.js",
        format: "umd",
    },
    plugins: [
        // progress(),
        resolve(),
        babel({
            exclude: "node_modules/**",
            presets: ["@babel/env", "@babel/preset-react"],
            babelHelpers: "bundled",
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
            preventAssignment: true,
        }),
        commonjs(),
        scss({
            fileName: "what2StudyClientStyles.css",
            watch: "./src/styles/_**",
        }),
        typescript({ tsconfig: "./tsconfig.json" }),
    ],
};

export default config;
