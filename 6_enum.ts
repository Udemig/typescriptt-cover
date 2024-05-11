/*
    ! Enum:
    * Ardarda sayılabilen data gruplarına enum denir.
    * Yeni bir enum tanımlamak için `enum` keywordünü kullanırız.Sonra enuma bir isim veririz
    * ve süslü parantezler içerisine enum değerlerini ekleriz.
    * Enumlarla ilgili genel amaç sık sık değişkenlik göstermeyen dataları gruplamaktır.
*/

enum DaysEnum {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

console.log(DaysEnum[1]);
console.log(DaysEnum.Friday);

enum Month {
  Ocak,
  Şubat,
  Mart,
  Nisan,
  Mayıs,
}
console.log(Month.Nisan);

//* Enumlar unionların kullanıldığı her yerde kullanılır.
type OpeatingSystemName = "linux" | "macos" | "ios" | "windows" | "android";
let system: OpeatingSystemName = "ios";
enum OpeatingSystemName1 {
  Linux,
  MacOs,
  IOS,
  Android,
  windows,
}
console.log(OpeatingSystemName1.MacOs);
