function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let order = {
    id: 1234,
    content: "asdf"
}
const summarize = async(order, callback)=>{
    await sleep(2000);
    callback('orderId:' + order.id + " content:" + order.content);
};

console.log("before call");
summarize(order, console.log);
console.log("after call");
