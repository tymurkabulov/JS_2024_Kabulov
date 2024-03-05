    // - Знайти та вивести довижину настипних стрінгових значень
    // 'hello world', 'lorem ipsum', 'javascript is cool'

    let words = ['hello world', 'lorem ipsum', 'javascript is cool'];
    let lengthOfWords = words.map( el => console.log(el.length))

    // - Перевести до великого регістру наступні стрінгові значення
    // 'hello world', 'lorem ipsum', 'javascript is cool'

    const wordsUpperCase = words.map(el => el.toUpperCase());
    console.log(wordsUpperCase);

    // - Перевести до нижнього регістру настипні стрінгові значення
    // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

    const wordsLowerCase = words.map(el => el.toLowerCase());
    console.log(wordsLowerCase);

    // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

    let str = ' dirty string   '
    console.log(str.trim());

    // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

    let string = 'Ревуть воли як ясла повні';
    let strToArr = string => string.split(' ');
    console.log(strToArr(string));

    // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

    const numToStr = (arr) => arr.map(el => el.toString());
    console.log(numToStr([10,8,-7,55,987,-1011,0,1050,0]));

    // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    //     let nums = [11,21,3];
    // sortNums(nums,'ascending') // [3,11,21]
    // sortNums(nums,'descending') // [21,11,3]

    function sortNums(nums,direction){
        if (direction === 'ascending'){
            return nums.sort((a,b) => a - b);
        } else if (direction === 'descending'){
            return nums.sort((a,b) => b - a);
        }

    }

    console.log(sortNums([11,21,3],'ascending'));
    console.log(sortNums([11,21,3],'descending'));

    // - є масив
    // let coursesAndDurationArray = [
    //     {title: 'JavaScript Complex', monthDuration: 5},
    //     {title: 'Java Complex', monthDuration: 6},
    //     {title: 'Python Complex', monthDuration: 6},
    //     {title: 'QA Complex', monthDuration: 4},
    //     {title: 'FullStack', monthDuration: 7},
    //     {title: 'Frontend', monthDuration: 4}
    // ];
    // -- відсортувати його за спаданням за monthDuration
    // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
    // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
    // =========================

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    function sortCourses(coursesAndDurationArray){
        return coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration).filter(el => el.monthDuration > 5).map((el,index) => {
            el.id = index;
            return el;
        });
    }

    console.log(sortCourses(coursesAndDurationArray));

    //     описати колоду карт (від 6 до туза без джокерів)
    // - знайти піковий туз
    // - всі шістки
    // - всі червоні карти
    // - всі буби
    // - всі трефи від 9 та більше
    //
    // {
    //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    //     color:'', // 'red','black'
    // }
    //     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
    // {
    //     spades:[],
    //         diamonds:[],
    //     hearts:[],
    //     clubs:[]
    // }
    let deck = [];
    let suits = ['spades', 'diamonds', 'clubs', 'hearts'];
    let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    for (let suit of suits) {
        for (let value of values) {
            deck.push({
                cardSuit: suit,
                value: value,
                color: suit === 'spades' || suit === 'clubs' ? 'black' : 'red'
            });
        }
    }
    console.log(deck);
    const spadesAce = deck.find((el) => el.cardSuit === 'spades' && el.value === 'ace');
    console.log(spadesAce);
    const sixes = deck.filter((el) => el.value === '6');
    console.log(sixes);
    const allReds = deck.filter((el) => el.color === 'red');
    console.log(allReds);
    const diamonds = deck.filter((el) => el.cardSuit === 'diamonds');
    console.log(diamonds);
    const clubs = deck.filter((el) => el.cardSuit === 'clubs').slice(3, 8);
    console.log(clubs);

    const cardsBySuit = deck.reduce((acc, card) => {
        acc[card.cardSuit] = acc[card.cardSuit] || [];
        acc[card.cardSuit].push(card);
        return acc;
    }, {});
    console.log(cardsBySuit);

    //     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
    // --написати пошук всіх об'єктів, в який в modules є sass
    // --написати пошук всіх об'єктів, в який в modules є docker

    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];


    const findSass = coursesArray.filter(el => el.modules.includes('sass'));
    console.log(findSass);
    const findDocker = coursesArray.filter(el => el.modules.includes('docker'));
    console.log(findDocker);