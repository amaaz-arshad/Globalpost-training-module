module.exports = {
    testEnvironment: "node",
    verbose: true,
    rootDir: "./",
    modulePaths: ["<rootDir>/test/"],
    moduleFileExtensions: ["js", "ts"],
    transform: {
        "^.+\\.ts?$": "ts-jest"
    }
};