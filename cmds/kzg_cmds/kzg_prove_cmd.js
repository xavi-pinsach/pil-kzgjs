const {resolve} = require("path");
const {kzgProveService} = require("../../src/services/kzg_prove_srv");

exports.command = 'prove  <pilFilename> <cnstPolsFilename> <cmmtPolsFilename> <ptauFilename> <publicFilename> <proofFilename>'
exports.desc = '...' //TODO
exports.builder = (yargs) => yargs
    .positional('pilFilename', {
        describe: 'PIL filename', type: 'string', default: 'state_machine.pil'
    })
    .positional('cnstPolsFilename', {
        describe: 'Constant polynomials filename', type: 'string', default: 'polynomial.cnst'
    })
    .positional('cmmtPolsFilename', {
        describe: 'Committed polynomials filename', type: 'string', default: 'polynomial.cnst'
    })
    .positional('ptauFilename', {
        describe: 'Ptau filename', type: 'string', default: 'powersOfTau.ptau'
    })
    .positional('publicFilename', {
        describe: 'Public inputs filename', type: 'string', default: 'public.json'
    })
    .positional('proofFilename', {
        describe: 'Proof filename', type: 'string', default: 'proof.json'
    })
    .options({
        pilConfigFilename: {
            alias: 'c', type: 'string', description: 'PIL config filename'
        }
    });
exports.handler = async function (argv) {
    const options = {verbose: argv.verbose || false};

    argv.pilFilename = resolve(argv.pilFilename);
    if (undefined !== argv.pilConfigFilename) argv.pilConfigFilename = resolve(argv.pilConfigFilename);
    argv.cnstPolsFilename = resolve(argv.cnstPolsFilename);
    argv.cmmtPolsFilename = resolve(argv.cmmtPolsFilename);
    argv.ptauFilename = resolve(argv.ptauFilename);
    argv.publicFilename = resolve(argv.publicFilename);
    argv.proofFilename = resolve(argv.proofFilename);

    await kzgProveService(argv.pilFilename, argv.pilConfigFilename, argv.cnstPolsFilename, argv.cmmtPolsFilename, argv.ptauFilename, argv.publicFilename, argv.proofFilename, options);
}