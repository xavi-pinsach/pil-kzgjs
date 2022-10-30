const Logger = require("logplease");
const {pilBuildCommitted} = require("../pil_build_committed");

const logger = Logger.create("pil-kzgjs", {showTimestamp: false});
Logger.setLogLevel("INFO");

module.exports.pilBuildCommittedService = async function (pilFile, pilConfigFile, smBuilderFile, smInputFile, outputFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    return await pilBuildCommitted(pilFile, pilConfigFile, smBuilderFile, smInputFile, outputFile, logger);
}
