const Logger = require("logplease");

const logger = Logger.create("pilkatejs", {showTimestamp: false});
Logger.setLogLevel("INFO");

async function pilBuildCommitted(pilFile, pilConfigFile, smBuilderFile, smInputFile, outputFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    //return await pil.pilBuildCommitted(pilFile, pilConfigFile, smBuilderFile, smInputFile, outputFile, logger);
}

module.exports.pilBuildCommitted = pilBuildCommitted;
