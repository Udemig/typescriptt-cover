/*
 * Normalde zaten "objecy" isimli primitive type'ımız var.Fakat bu type
 * bütün objeleri tutmak için kullanılır.Genel olarak daha spesifik objelerle
 * çalışmamız gerekiyor.Bu durumda o an kullanacağımız objenin propertylerini
 * bir obje tyoe şeklinde yazabiliriz.
 */
let student1: {
  id: number;
  firstname: string;
  lastanme: string;
  gender: "erkek" | "kadın";
  city: "Antalya" | "İstanbul" | "Samsun";
};
student1 = {
  id: 5,
  firstname: "ali",
  lastanme: "yılmaz",
  city: "Antalya",
  gender: "erkek",
};

let user_4: {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    geo: {
      lat: string | number;
      lng: string | number;
    };
  };
  phone: string | null;
  website: string;
  company: {
    name: string;
    location: "Ankara" | "İstanbul";
  };
  hobbies: string[];
} = {
  id: 1,
  name: "test",
  email: "test@gmail.com",
  address: {
    city: "İstanbul",
    street: "test",
    geo: {
      lat: 10.05,
      lng: "45.5",
    },
  },
  phone: "435345345345 ",
  website: "website.com",
  company: {
    name: "test",
    location: "İstanbul",
  },
  hobbies: ["test", "saas"],
};
