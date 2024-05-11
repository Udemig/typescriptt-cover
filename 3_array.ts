// Array Type
//* Typescriptte dizilerin tipini tanımlarken sadece bu değişken bir dizi olacak diyemiyoruz.
//* Bu dizinin içerisinde şu tipte elemanlar olacak şekilinde tanım yapabiliriz.
//* const name:string[] // string dizisi
// let users = [{ name: "Ali", year: 1999 }, "Ahmet", "Fatma"];
let users: string[] = ["Ali", "Fatma", "Ahmet"];
// users = true; hata verir

// users.push(32);
users.push("Mahmut");
// users.push(54); hata verir
console.log(users);

const ages: number[] = [123, 435, 323, 654, 2433];
console.log(ages);
const licences: boolean[] = [true, false, true, false];
console.log(licences);
/*
    ! Union Type:
    * Union type(type'ları birleştirmek) oluşturmak için pipe(|) kullanırız.Bunun anlamı "ya bu type ya da diğer type" şeklinde dönüştürülebilir.
    
*/
const lesson: (string | null)[] = ["Math", "Eng", null];

let parantezli_dizi: (string | number)[] = [];
parantezli_dizi = ["test", 15];
console.log(parantezli_dizi);
// parantezli_dizi = [true, false];
let parantezsiz_dizi: string | number[];

// parantezsiz_dizi = "test";
// console.log("parantezsiz_dizi:", parantezsiz_dizi, typeof parantezsiz_dizi);
parantezsiz_dizi = [1, 2, 3, 4, 5];
console.log("parantezsiz_dizi:", parantezsiz_dizi, typeof parantezsiz_dizi);
// parantezsiz_dizi = [12, 3, 4, 5, "test"]; hata verir
console.log("parantezsiz_dizi:", parantezsiz_dizi, typeof parantezsiz_dizi);
// parantezsiz_dizi.push("test")
