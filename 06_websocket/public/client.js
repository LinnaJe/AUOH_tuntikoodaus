
let socket = io();

socket.on("server-to-client", (message)=>{
    console.log(message);
});