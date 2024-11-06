getArray = ()=>{
    const input = document.getElementById("inputArray").value;
    return input.split(",").map(Number);
}


// Tính tổng các số dương trong mảng
sumPositive = ()=>{
    const arr = getArray();
    const sum = arr.filter(num => num > 0).reduce((acc,num) => acc + num,0)
    document.getElementById("result").innerHTML = "Tổng các số dương: " + sum;
}