//Try to write THIS arrow function in "concise-body" form
//- you will likely encounter a snag.

//Leave this JSDOC section alone
/** Returns an object containing the given name and score as playerName and highScore properties.
 * @param {string} name to be used in object
 * @param {number} score to be used in object
// @returns {{playerName: string, highScore: number}} object containing a playerName and highScore property.
*/
//rewrite this function:
function createObject(name, score) {
    return { playerName: name, highScore: score };
}
createObject("neill", 100);

export { createObject };
