/*
    ! Opsiyonel Parametre
    * Bir parametrenin opsiyonel olduğunu göstermek için sonuna soru işareti eklenir.
    * Opsiyonel bir parametreden sonraki parametreler required(zorunlu) olamaz.
*/

function exampleFn(
  param1: number,
  param2: string,
  param4: number,
  param3?: boolean
) {
  console.log(param1);
  console.log(param2);
  console.log(param3);
}

exampleFn(56, "example", 234);
exampleFn(12, "test", 234);
