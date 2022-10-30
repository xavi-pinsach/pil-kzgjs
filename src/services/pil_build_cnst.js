const Logger = require("logplease");

const logger = Logger.create("pilkatejs", {showTimestamp: false});
Logger.setLogLevel("INFO");

async function pilBuildConstant(pilFile, pilConfigFile, smBuilderFile, outputFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    //return await pil.pilBuildConstant(pilFile, pilConfigFile, smBuilderFile, outputFile, logger);
}

module.exports.pilBuildConstant = pilBuildConstant;