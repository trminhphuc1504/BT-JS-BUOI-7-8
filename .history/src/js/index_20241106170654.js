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

// Đếm số lượng các số dương

countPositive = ()=>{
    const arr = getArray();
    const count = arr.filter(num => num > 0).length;
    document.getElementById("result").innerHTML = "Số lượng số dương: " + count;
}

// Tìm số nhỏ nhất trong mảng

findMin = ()=>{
    const arr = getArray();
    const min = Math.min(...arr); // bien mang thanh cac tung so ring le va tim gia tri nho nhat [2,3,4] => 2,3,4
    document.getElementById("result").innerHTML = "Số nhỏ nhất: " + min;
}


// Tìm số nhỏ nhất trong mảng
