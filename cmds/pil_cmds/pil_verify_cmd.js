const {resolve} = require("path");
const {pilVerifyService} = require("../../src/services/pil_verify_srv");

exports.command = 'verify <pilFilename> <cnstPolsFilename> <cmmtPolsFilename> [options]'
exports.desc = 'Check if constant polynomials and committed polynomials fit with the PIL program'
exports.builder = (yargs) => yargs
    .positional('pilFilename', {
        describe: 'PIL filename', type: 'string', default: 'state_machine.pil'
    })
    .positional('cnstPolsFilename', {
        describe: 'Constant polynomials filename', type: 'string', default: 'polynomial.cnst'
    })
    .positional('cmmtPolsFilename', {
        describe: 'Committed polynomials filename', type: 'string', default: 'polynomial.cmmt'
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

    await pilVerifyService(argv.pilFilename, argv.pilConfigFilename, argv.cnstPolsFilename, argv.cmmtPolsFilename, options);
}