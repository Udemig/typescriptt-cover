/*
    ! Any:
    * Bir değişkene farklı türlerde değerler atanabilmesini istediğimiz
    * zaman bu değişkenin türünü `any` olarak set etmeliyiz.Bu durumda 
    * bu değişken javascriptteymiş gibi davranır ve bu değişken için otomatik 
    * tamamlama özelliği iptal olur.
*/

let foo: any = {
  id: 1,
  name: "test",
};

// foo = "test";
// foo = 15;
// foo = true;
console.log(foo);

foo = undefined;
foo = null;
foo = {
  id: 1,
};

/*
    ! Void:
    * Bir fonksiyondan değer dönmediği durumda o fonksiyonun dönüş türü olarak `void` set edilir.
    * Bu şartı belirttiğimizde artık o fonksiyon içerisinde return ifadesini kullanamayız.
*/

// Bir fonksiyonun dönüş türünü belirleyebiliyoruz.
function printLog(param: string): number {
  console.log("param", param);
  return 234234;
}
printLog("test");

function examleFunction(param: number): void {
  console.log("param", param);
  //   return 432234 hata verir
}
