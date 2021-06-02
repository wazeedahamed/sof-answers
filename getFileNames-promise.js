var fs = require('fs');

function getImageNames() {
    return new Promise((resolve, reject) => {
        fs.readdir('../public/image', (err, files) => {
            err ? reject(err) : resolve(files);
        });
    });
};

function runTheApp() {
    getImageNames().then(images => {
        console.log(images);
    }).catch(error => {
        console.log(error);
    });
}

runTheApp();