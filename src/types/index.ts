export interface IData {
  center: string;
  date_created: string;
  description: string;
  ketwords: string[];
  location: string;
  nasa_id: string;
  title: string;
}

export interface linkData {
  href: string;
}

// data 안의 collection 안에 있는 애들 타입 지정
export interface IItems {
  collection: {
    items: ArrayItems[];
  };
}

export interface ArrayItems {
  href: string;
  data: IData[];
  links: linkData[];
}
