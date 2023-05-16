let arr = [2,1,2,3,1];

let currentPosition =1;
let destination = arr.length;
let reqFuel = destination-currentPosition;
let numOfPlanes = [];

//condition - when current airport is not the destination airport
while( currentPosition < destination){
    debugger

    
    // available fuel units at current airport
    let fuelAvailable = arr[currentPosition-1];
    
    // if fuel at current airport is zero than we cannot move further and cannot reach the destination
    if(currentPosition === 1 && fuelAvailable === 0){
        console.log(-1);
        break;
    }
    
    // if fuel at first airport is 1 unit than we can only move to tne next airport hence updating current postion to next position.
    if( currentPosition === 1 && fuelAvailable === 1){
        //updating current position
        currentPosition++;

        //updating reqFuel value
        reqFuel--;

        //adding value to the hired planes array
        numOfPlanes.push(1);
        continue;

    }

    //condition - if fuel units available at the airport is less than or more than the required fuel units
    
    // if fuel units availabe at the airport is more than the required fuel units that means with this plane we can reach the destination hence we hire this plane
    if(fuelAvailable >= reqFuel)
    {
        numOfPlanes.push(fuelAvailable);
        numOfPlanes.push(arr[destination-1]);
        currentPosition = destination;
        break;
    }

    // if fuel units available at the airport is less than the required fuel units

    // calculating the new position the max fuel available at the current airport
    let newPosition = (currentPosition + fuelAvailable)

    //checking max distance can be covered or not with the available fuel units between current position and new position.

    //we will check fuel units at all the airports between current position and new position hence new position cannot be less than or equal to current position
    while (newPosition > currentPosition){

        //if fuel unit is zero at the new position, we check fuel at previous airport.
        if(arr[newPosition-1] === 0){
            newPosition--;
            continue;
        }

        //checking if fuel at new position is sufficient to reach the destination.

        //if fuel is equal of more than required fuel
        if((newPosition + arr[newPosition-1]) >= destination)
        {

            //we hire plane at current position
            numOfPlanes.push(arr[currentPosition-1]);

            //we hire the plane at new position
            numOfPlanes.push(arr[newPosition-1]);
            
            //Also hire the plane at last airport
            numOfPlanes.push(arr[destination-1]);

            //updating current position to destination
            currentPosition = destination;
        }
        // if fuel is less than the required fuel
        else 
        {
            newPosition--;

        }
    }
}

console.log(numOfPlanes);
