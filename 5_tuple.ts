/*
    ! Tuple
    * Uzunluğu sabit olan ve diziye benzeyen veri türüdür.
    * Tuple'da dizi elemanlarının her birinin türü ayrı ayrı belirlenir.
    * Bu özellik tuple'ıı dizilerden ayıran en büyük özelliktir.
    
    - Özellikler:
    * Tuple türü köşeli parantez ile başlar.
    *  Tuple kullanım amacı diziler gibi değildir.Dolayısıyla ekleme ve çıkarma yapılamaz
*/

// rgba(255,255,255,0.5)

const rgba_color: [number, number, number, number] = [100, 0, 255, 0.6];

const ip_address: [number, number, number, number] = [192, 170, 122, 132];

type PersonalType = {
  first_name: string;
  last_name: string;
  age: number;
};

let user1: PersonalType = {
  first_name: "test",
  last_name: "asd",
  age: 34,
};

type Gender = "Erkek" | "Kadın";

let gender: Gender = "Erkek";
