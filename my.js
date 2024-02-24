"use strict";

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let a = prompt("Введите обязательную статью расходов в этом месяце");
let b = prompt("Во сколько обойдется ?");
let a1 = prompt("Введите обязательную статью расходов в этом месяце");
let b1 = prompt("Во сколько обойдется ?");

let appData = {
  budget: money,
  timeData: time,
  expenses: {
    a: b,
    a1: b1,
  },
  optionalExpenses: {},
  income: [],
  savings: false,
};

alert(appData.budget / 30);
