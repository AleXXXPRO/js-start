'use strict'
// console.log("Hello world!");
// console.log('Учу JS');
// let myLifeStyle = 'freelance';
// let myName = 'Фрилансер по жизни', myAge = 43, myMessage = 'Живи, а работай в свободное время';
// myAge = 33;
// console.log(myAge);
// const BLOCK_SIZE = 25;
// const COLOR_RED = '#F00';
// const userProfile = {
//     name: 'Фрилансер',
//     age: 43,
//     massage: 'Живи...',
// }
// console.log(userProfile);
// userProfile.age = 33;
// console.log(userProfile);
// let colorEye = 'Цвет глаз';
// let user ;
// let userName = 'Вася';
// user = userName;
// console.log(user);

// ------------Repeta-----------
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);
// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);
// const result = base ** power;
// console.log(result);
// ---------------------------
// const max = 50;
// const min = 25;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);
// ----------------ok----------------
// const message = 'В этой строке 26 символов.';
// console.log(message.length)
// -------------------Конкатенация----------------
// const firstName = 'Alex';
// const lastName = 'Plas';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName)
// ------------------------------------------
// const firstName = 'Alex';
// const lastName = 'Plas';
// const room = 717;
// const type = 'VIP';
// const welcomeMsg = 'Гость' + ' ' + firstName + ' ' + lastName + ' ' + 'поселяется в ' + room + ' ' + type;
// console.log(welcomeMsg);

// ----------------------------Шаблонные строки----------------
// const quantity = 22;
// const orderMsg = `Вы заказываете ${quantity} холодильника`;
// console.log(orderMsg);

// ---------------------Нормализация---------------
// let brand = 'SamSuNg';
// brand = brand.toLowerCase();
// console.log(brand);
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);
// const inDb = 'samsung';

// ------------------Поиск в строке---------
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';
// const string1 = 'Привет, это не спам, получи миллион';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели';
// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.toLowerCase().includes(blacklistedWord2));

// ------------------------операторы сравнения---
// console.log(15 > 10);
// const isEqual = 1 === true;
// console.log(isEqual);

// const isEqual = 1 !== true;
// console.log(isEqual);
// --------------------------логические операторы-
// console.log(Boolean(0));
// console.log(5 && 6 && 'Mango');
// console.log(false || 5 || 6 || 'Mango');
// console.log(!false);

// ------------------Сравнение----------
// const x1 = 10;
// const x2 = 30;
// const number = 45;

// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);

// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);

// const res1 = number > x1 && number < x2;


// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, res1);

// const res2 = number < x1 || number > x2;

// 150 < 10 || 150 > 30
// false || true
// true

// 25 < 10 || 25 > 30
// false || false
// false
// console.log(
//   `Число ${number} попадает в отрезок до ${x1} или после ${x2}? `,
//   res2,
// );


// --------------------------Чат-----------
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат? ', canOpenChat);

// --------------------------Подписка------------
// const sub = 'pro';
// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Есть доступ к контенту? ', canAccessContent);

// --------------------------Ветвления-----------------
// if (50 > 30) {
//     console.log('x>y');
// } else {
//     console.log("x<y");
// }

// const salary = 11000;
// if (salary < 500) {
//     console.log('Level_1');
// } else if (salary > 500 && salary < 1000) {
//     console.log('Level_2');
// } else if (salary > 1000 && salary < 1500) {
//     console.log('Level_3');
// } else {
//     console.log('Level_4');
// }

// -----------------------Тернарный оператор-------
// const balance = -1000;

// 1. let message;
// if (balance >= 0) {
//     message = 'Позитивный баланс';
// } else {
//     message = 'Негативный баланс';
// }

// 2.const message = balance >= 0 ? 'Позитивный баланс' : 'Негатив';
// console.log(message);

// ----------------------Область видимости переменных------
// Глобальная область видимости:
// const b = 11;
// Блочная область видимости:
// if (true) {
//     const a = 7;
//     console.log(a);
//     console.log(b);
// }

// ---------------------------Тренировка-----------
// Скрипт обработки покупки в магазине
// let balance = 10000;
// const payment = 2000;

// ------------------Switch----------
/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */
// const stars = 7;
// let price;
// ---------------
// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// }else if (stars === 4) {
//     price = 70;
// }else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звезд нет');
// }
// ----------------
// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого количества звезд нет');
// }
// console.log(price);

// ------------------------Задача--------
/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */
// 1. сделать переменные
// const option = 1;
// let message = '';
// 2. сделать свитч 1, 2, 3
// 3. в каждлом кейсе записать мессидж в строку
// switch (option) {
//     case 1:
//         message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//         break;
//     case 2:
//         message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//         breake;
//     case 3:
//         message: 'Посылка будет отправлена сегодня';
//         breake;
//     default:
//         console.log('Вам перезвонит менеджер');
// }

// // 4. вывести результат
// console.log(message);

// -----------------------ЦЦикл Фор--------
// for (let i = 0; i < 10; i += 1){
//     console.log(i);
// }

// --------------------Задачи----
/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
// 1/-----делаем вары
// const minSalary = 500;
// const maxSalary = 2000;
// const employees = 3;
// let totalSalary = 0;
// // 2. перебираем работников
// for (let i = 1; i <= 5; i += 1){
//     // 3. сгенерить случайную ЗП
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
    // console.log(`ЗП работника номер ${i} - ${salary}`);
//     // 4. прибавить к тоталу
//     totalSalary += salary;
    
// }
// // 5. лог
// console.log('totalSalary: ', totalSalary);

// -----------------------задача----
/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */
// 1/ var
// const min = 5;
// const max = 13;
// let total = 0
// // 2/ for
// for (let i = min; i <= max; i += 1){
//     console.log(i);
//     // 3/проверяем на четность
//     // if (i % 2 === 0) {
//     //     console.log(`Четное: `, i);
//     //     total += i;
//     // }
// // -------------------от обратного
//     if (i % 2 !== 0) {
//         console.log(`Число не четное: `, i);
//         continue;
//     }
//     console.log(`четное: `, i);
//     total += i;
// // 4. пишем в сумму
// }
// console.log(`Сумма всех четных чисел: `, total);

// --------------------------------
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// -------------------------покупки в магазине-------------
/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

// let balance = 10000;
// const payment = 2000;
// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`)
// if (payment <= balance) {
//     console.log(`OK`);
//     // balance = balance - payment;
//     balance -= payment;
//     console.log(`На счету осталось ${balance} кредитов`);

// } else {
//     console.log(`На счету недостаточно средств для проведения операции!`);
// }
// console.log(`Операция завершена`);

// -----------------------------------Дискаунт----------
/*
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

// let totalSpent = 100;
// let payment = 2000;
// let discount = 0;
// if (totalSpent < 100) {
//     // discount = 0;
//     console.log(`не партнёр, скидка 0`);
// } else
// if(totalSpent >= 100 && totalSpent < 1000){
//     discount = 0.02;
//     console.log(`бронзовый партнёр, скидка 2%`);
// }
// else if (totalSpent >= 1000 && totalSpent < 5000) {
//     discount = 0.05;
//     console.log(`серебрянный партнёр, скидка 5%`);
// }
// else  {
//     discount = 0.1;
//     console.log(`золотой партрёр, скидка 10%`);
//     }
// payment -= payment * discount;
// // payment = payment - payment * discount;
// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);
// totalSpent += payment;
// console.log(`В нашем магазине вы потратили ${totalSpent}`);

// 'Бронзовый партнер, скидка 2%'
// 'Серебрянный партнер, скидка 5%'
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'

// ----------------------------------Cсылка на кнопку в штмл------
const btnAdd = document.querySelector(`button`);
const resetBtn = document.querySelector(`button[data-reset]`);
const valueInput = document.querySelector(`input[dada-value]`);
const outputEl = document.querySelector(`.js-output span`);
// console.log(outputEl);

let total = 0;

console.log(btnAdd.textContent);
btnAdd.addEventListener(`click`, function () {
    const value = Number(valueInput.value);
    console.log(`click sasa`);
    console.log(value);
    total += value;
    outputEl.textContent = total;
    console.log(`total: `, total);
    valueInput.value = ``;
    
})
resetBtn.addEventListener(`click`, function () {
    total = 0;
    outputEl.textContent = total;
});
// -------------------------------------

