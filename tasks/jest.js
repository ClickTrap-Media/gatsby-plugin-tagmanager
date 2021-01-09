const jestFramework = require("jest");

function jest() {
    return jestFramework.runCLI(
        {},
        ["jest.config.js"]
    );
}

function jestCoverage() {
    return jestFramework.runCLI(
        {
            "collectCoverage": true,
            "coverageReporters": ["text", "html"],
            "coverageDirectory": "coverage/",
            "coveragePathIgnorePatterns": [
                "<rootdir>/node_modules/"
            ]
        },
        ["jest.config.js"]
    );
}

module.exports.jest = jest;
module.exports.jestCoverage = jestCoverage;
