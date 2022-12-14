// ДЗ 20. Створюємо сутності

// Створити сутність людини:
// імʼя
// вік
// Метод виведення даних
// Створити сутність автомобіля:
// Характеристики автомобіля окремими властивостями
// Методи:
// Виведення на екран даних про цей автомобіль
// Привласнення цього автомобіля власнику (записати в автомобіль обʼєкт власника)

// Що потрібно зробити

// 1. Створити клас Людина
//     властивості 
//         імʼя
//         вік
//     методи
//         конструктор, який приймає два параметри: імʼя та вік
//         метод, який виводить у консоль інформацію про людину
// 2. клас Автомобіль
//     властивості 
//         марка, модель, рік виписку, номерний знак (або на Ваш розсуд)
//         власник
//     методи 
//         конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
//         присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
//         метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника


// в якості демонстраціїї створити:
//     декілька екземплярів класу Людина
//     декілька екземплярів класу Автомобіль
//     присвоїти власників автомобілям

class Human {
    name;
    age;
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    showHuman() {
        return `
        name: ${this.name}
        age: ${this.age} `
    }
 }

 class Car{
    brand;
    model;
    color;
    year;
    number;
    owner;
    constructor(brand, model, color, year, number) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.number = number;
    }

    addOwner(human) {
        if (human.age < 18) {
            console.warn("go back to your mommy because you are not yet 18 years old ")
            return;
        }
        this.owner = human;
    }
    
    showCar() {
        console.log(`
        name of car: ${this.brand}
        model: ${this.model}
        color: ${this.color}
        year: ${this.year}
        number: ${this.number}
        Owner: ${this.owner ? this.owner.showHuman() : ""}`)
    }
 }

 let car = new Car("audi", "tt", "orang", 2005, "BN1234WQ");
 let human = new Human("Maksym Ogli",33);
 car.addOwner(human);
 car.showCar()
 
 let car1 = new Car("Dacha", "Rogata", "blue", 2010, "AB1234CD");
 let human1 = new Human("Je'yn Horvat",42);
 car1.addOwner(human1);
 car1.showCar()

 let car2 = new Car("Pagani", "Zonda", "red", 2022, "XC3456MK");
 let human2 = new Human("Farhat Abdula",12);
 car2.addOwner(human2);
 car2.showCar()