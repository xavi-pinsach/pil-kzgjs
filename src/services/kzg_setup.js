const Logger = require("logplease");

const logger = Logger.create("pilkatejs", {showTimestamp: false});
Logger.setLogLevel("INFO");

async function kzgSetup(pilFile, pilConfigFile, cnstPolsFile, ptauFile, preprocessedFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    //const vkOutput = await kzg.kzgSetup(pilFile, pilConfigFile, cnstPolsFile, ptauFile, logger);

    //await bfj.write(preprocessedFile, vkOutput, {space: 1});

    return 0;
}

module.exports.kzgSetup = kzgSetup;