let palabras = ["Piedra", "Papel", "Tijeras"];
 
 function pc(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = { palabras, pc }