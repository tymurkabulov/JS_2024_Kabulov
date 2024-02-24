`- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль`

        let newArr = [1,2,3,4,5,6,7, 'asd', 'qwe', 'zxc'];
        console.log(newArr);

`- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.`

        let book1 = {
            title: 'book1 name',
            pageCount: 500,
            genre: 'genre',
            authors:[
                {name: 'author name',
                 age: 30,
                }
            ]
        };


    let book2 = {
        title: 'book2 name',
        pageCount: 500,
        genre: 'genre',
        authors:[
            {name: 'author name',
                age: 35,
            }
        ]
    };

    let book3 = {
        title: 'book3 name',
        pageCount: 500,
        genre: 'genre',
        authors:[
            {name: 'author name',
                age: 40,
            }
        ]
    };
`- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача`

    let users = [
        {
            name: 'user1',
            username: 'user1',
            password: 'user1password'
        },
        {
            name: 'user2',
            username: 'user2',
            password: 'user2password'
        },
        {
            name: 'user3',
            username: 'user3',
            password: 'user3password'
        },
        {
            name: 'user4',
            username: 'user4',
            password: 'user4password'
        },
        {
            name: 'user5',
            username: 'user5',
            password: 'user5password'
        },
        {
            name: 'user6',
            username: 'user6',
            password: 'user6password'
        },
        {
            name: 'user7',
            username: 'user7',
            password: 'user7password'
        },
        {
            name: 'user8',
            username: 'user8',
            password: 'user8password'
        },
        {
            name: 'user9',
            username: 'user9',
            password: 'user9password'
        },
        {
            name: 'user10',
            username: 'user10',
            password: 'user10password'
        },
    ]

    console.log(users[0].password);
    console.log(users[1].password);
    console.log(users[2].password);
    console.log(users[3].password);
    console.log(users[4].password);
    console.log(users[5].password);
    console.log(users[6].password);
    console.log(users[7].password);
    console.log(users[8].password);
    console.log(users[9].password);


`Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3`
            let x = 5;
            if (x !==0) {
                console.log('true');
            } else {
                console.log('false');

            }
` - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).`
            let time = 51;
            if (time >= 0 && time < 15){
                console.log('first quarter');
            } else if (time >= 15 && time < 30) {
                console.log('second quarter');
            } else if (time >= 30 && time < 45) {
                console.log('third quarter');
            } else if (time >= 45 && time < 60) {
                console.log('fourth quarter');
            } else {
                console.log('Choose value from 0 to 59')
            }

`- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).`
            let day = 30;
            if (day >= 1 && day < 11){
                console.log('first decade');
            } else if (day >= 11 && day < 21) {
                console.log('second decade');
            } else if (day >= 21 && day < 31) {
                console.log('third decade');
            }
` Скласти розклад на тиждень за домопоги switch. 
Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).`
        let weekday = 7;
            switch (weekday){

                case 1:
                    console.log('Sunday');
                    break;

                case 2:
                    console.log('Monday');
                    break;

                case 3:
                    console.log('Tuesday');
                    break;
                case 4:
                    console.log('Wednesday');
                    break;
                case 5:
                    console.log('Thursday');
                    break;
                case 6:
                    console.log('Friday');
                    break;
                case 7:
                    console.log('Saturday');
                    break;

                default:
                    console.log('Wrong number of day');
            }
        /*`- Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.   `

                let number1 = prompt("First number:");
                let number2 = prompt("Second number:");

                if (!isNaN(number1) && !isNaN(number2)) {

                    if (number1 > number2) {
                        console.log("Max number:", number1);
                    } else if (number2 > number1) {
                        console.log("Max number:", number2);
                    } else {
                        console.log("Numbers are equal", number1);
                    }
                } else {
                    console.log("Wrong values");
                }
         */
`- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)`
        let newX;
        newX = newX || "default";
        console.log(newX);

`- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. 
За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".`

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    coursesAndDurationArray.forEach(el => {
        if (el.monthDuration > 5){
            console.log('Super');
        }
    })








