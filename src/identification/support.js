// Note: there's no need to look in this file

function doWithSequence(start, end, hdFn, tailFn, stepFn) {
    hdFn();
    for (let i = start; i <= end; i++) {
        stepFn(i);
    }
    tailFn();
}

/** Runs the given function twice, once on the left at the original x, y, then again on the right with adjusted x.
 * Allows for easy symmetrized painting.
 * @param {(x:number, y:number) => void } fn - instructions to call in both places
 * @param {number } x The initial x position to run the instructions at
 * @param {number } y The y position to run (both calls to the instructions at)
 */
function symmetrize(fn, x, y) {
    console.log("stub for symmetrize");
    fn(x, y);
    fn(600 - x, y);
}
function circle(x, y, diameter) {
    console.log("drawing circle at ", { x, y });
}

const mouseX = 100;
const mouseY = 100;

export { symmetrize, doWithSequence, circle, mouseX, mouseY };
