const {resolve} = require("path");
const {pilBuildCommittedService} = require("../../../src/services/pil_build_cmmt_srv");

exports.command = 'committed <pilFilename> <smFilename> <smInputs> <outputFilename> [options]'
exports.desc = 'Build all the constant polynomials defined in the PIL program using the builder'
exports.builder = (yargs) => yargs
    .positional('pilFilename', {
        describe: 'PIL filename', type: 'string', default: 'state_machine.pil'
    })
    .positional('smFilename', {
        describe: 'State machine builder filename', type: 'string', default: 'state_machine_builder.js'
    })
    .positional('smInputs', {
        describe: 'State machine inputs', type: 'string', default: 'state_machine_input.json'
    })
    .positional('outputFilename', {
        describe: 'Output filename', type: 'string', default: 'polynomial.cmmt'
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
    argv.smFilename = resolve(argv.smFilename);
    argv.smInputs = resolve(argv.smInputs);
    argv.outputFilename = resolve(argv.outputFilename);

    await pilBuildCommittedService(argv.pilFilename, argv.pilConfigFilename, argv.smFilename, argv.smInputs, argv.outputFilename, options);
}