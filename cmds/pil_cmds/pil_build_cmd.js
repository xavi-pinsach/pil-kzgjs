exports.command = 'build <command>'
exports.desc = ''
exports.builder = function (yargs) {
    return yargs.commandDir('pil_build_cmds')
}
exports.handler = function (argv) {}