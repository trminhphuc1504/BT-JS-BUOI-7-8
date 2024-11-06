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
findPositiveMin = ()=>{
    const arr = getArray();
    const positiveNumbers = [];
    for(let num of arr){
        if(num > 0){
            positiveNumbers.push(num)
        }
    }

    if(positiveNumbers.length > 0){
        const minPositive = Math.min(...positiveNumbers);
        document.getElementById("result").innerHTML = "Số dương nhỏ nhất: " + minPositive;
    }
    else{
        document.getElementById("result").innerHTML = "Không có số dương nào trong mảng";
    }
}

//Tìm số chẵn cuối cùng trong mảng.
findLastEven = ()=>{
    const arr = getArray();
    let lastEven = -1;
    for(let num of arr){
        if(num % 2 === 0){
            lastEven = num;
        }
    }

    if(lastEven !== -1){
        document.getElementById("result").innerHTML = "Số chẵn cuối cùng: " + lastEven;
    }
    else{
        lastEven = -1;
        document.getElementById("result").innerHTML = lastEven;
    }
}

//Đổi chỗ 2 giá trị trong mảng theo vị trí
swapValues = ()=>{
    const arr = getArray();
    const index1 = parseInt(document.getElementById("index1").value);
    const index2 = parseInt(document.getElementById("index2").value);

    if(index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length){
        const temp = arr[index1]
        arr[index1] = arr[index2];
        arr[index2] = temp;
        document.getElementById("result").innerHTML = `Mảng sau khi đổi chỗ: [${arr.join(",")}]`;
    }
    else{
        document.getElementById("result").innerHTML = "Vị trí nhập không hợp lệ!";
    }
}