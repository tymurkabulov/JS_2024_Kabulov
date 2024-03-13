
    // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
    // створити пустий масив, наповнити його 10 об'єктами new User(....)

    function User(id, name, surname, email, phone){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

    let users = [];
    for (let i = 0;i < 10;i++){
        users.push(new User(i,`Name${i}`, `Surname${i}`,`Email${i}@gmail.com`, `+12345${i}`));
    }
    console.log(users);

    // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    let evenObj = users.filter(el => el.id % 2 === 0);
    console.log(evenObj);

    // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

    let ascSort = users.sort((a,b) => a.id - b.id);
    console.log(ascSort);

    // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
    // створити пустий масив, наповнити його 10 об'єктами Client

    function Client(id, name, surname , email, phone, order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

    let clients = [];
    for (let i = 0;i < 10;i++){
        let orderCount = Math.floor(Math.random()*20);
        let order = Array.from({ length: orderCount }, (_, index) => `Order #${index + 1}`);
        clients.push(new Client(i,`Name ${i}`, `Surname ${i}`,`Email${i}@gmail.com`, `+12345${i}`, order));
    }
    console.log(clients);

    // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

    let sortOrders = clients.sort((a,b) => a.order.length - b.order.length);
    console.log(sortOrders);

    // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    function Car(model,manufacturer, releaseYear, maxSpeed , engineVol){
        this.model = model;
        this.manufacturer = manufacturer;
        this.releaseYear = releaseYear;
        this.maxSpeed = maxSpeed;
        this.engineVol = engineVol;
        this.drive = function (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`)
        };
        this.info = function (){
            for (let key in this){
                if (typeof this[key] != 'function'){
                    console.log(`${key} - ${this[key]}`)
                }
            }
        };
        this.increaseMaxSpeed = function (newSpeed){
            this.maxSpeed += newSpeed;
        };
        this.changeYear = function (newValue){
            this.releaseYear = newValue;
        };
        this.addDriver = function (driver){
            this.driver = driver;
        };
    }

    let newCar = new Car ('Charger', 'Dodge', 2024, 300, 8);
    newCar.drive();
    newCar.info();
    newCar.increaseMaxSpeed(50);
    newCar.changeYear(2021);
    newCar.addDriver({ name: 'John Doe', age: 30 });
    newCar.info();

    class classCar {
        constructor(model, manufacturer, releaseYear, maxSpeed, engineVol) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.releaseYear = releaseYear;
            this.maxSpeed = maxSpeed;
            this.engineVol = engineVol;
        }
        drive() {
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        info(){
            for (let key in this){
                if (typeof this[key] != 'function'){
                    console.log(`${key} - ${this[key]}`)
                }
            }
        };
        increaseMaxSpeed(newSpeed) {
            this.maxSpeed += newSpeed;
        }

        changeYear(newYear) {
            this.year = newYear;
        }

        addDriver(driver) {
            this.driver = driver;
        }
    }

    let newCar1 = new classCar ('Charger', 'Dodge', 2024, 300, 8);
    newCar.drive();
    newCar.info();
    newCar.increaseMaxSpeed(50);
    newCar.changeYear(2021);
    newCar.addDriver({ name: 'John Doe', age: 30 });
    newCar.info();


    class Cinderella{
        constructor(name, age, feetSize) {
            this.name = name;
            this.age = age;
            this.feetSize = feetSize;
        }
    }

    let cinderellas = [];
    for (let i = 0;i < 10;i++){
        cinderellas.push(new Cinderella(`Name ${i}`, i+20, i + 25));
    }
    console.log(cinderellas);

    class Prince{
        constructor(name, age, shoeSize) {
            this.name = 'name';
            this.age = age;
            this.shoeSize = shoeSize;
        }
    }

    let newPrince = new Prince(`Name`, 30, 30);
    console.log(newPrince);

    for (let i = 0; i < cinderellas.length;i++){
        if (newPrince.shoeSize === cinderellas[i].feetSize){
            console.log(`Cinderella #${i} is who we are looking for`);
        }
    }

    let findCinderella = cinderellas.find(el => el.feetSize === newPrince.shoeSize);
    console.log(findCinderella);





