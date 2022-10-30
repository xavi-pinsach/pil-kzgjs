const yargs = require("yargs")
const {hideBin} = require("yargs/helpers")

async function parseArgs() {
    yargs(hideBin(process.argv))
        .option("verbose", {
            alias: "v",
            type: "boolean",
            description: "Run with verbose logging"
        })
        .commandDir('cmds')
        .demandCommand()
        .help()
        .parse();
}

parseArgs()
    .catch((e) => {
        console.log(e);
    });