const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
    // // SOLUTION 1
    // fs.readFile("test-file.txt", (err,data)=>{
    //     if (err) console.log(err);
    //     res.end(data)
    // })

    // // SOLUTION 2 Streams
    // const readable = fs.createReadStream("test-file.txt")
    // readable.on("data", chunk =>{
    //     res.write(chunk);
    // })
    // readable.on("end", ()=>{
    //     res.end();
    // })
    // readable.on("error", err =>{
    //     console.log(err);
    //     res.statusCode=500;
    //     res.end("file not found")
    // })

    // SOLUTION 3 Pipe operator Permet de diriger la sortie du flux
    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(res);
    // ReadableSource.pipe(writeableDestination)
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening...");
});
