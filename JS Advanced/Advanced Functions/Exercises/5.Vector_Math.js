let solution = (function () {
    const add = ([xa, ya], [xb, yb]) => {
        return [xa + xb, ya + yb];
    };
    const multiply = ([xa, ya], num) => {
        return [xa * num, ya * num]
    };
    const length = ([xa, ya]) => {
        return Math.sqrt(xa * xa + ya * ya)
    };
    const dot = ([xa, ya], [xb, yb]) => {
        return xa * xb + ya * yb
    };
    const cross = ([xa, ya], [xb, yb]) => {
        return xa * yb - xb * ya
    };
    return {
        add,
        multiply,
        length,
        dot,
        cross
    }

})();

console.log(solution.cross([3, 7], [1, 0]))