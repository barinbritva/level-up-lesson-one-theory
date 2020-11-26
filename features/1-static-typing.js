// config.ts
const config = {
    port: 3000
};

// another-config.ts
const anotherConfig = {
    port: '3000'
};

// index.ts
function runApp(port) {
    const secondAppPort = port + 1

    console.log('Main app port ' + port + ', second app port ' + secondAppPort)
    // run logic here
}

runApp(config.port)
runApp(anotherConfig.port)
runApp()

