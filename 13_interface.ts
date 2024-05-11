interface IShape {
  width: number;
  height: number;
  radius?: number;

  calculateArea(): number | string;
}

const square: IShape = {
  height: 50,
  width: 50,
  calculateArea() {
    return this.height * this.width;
  },
};

interface Hayvan  {
    kanatUzunluğu:number
    ucabilirMi:boolean
}
interface Kus 