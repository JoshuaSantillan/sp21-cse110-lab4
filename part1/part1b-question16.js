let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const carStats in statistics){
    if(carStats.startsWith('r') || statistics[carStats] % 2 == 1){
        console.log(statistics[carStats])
    }
}