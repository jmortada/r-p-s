console.log("helllo world!");

function getComputerChoice () {
    let s = {0:"rock", 1:"paper", 2:"scissors"};
    let rin = Math.floor(Math.random() * 3);
    return s[rin]
}

console.log(getComputerChoice())