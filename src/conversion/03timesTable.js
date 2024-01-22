// /**
//  * @param {number} baseNum which number to generate the times table for.
//  * @returns {number[]} array of the multiples from 1x to 10x baseNum*/
// function timesTable(baseNum) {
//     const results = [];
//     for (let i = 1; i <= 10; i++) {
//         const multiple = i * baseNum;
//         results.push(multiple);
//     }
//     return results;
// }



const timesTable = (baseNum) => {
    const results = [];
    for (let i = 1; i <= 10; i++) {
        const multiple = i * baseNum;
        results.push(multiple);
    }
    return results;
}
export { timesTable };
