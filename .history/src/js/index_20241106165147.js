getArray = ()=>{
    const input = document.getElementById("inputArray").value;
    return input.split(",").map(Number);
}