let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    reaceCars: 5,
    blackCars: 40,
    rareCars: 2
};
// let length = statistics.size;
// console.log(length);

for(let x in statistics){
    if(x.charAt(0) === 'r'){
        console.log(x + ': ' + statistics[x]);
    }
    else if(statistics[x]%2 === 1){
        console.log(x + ': ' + statistics[x]);
    }

}