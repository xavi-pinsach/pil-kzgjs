/*
    Copyright 2022 iden3

    This file is part of pil-kzgjs

    pil-kzgjs is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    pil-kzgjs is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with pil-kzgjs. If not, see <https://www.gnu.org/licenses/>.
*/


const {F1Field} = require("ffjavascript");
const {compile, newConstantPolsArray} = require("pilcom");
const fs = require("fs");

module.exports.pilBuildConstant = async function(pilFile, pilConfigFile, smBuilderFile, outputFile, logger) {
    logger.info(`Build constant polynomials file from ${pilFile} file`);

    const F = new F1Field("0xFFFFFFFF00000001");

    const config = undefined !== pilConfigFile ? JSON.parse(fs.readFileSync(pilConfigFile)) : {};
    const pil = await compile(F, pilFile, null, config);

    //TODO check if there are constant pols defined
    const cnstPols = newConstantPolsArray(pil);

    let {buildConstants} = await require(smBuilderFile);
    await buildConstants(cnstPols);

    await cnstPols.saveToFile(outputFile);

    logger.info(`Constant polynomials successfully built to ${outputFile}`);

    return 0;
}

