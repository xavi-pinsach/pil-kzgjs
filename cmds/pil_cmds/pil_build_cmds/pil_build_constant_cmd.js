const {resolve} = require("path");
const {pilBuildConstant} = require("../../../src/services/pil_build_cnst");

exports.command = 'constant <pilFilename> <smFilename> <outputFilename> [options]'
exports.desc = 'Build all the constant polynomials defined in the PIL program using the builder'
exports.builder = (yargs) => yargs
    .positional('pilFilename', {
        describe: 'PIL filename', type: 'string', default: 'state_machine.pil'
    })
    .positional('smFilename', {
        describe: 'State machine builder filename', type: 'string', default: 'state_machine_builder.js'
    })
    .positional('outputFilename', {
        describe: 'Output filename', type: 'string', default: 'polynomial.cnst'
    })
    .options('pilConfigFilename', {
        alias: 'c', type: 'string', description: 'PIL config filename'
    });
exports.handler = async function (argv) {
    const options = {verbose: argv.verbose || false};

    argv.pilFilename = resolve(argv.pilFilename);
    if (undefined !== argv.pilConfigFilename) argv.pilConfigFilename = resolve(argv.pilConfigFilename);
    argv.smFilename = resolve(argv.smFilename);
    argv.outputFilename = resolve(argv.outputFilename);

    await pilBuildConstant(argv.pilFilename, argv.pilConfigFilename, argv.smFilename, argv.outputFilename, options);
}