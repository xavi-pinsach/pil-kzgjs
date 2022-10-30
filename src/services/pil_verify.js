const Logger = require("logplease");

const logger = Logger.create("pilkatejs", {showTimestamp: false});
Logger.setLogLevel("INFO");

async function pilVerify(pilFile, pilConfigFile, cnstPolsFile, cmmtPolsFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    //return await pil.pilVerify(pilFile, pilConfigFile, cnstPolsFile, cmmtPolsFile, logger);
}

module.exports.pilVerify = pilVerify;
