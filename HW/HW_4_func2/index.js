    //- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б`

    const areaOfRectangle = (a,b) => `Area of rectangle: ${a * b}`;
    console.log(areaOfRectangle(4, 2));

    //  - створити функцію яка обчислює та повертає площу кола з радіусом r`

    const areaOfCircle = (r) => `Area of circle: ${3.14 * Math.pow(r,2)}`
    console.log(areaOfCircle(2));

    //  - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r`

    const areaOfCylinder = (r,h) => `Area of cylinder: ${2 * 3.14 * r * h}`;
    console.log(areaOfCylinder(2,2));

    //  - створити функцію яка приймає масив та виводить кожен його елемент`

    const logArray = (arr) => {
        for (let i = 0; i < arr.length;i++){
            console.log(arr[i]);
        }
    }

   logArray([1, 2, 3, 4, 5, 'asd', 'qwe', 'zxc']);

    //  - створити функцію яка повертає найменьше число з масиву`

    let numArr = [12, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const minValue = (numArr) => Math.min(...numArr);
    console.log(minValue(numArr));

    //  - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13`

    const sumArr = (numArr) => {
        let sum = 0;
        for (let i = 0;i < numArr.length;i++){
            sum += numArr[i]
        }
        return sum;
    }
    console.log(sumArr(numArr));

    //  - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відаовідних індексах
    //  Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

    let arr2 = [11,22,33,44];
    let index1 = 0;
    let index2 = 1;
    const swap = (arr2,index1,index2) => {
        let x = arr2[index1];
        arr2[index1] = arr2[index2];
        arr2[index2] = x;
        return arr2;
    }
    console.log(swap(arr2,index1,index2));

    //  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
    //  Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250`

    let sumUAH = 10000;
    let currencyValues = [{currency:'USD',value:40},{currency:'EUR',value:42}];
    let exchangeValues = 'USD';

    const exchange = (sumUAH, currencyValues, exchangeValues) => {
        let result = 0;
        let isValid = false;
        for (let i = 0;i < currencyValues.length;i++){
            if (exchangeValues === currencyValues[i].currency){
                result = sumUAH / currencyValues[i].value;
                isValid = true;
            }
        }
        if (!isValid){
            return 'Wrong input data';
        }
        return `Your exchanged amount is ${result} ${exchangeValues}.`;

    }

    console.log(exchange(sumUAH, currencyValues, exchangeValues));

