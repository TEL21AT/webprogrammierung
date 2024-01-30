
let start = Date.now(), i=0;

let count = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let j=0; j<1e9; j++) {
                i++;
            }
            resolve('finished app.js');
        }, 0);
    });
}

count().then((message) => {
    console.log(message);
});
