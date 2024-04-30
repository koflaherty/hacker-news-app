import {pathsToModuleNameMapper, JestConfigWithTsJest} from "ts-jest";
import {compilerOptions} from "./tsconfig.json";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest",
  },
};

export default jestConfig;
