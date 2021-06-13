const pencil = 15.678;
const paints = 123.965;
const pen = 90.2345;
const customerMoney = 500;
const highestPrice = Math.max(pencil, paints, pen);
let minPrice = Math.min(pencil, paints, pen);
let sumAllthings = pencil + paints + pen;
let integSum = Math.trunc(pencil) + Math.trunc(paints) + Math.trunc(pen);
let roundedSum = 100 * Math.round(sumAllthings / 100);
let roundingSumResult = integSum % 2 == 0;
let restAfterPayment = customerMoney - sumAllthings;
let averageAmount = sumAllthings / 3;
let discount = Math.floor(Math.random() * 60) + 10;
let priceDiscount = (sumAllthings - discount).toFixed();
const profit = (sumAllthings / 2 - discount).toFixed();

console.log(`
Максимальна ціна: ${highestPrice} грн.
Мінімальна ціна: ${minPrice} грн.
Вартість всіх товарів: ${sumAllthings} грн.
Сума округлених (в меншу сторону) цін: ${integSum} грн.
Сума товарів округлена до сотень: ${roundedSum}
Сума всіх товарів (округлена в меншу сторону) є парним числом: ${roundingSumResult}
Решта від 500грн становить: ${+restAfterPayment.toFixed(2)} грн.
Середня ціна: ${+averageAmount.toFixed(2)} грн.
Сумма знижки: ${discount} грн.
Ціна зі знижкою: ${priceDiscount} грн.
Сума прибутку із урахуванням знижки: ${profit} грн.`);
