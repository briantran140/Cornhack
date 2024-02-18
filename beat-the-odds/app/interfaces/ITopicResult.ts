export interface ITopicResult {
  Id: string;
  Title: string;
  Categories: string;
  ImageUrl: string;
  ImageAlt: string;
  AccessibleVersion: string;
  RelatedItems: IRelatedItems;
}

export interface IRelatedItems {
  RelatedItem: IRelatedItem[];
}

export interface IRelatedItem {
  Type: string;
  Id: string;
  Title: string;
  Url: string;
}
