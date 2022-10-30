const {resolve} = require("path");
const {kzgVerify} = require("../../src/services/kzg_verify");

exports.command = 'verify <preprocessedFilename> <publicFilename> <proofFilename>'
exports.desc = '...' //TODO
exports.builder = (yargs) => yargs
    .positional('preprocessedFilename', {
        describe: 'Preprocessed filename', type: 'string', default: 'preprocessed.json'
    })
    .positional('publicFilename', {
        describe: 'Public inputs filename', type: 'string', default: 'public.json'
    })
    .positional('proofFilename', {
        describe: 'Proof filename', type: 'string', default: 'proof.json'
    });

exports.handler = async function (argv) {
    const options = {verbose: argv.verbose || false};

    argv.preprocessedFilename = resolve(argv.preprocessedFilename);
    argv.publicFilename = resolve(argv.publicFilename);
    argv.proofFilename = resolve(argv.proofFilename);

    await kzgVerify(argv.preprocessedFilename, argv.publicFilename, argv.proofFilename, options);
}