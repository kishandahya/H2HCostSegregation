// jest.config.js
export default {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    setupFiles: ['./__mocks__/next_router_mock.js'],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
