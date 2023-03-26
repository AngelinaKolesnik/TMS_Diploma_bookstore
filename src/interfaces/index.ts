export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export type BookInfo = Omit<IBook, 'subtitle' | 'url'> 
