const wilderInfo = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.think({
    text : wilderInfo.name,
    e : "oO",
    T: "U"
}));
