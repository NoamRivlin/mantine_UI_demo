export interface Product {
  id: number;
  desc: string;
  title: string;
  //image property is an object and in it we have more properties and one of them is url
  image: { url: string };
  price: number;
  link: string;
}
