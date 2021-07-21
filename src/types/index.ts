export interface IData {
  center: string;
  data_created: string;
  description: string;
  ketwords: string[];
  location: string;
  nasa_id: string;
  title: string;
}

// data 안의 collection 안에 있는 애들 타입 지정
export interface IItems {
  collection: {
    items: [{ href: string; data: IData[] }];
  };
}
