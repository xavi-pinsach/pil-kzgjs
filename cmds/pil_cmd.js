exports.command = 'pil <command>'
exports.desc = 'PIL commands'
exports.builder = function (yargs) {
    return yargs.commandDir('pil_cmds')
}
exports.handler = function (argv) {}