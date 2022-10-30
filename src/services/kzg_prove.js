const Logger = require("logplease");

const logger = Logger.create("pilkatejs", {showTimestamp: false});
Logger.setLogLevel("INFO");

async function kzgProve(pilFile, pilConfigFile, cnstPolsFile, cmmtPolsFile, ptauFile, publicFile, proofFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    // const {
    //     publicInputs: publicInputs, proof: proof
    // } = await kzg.kzgProve(pilFile, pilConfigFile, cnstPolsFile, cmmtPolsFile, ptauFile, logger);

    //await bfj.write(publicFile, publicInputs, {space: 1});
    //await bfj.write(proofFile, proof, {space: 1});

    return 0;
}

module.exports.kzgProve = kzgProve;