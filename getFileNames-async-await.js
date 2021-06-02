var fs = require('fs');

function getImageNames() {
    return new Promise((resolve, reject) => {
        fs.readdir('../public/image', (err, files) => {
            err ? reject(err) : resolve(files);
        });
    });
};

async function runTheApp() {
    try {
        const images = await getImageNames();
        console.log(images);
    } catch(e) {
        console.log(e);
    }
}

runTheApp();