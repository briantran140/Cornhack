import axios, { AxiosResponse } from "axios";
import { ITopicSearch } from "../interfaces/ITopicSearch";

const instance = axios.create({
  baseURL: "https://health.gov/myhealthfinder/api/v3",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchTopics = async (
  params: ITopicSearch
): Promise<Array<any>> => {
  try {
    const response: AxiosResponse = await instance.get("/topicsearch.json", {
      params,
    });

    return response.data.Result.Resources.Resource;
  } catch (e: any) {
    throw new Error(`Error: fetchTopic error: ${e.message}`);
  }
};

export const fetchHealthFinder = async (
  params: IMyHealthFinder
): Promise<Array<any>> => {
  try {
    const response: AxiosResponse = await instance.get("/myhealthfinder.json", {
      params,
    });
    return response.data.Result;
  } catch (e: any) {
    throw new Error(`Error: fetchHealthFinder error: ${e.message}`);
  }
};

export const fetchItemList = async (params: IItemList): Promise<Array<any>> => {
  try {
    const response: AxiosResponse = await instance.get("/itemlist.json", {
      params,
    });
    return response.data.Result.Items.Item;
  } catch (e: any) {
    throw new Error(`Error: fetchItemList error: ${e.message}`);
  }
};
