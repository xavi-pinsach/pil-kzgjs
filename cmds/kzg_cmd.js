exports.command = 'kzg <command>'
exports.desc = 'KZG (Kate, Zaverucha & Goldberg) Polynomial commitments commands'
exports.builder = function (yargs) {
    return yargs.commandDir('kzg_cmds')
}
exports.handler = function (argv) {}