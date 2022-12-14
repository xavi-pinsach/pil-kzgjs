const {resolve} = require("path");
const {kzgSetupService} = require("../../src/services/kzg_setup_srv");

exports.command = 'setup <pilFilename> <cnstPolsFilename> <ptauFilename> <preprocessedFilename>'
exports.desc = '...' //TODO
exports.builder = (yargs) => yargs
    .positional('pilFilename', {
        describe: 'PIL filename', type: 'string', default: 'state_machine.pil'
    })
    .positional('cnstPolsFilename', {
        describe: 'Constant polynomials filename', type: 'string', default: 'polynomial.cnst'
    })
    .positional('ptauFilename', {
        describe: 'Ptau filename', type: 'string', default: 'powersOfTau.ptau'
    })
    .positional('preprocessedFilename', {
        describe: 'Output preprocessed filename', type: 'string', default: 'preprocessed.json'
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
    argv.ptauFilename = resolve(argv.ptauFilename);
    argv.preprocessedFilename = resolve(argv.preprocessedFilename);

    await kzgSetupService(argv.pilFilename, argv.pilConfigFilename, argv.cnstPolsFilename, argv.ptauFilename, argv.preprocessedFilename, options);
}