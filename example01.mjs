// 01
// import http from 'http'

// import { readFileSync, createReadStream } from 'fs'

// // node -e "process.stdout.write(crypto.randomBytes(1e9))" > big.file
// http
//   .createServer((req, res) => {
//     //  Modo que o node não aguenta
//     // const file = readFileSync('big.file').toString() o readFileSync ou promise sempre retorna um buffer
//     // res.write(file)
//     // res.end()

//     createReadStream('big.file').pipe(res)
//     //
//   })
//   .listen(3000, () => console.log('running at 3000'))

// 02
// import net from 'net'
// net.createServer((socket) => socket.pipe(process.stdout)).listen(1338)

// // node -e "process.stdin.pipe(require('net').connect(1338))"
