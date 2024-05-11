/*
    ! Function Type:
    1-İsimli Fonksiyon
    2-İsimsiz Fonksiyon
    3-Arrow Funtion
    4-Single Line Arrow Function
    5-Immediate Call Function
*/

type ExampleFnType = (no: number) => number;

//* 1.İsimli Fonksiyon
function exampleFn() {}
//* 2.İsimsiz Fonksiyon
const exampleFn_1: ExampleFnType = function (no: number) {
  return no * 5;
};
//* 3.Arrow Function
const exampleFn_2: ExampleFnType = (no: number) => {
  return no * 10;
};
const result = exampleFn_2(7);
console.log(result);
//* 4.Single Line Function
const exampleFn_3: ExampleFnType = (no) => no * 7;

//* İki sayıyı matematiksel işlem yapabilmek için fonksiyonlar tanımlamız sağlayan fonksiyon türünü yazınız.

type BasicMathOperationFnTye = (a: number, b: number) => number;
//! Değişkenin type'ını belirttiğimiz için parametrelerin türlerini ve fonksiyonun dönüş türünü yazmamız şart değildir.
const sumOperation: BasicMathOperationFnTye = (a, b) => {
  return a + b;
};
