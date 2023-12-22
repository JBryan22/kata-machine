export default function two_crystal_balls(breaks: boolean[]): number {

    if (breaks[0] === true) {
        return 0;
    }

    let root = Math.floor(Math.sqrt(breaks.length));
    let ind = root;

    while (ind < breaks.length) {
        if (breaks[ind] === true) {
            for (let i = ind - root + 1; i <= ind; i++) {
                if (breaks[i] === true) {
                    return i;
                }
            }
        } else {
            ind += root;
        }
    }
    return -1;
}