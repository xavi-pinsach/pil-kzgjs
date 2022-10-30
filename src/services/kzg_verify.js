const Logger = require("logplease");

const logger = Logger.create("pilkatejs", {showTimestamp: false});
Logger.setLogLevel("INFO");

async function kzgVerify(preprocessedFile, publicFile, proofFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    //const preprocessed = JSON.parse(fs.readFileSync(preprocessedFile, "utf8"));
    //const publicInputs = JSON.parse(fs.readFileSync(publicFile, "utf8"));
    //const proof = JSON.parse(fs.readFileSync(proofFile, "utf8"));

    //return await kzg.kzgVerify(preprocessed, /*publicInputs,*/ proof, logger);
}

module.exports.kzgVerify = kzgVerify;