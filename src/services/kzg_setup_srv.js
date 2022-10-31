const Logger = require("logplease");
const {kzgSetup} = require("../kzg_setup");
const bfj = require("bfj");

const logger = Logger.create("pil-kzgjs", {showTimestamp: false});
Logger.setLogLevel("INFO");

module.exports.kzgSetupService = async function (pilFile, pilConfigFile, cnstPolsFile, ptauFile, preprocessedFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    const vkOutput = await kzgSetup(pilFile, pilConfigFile, cnstPolsFile, ptauFile, logger);

    await bfj.write(preprocessedFile, vkOutput, {space: 1});

    return 0;
}