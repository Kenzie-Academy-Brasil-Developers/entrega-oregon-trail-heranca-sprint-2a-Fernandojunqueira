class Traveler{
    constructor(name){

        this._name       = name;
        this._amountFood = 1;
        this._isHealthy  = true;
        
        
    }


    hunt(){

         this._amountFood += 2
    }
    eat(){

        if(this._amountFood > 0){
            this._amountFood -= 1
        }else{
            this._isHealthy = false
        }
    }
}

class Wagon {
    constructor(capacity){

        this._capacity       = capacity;
        this.passangersArray = []
    }

    getAvailableSeatCount(){

        return this._capacity - this.passangersArray.length;

    }
    join(obj){

        if(this._capacity > this.passangersArray.length){

            this.passangersArray.push(obj)
            
        }
    }
    shouldQuarantine(){

       return this.passangersArray.some(element => element._isHealthy == false)
    }
    
    totalFood(){

       return this.passangersArray.reduce((acc,act) => acc + act._amountFood,0)
    }

   
}

class Hunter extends Traveler{
    constructor(name){
        super(name)
        this._amountFood = 2;
        this._isHealthy  = true;

    }

    hunt(){

        this._amountFood += 5;
   }

   eat(){

    if(this._amountFood > 0){
        this._amountFood -= 2
    }else{
        this._amountFood -= this._amountFood
        this._isHealthy = false
    }
    if(this._amountFood <= 0 ){

        this._isHealthy  = false
        this._amountFood = 0
    }
}

giveFood(traveler, numOfFoodUnits){

    if(this._amountFood >= numOfFoodUnits){

        traveler._amountFood += numOfFoodUnits
        this._amountFood     -= numOfFoodUnits

    }
}
    
}

class Doctor extends Traveler{
    constructor(name){
        super(name)
        this._amountFood = 1;
        this._isHealthy  = true;

    }

    heal(traveler){

        if(traveler._isHealthy == false){

            traveler._isHealthy = true;
        }
    }
}








// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');

console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);

wagon.join(maude); // Não tem espaço para ela!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);


console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);

sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();

console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);

henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan agora está doente (sick)

console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);


drsmith.heal(juan);

console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);

sarahunter.giveFood(juan, 4);

sarahunter.eat(); // Ela só tem um, então ela come e fica doente

console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);