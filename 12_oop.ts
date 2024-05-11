//! OOP(Object Oriented Programming)- Nesne Tabanlı Programlama
/*
     * Classlar yani nesneler hem özellikleri hemde içinde methodları barındaracak olan yapılardır.
     ! constructor(yapıcı,inşa eden) methodu:Aslında bir fonksiyon 
     * Bir objenin propertlerini(özelliklerini) başlatmak için kullanılır.
     * constructor methodu "new" operatörü tarafından bir kez çağrılır ve sonra asla çağrılmaz.
 */
class Ev {
  // özelliklerimiz
  _odaSayisi: number;
  _pencereSayisi: number;
  _kat: number;
  // kurucu method
  constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
    this._odaSayisi = odaSayisi;
    this._pencereSayisi = pencereSayisi;
    this._kat = kat;
  }
  // method
  yemekYe(sayi: number) {
    console.log(sayi);
    console.log(this._kat + "katlı evde yemek yenildi.");
  }
}
let ev = new Ev(5, 10, 2);
console.log(ev._odaSayisi);
ev.yemekYe(2);

class Person {
  firstname: string;
  lastname: string;
  age: number;

  constructor(firstName: string, y: string, age: number) {
    this.firstname = firstName;
    this.lastname = y;
    this.age = age;
  }

  getFullName(): string {
    return ` ${this.firstname} ${this.lastname} `;
  }
  getAge(): number {
    return this.age;
  }
}

const user = new Person("Alperen", "Küçükdağ", 33);
console.log(user.getFullName());
console.log(user.getAge());

class ExampleClass {
  prop1?: string;
  prop2?: number;

  method1() {
    console.log(this.prop1);
  }
  method2() {
    console.log(this.prop2);
  }
}
class ChildrenClass extends ExampleClass {}
