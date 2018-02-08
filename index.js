let store = {drivers: [], passengers: [], trips: []}

let driverID = 0;
class Driver{
    constructor(name){
        this.id = ++driverID
        this.name = name
        // add driver to store
        store.drivers.push(this)
    }

    passengers(){
        return store.passengers.filter(pass=>{
            return pass.trips().filter(trip =>{
                return trip.driverId === this.id
            })
        })
    }

    trips(){
        return store.trips.filter(trip =>{
            return trip.driverId === this.id
        })
    }
}

let passengerID = 0;
class Passenger{
    constructor(name){
        this.id = ++passengerID;
        this.name = name;
        // add passenger to store
        store.passengers.push(this)
    }

    drivers(){
        return store.drivers.filter(driver=>{
            return driver.trips().filter(trip=>{
                return trip.passengerId === this.id
            })
        })
    }

    trips(){
        return store.trips.filter(trip=>{
            return trip.passengerId === this.id
        })
    }
}

let tripID = 0;
class Trip{    
    constructor(driver, passenger){
        this.id = ++tripID;
        this.driverId = driver.id
        this.passengerId = passenger.id
        // add trip to store
        store.trips.push(this)
    }

    driver(){
        return store.drivers.find(driver=>{
            return driver.id === this.driverId
        })
    }

    passenger(){
        return store.passengers.find(passenger =>{
            return passenger.id === this.passengerId
        })
    }

}   