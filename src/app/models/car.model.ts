

export class Car{

   public  price   : string;
   public  rate    : string;
   public  city    : string;
   public  name    : string;
   public  number  : string;
   public  image   : string;
   public  available : Boolean;
   public  category : string;

   constructor(
                name:string,
                price:string,
                rate:string,
                city:string,
                number:string,
                image:string,
                category:string
              )
   {
        this.name = name;
        this.price = price;
        this.rate = rate;
        this.city = city;
        this.number = number;
        this.image = image;
        this.category = category;

   }
}