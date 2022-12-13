// ДЗ 19. Багатоквартирний будинок 
// Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.
// Додати можливість створювати нові будинки на певну кількість квартир.
// Не обмежувати кількість мешканців у квартирі

// Що потрібно зробити

// 1. Створити клас Людина
//     властивості 
//         імʼя
//         стать
//     методи
//         конструктор, який приймає два параметри: імʼя та стать
// 2. клас Квартира
//     властивості 
//         конструктор не потрібен
//         масив жителів, який при створенні пустий
//     методи 
//         додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів
// 3. клас Будинок 
//     властивості 
//         масив квартир, який при створенні пустий
//         максимальна кількість квартир
//     методи
//         конструктор, який приймає один параметр: максимальну кількість квартир
//         додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення

// в якості демонстраціїї створити:
//     декілька екземплярів класу Людина
//     декілька екземплярів класу Квартира
//     додадити екземпляри класу Людина до екземплярів класу Квартира
//     екземпляр класу Будинок
//     додадити екземпляри класу Квартира до екземплярів класу Будинок


class Human {
    name;
    gender;
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }
};

class Flat {
    resident = [];
    addHuman (human){
        this.resident.push(human)
    }
    logAllHuman() {
        console.log("\nApartment:\n");
        this.resident.forEach((human) => console.log(`${human.name} - ${human.gender} sex`));
      }
};

class House {
    flats = [];
    maxNumberOfApartments;
    constructor(maxNumberOfApartments) {
       this.maxNumberOfApartments = maxNumberOfApartments;
    }
    addFlat(flat) {
        if(this.flats.length < this.maxNumberOfApartments) {
            this.flats.push(flat)
         } else {
            console.log("all apartments are already occupied")
         }
      }
      logAllHuman() {
        console.log("\nAll Resident:\n");
        this.flats.forEach((flat) => flat.resident.forEach(human => console.log(`${human.name} - ${human.gender} sex`)));
      }
     logAllFlat() {
        console.log("\nHouse:\n");
        this.flats.forEach((flat) => console.log(flat.resident));
      }
};

let house = new House(2)
let flat = new Flat()
let flat1 = new Flat()
let flat2 = new Flat()
let resident = new Human("Joy", "W")
let resident1 = new Human("Don", "M")
let resident2 = new Human("Gena", "M")
let resident3 = new Human("Shakira", "W")
let resident4 = new Human("Agamemnon", "M")
flat.addHuman(resident);
flat.addHuman(resident1);
flat.addHuman(resident2);
flat1.addHuman(resident3);
flat1.addHuman(resident4);
flat2.addHuman(resident4);
flat.logAllHuman()
flat1.logAllHuman()
flat2.logAllHuman()
house.addFlat(flat)
house.addFlat(flat1)
house.addFlat(flat2)
house.logAllFlat()
house.logAllHuman()