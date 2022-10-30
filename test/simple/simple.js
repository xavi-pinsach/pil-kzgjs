//const {F1Field} = require("ffjavascript");

module.exports.buildConstants = async function (cnstPols) {
    const simplePol = cnstPols.Simple;
    const Global = cnstPols.Global;

    const N = simplePol.CNST.length;

    for (let i = 0; i < N; i++) {
        Global.L1[i] = (i === 0) ? 1n : 0n;
        simplePol.CNST[i] = BigInt(i);
        simplePol.CNST2[i] = BigInt(i);
    }
}


module.exports.execute = async function (cmmtPols) {
    const simplePol = cmmtPols.Simple;

    const N = simplePol.cmmt.length;

    for (let i = 0; i < N; i++) {
        simplePol.cmmt[i] = BigInt(i);
    }

    return 1024;
}