module.exports = {
  roots: ["<rootDir>/test"],

  testEnvironment: "jsdom",

  testMatch: ["**/__tests__/**/*.+(ts|tsx)", "**/?(*.)+(test).+(ts|tsx)"],

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",

    "^.+\\.(js|jsx)$": "jest-esm-transformer",
  },

  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

  moduleDirectories: ["node_modules", "src"],

  moduleNameMapper: {
    "loading-attribute-polyfill":
      "loading-attribute-polyfill/dist/loading-attribute-polyfill",
  },
};
