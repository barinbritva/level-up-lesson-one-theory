/*
    Статическая типизация:
        * спасает от большинства стандартных ошибок при написании кода
        * облегчает чтение кода
        * упрощает рефакторинг кода
*/

// config.ts
export const config = {
    port: 3000
};

// another-config.ts
export const anotherConfig = {
    port: '3000'
};

// index.ts
export function runApp(port: number): void {
    const secondAppPort = port + 1

    console.log('Main app port ' + port + ', second app port ' + secondAppPort + '.')
    // run logic here
}

runApp(config.port)
runApp(anotherConfig.port)
runApp()


// Показать необязательные параметры

// function run(port?: number): void {
//     port = port || 4000
//     const secondAppPort = port + 1

//     console.log('Main app port ' + port + ', second app port ' + secondAppPort)
//     // run logic here
// }
// run()
