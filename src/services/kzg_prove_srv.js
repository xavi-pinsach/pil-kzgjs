const Logger = require("logplease");
const {kzgProve} = require("../kzg_prover");
const bfj = require("bfj");

const logger = Logger.create("pil-kzgjs", {showTimestamp: false});
Logger.setLogLevel("INFO");

module.exports.kzgProveService = async function (pilFile, pilConfigFile, cnstPolsFile, cmmtPolsFile, ptauFile, publicFile, proofFile, options) {
    if (options.verbose) Logger.setLogLevel("DEBUG");

    const {
        publicInputs: publicInputs, proof: proof
    } = await kzgProve(pilFile, pilConfigFile, cnstPolsFile, cmmtPolsFile, ptauFile, logger);

    await bfj.write(publicFile, publicInputs, {space: 1});
    await bfj.write(proofFile, proof, {space: 1});

    return 0;
}