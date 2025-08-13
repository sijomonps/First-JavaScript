let counterElement = document.getElementById("counterValue");

function OnIncreament() {
    let prevCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(prevCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;
    
    if(counterElement.textContent>0){
        counterElement.style.color = "green";
    }
    else if(counterElement.textContent<0){
        counterElement.style.color = "red";
    }
    else {
    counterElement.style = "black";
    }
}  

function OnDecreament() {
    let prevCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(prevCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;
    
    if(counterElement.textContent>0){
        counterElement.style.color = "green";
    }
    else if(counterElement.textContent<0){
        counterElement.style.color = "red";
    }
    else {
    counterElement.style = "black";
    }
}

function OnReset() {
    counterElement.textContent = "0"
    
    counterElement.style.color = "black"
}