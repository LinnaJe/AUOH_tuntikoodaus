let socket=io();

const sensor_gauge  = document.getElementById("sensor_gauge");
const ctx = sensor_gauge.getContext("2d");

socket.on =("sensor_updated", (data)=>{
    ctx.clearRect(0,0, sensor_gauge.width, sensor_gauge.height);
    ctx.beginPath();
    ctx.arc(150 + data.x, 150 + data.y, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.rect(300, data.z + 148, 50, 4);
    ctx.fill();

});

