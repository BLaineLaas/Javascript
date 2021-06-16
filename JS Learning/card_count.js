// function that counts cards by incrementing the global count based on the value of each card input
// if the count finishes above 0, the functions recommends to Bet, otherwise it recommends to Hold.

var count = 0;

function cc(card) {

    var new_count = 0;
    if(card >= 2 && card <= 6){
        new_count += 1;
    }

    else if(card >= 7 && card <= 9){
        new_count += 0;
    }
    else {
        new_count -= 1;
    }
    count = new_count + count;
    function bet(){
        if(count > 0){
            return count + " Bet"
        }
        else
            return count + " Hold"
    }

    return console.log(bet());
}

// Inputs to test
cc(2); cc(3); cc(7);cc('K');  cc('A');
console.log('.');
cc(10); cc("J"); cc("Q"); cc("K"); cc("A");
