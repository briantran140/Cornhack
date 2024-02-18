import { SetStateAction } from "react";

export interface ITopicSearch {
  lang?: string;
  topicId?: SetStateAction<string>;
  categoryId?: SetStateAction<string>;
  keyword?: string;
}
