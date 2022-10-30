const Logger = require("logplease");
const {pilVerify} = require("../pil_verify");

const logger = Logger.create("pil-kzgjs", {showTimestamp: false});
Logger.setLogLevel("INFO");

module.exports.pilVerifyService = async function (pilFile, pilConfigFile, cnstPolsFile, cmmtPolsFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    return await pilVerify(pilFile, pilConfigFile, cnstPolsFile, cmmtPolsFile, logger);
}