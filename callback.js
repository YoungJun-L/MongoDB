const addSum = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') return callback('a, b must be numbers');
        callback(undefined, a + b);
    }, 3000);
};

addSum(10, 20, (error, sum) => {
    if (error) return console.log(error);
    addSum(sum, 3, (error1, sum1) => {
        if (error1) return console.log(error1);
        return console.log(sum1);
    });
});