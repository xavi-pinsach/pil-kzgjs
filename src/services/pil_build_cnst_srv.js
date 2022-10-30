const Logger = require("logplease");
const {pilBuildConstant} = require("../pil_build_constant");

const logger = Logger.create("pil-kzgjs", {showTimestamp: false});
Logger.setLogLevel("INFO");

module.exports.pilBuildConstantService = async function (pilFile, pilConfigFile, smBuilderFile, outputFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    return await pilBuildConstant(pilFile, pilConfigFile, smBuilderFile, outputFile, logger);
}