const app = require('./app')

async function main() {
    await app.listen(8888)

    console.log('server is running')
}

main();