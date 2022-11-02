const Logger = require("logplease");
const fs = require("fs");
const {kzgVerify} = require("../kzg_verifier");

const logger = Logger.create("pil-kzgjs", {showTimestamp: false});
Logger.setLogLevel("INFO");

module.exports.kzgVerifyService = async function (preprocessedFile, publicFile, proofFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    const preprocessed = JSON.parse(fs.readFileSync(preprocessedFile, "utf8"));
    // const publicInputs = JSON.parse(fs.readFileSync(publicFile, "utf8"));
    const proof = JSON.parse(fs.readFileSync(proofFile, "utf8"));

    return await kzgVerify(preprocessed, /*publicInputs,*/ proof, logger);
}