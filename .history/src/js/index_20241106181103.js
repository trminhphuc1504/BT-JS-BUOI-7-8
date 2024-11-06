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

//Sắp xếp mảng theo thứ tự tăng dần.
sortArrayAscending = ()=>{
    const arr = getArray();

    arr.sort((a,b) => a - b); //truyen vao 2 gia tri a,b khi a-b < 0 thi a dung trc b, khi a-b > 0 thi b dung trc a,a-b = 0 k thay doi vi tri

    document.getElementById("result").innerHTML = "Mảng sau khi sắp xếp: [" + arr.join(", ") + "]";
}

//Tìm số nguyên tố đầu tiên trong mảng. 
// Kiểm tra số nguyên tố
isPrime = (num) =>{
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num);i++){
        if(num % i === 0) return false;
    }
    return true;
}



findFirstPrime = ()=>{
    const arr = getArray();
    for(let num of arr){
        if(isPrime(num)){
            document.getElementById("result").innerHTML = "Số nguyên tố đầu tiên: " + num;
            return;
        }
    }
    document.getElementById("result").innerHTML = "-1";
}

//Đếm số lượng số nguyên trong mảng số thực
countIntegers = () =>{
    const arr = getArray();
    let count = 0;
    for(let num of arr){
        if(Number.isInteger(num)){
            count++;
        }
    }
    document.getElementById("result").innerHTML = "Số lượng số nguyên: " + count;
}


//compare positive and negative numbers
comparePositiveAndNegative= ()=>{
    const arr = getArray();

    let countPositive = 0;
    let countNegative = 0;
    for(let num of arr){
        if(num > 0){
            countPositive++;
        }
        else if(num < 0){
            countNegative++;
        }
    }
    if(countPositive > countNegative){
        document.getElementById("result").innerHTML = "Số dương > Số âm";
    }else if(countPositive < countNegative){
        document.getElementById("result").innerHTML = "Số dương < Số âm";
    }else(countPositive === countNegative){
        document.getElementById("result").innerHTML = "Số dương = Số âm";
    }
}