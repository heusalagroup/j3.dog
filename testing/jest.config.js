/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  projects: [
    "./src/fi/hg/core",
    "./src/fi/hg/node",
    "./src/fi/hg/backend",
    "./src/fi/hg/frontend"
  ],
  testTimeout: 300000
};
