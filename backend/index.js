import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});


//event handler
wss.on("connection",function(socket){
    console.log("User Connected !");
    socket.send("Hello ");

    setInterval(()=>{
        socket.send(`Solana price is : ${Math.random()}`);
    },500);

    socket.on("message",(e)=>{
        console.log(e.toString());
    });

});