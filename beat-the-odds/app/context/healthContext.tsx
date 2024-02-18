"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  fetchHealthFinder,
  fetchItemList,
  fetchTopics,
} from "../api/healthGovApi";
import { ITopicSearch } from "../interfaces/ITopicSearch";
import { ITopicResult } from "../interfaces/ITopicResult";

export type HealthContextProps = {
  topics: Array<ITopicResult>;
  myHealthFinder: Array<any>;
  itemList: Array<any>;
};

const HealthContext = createContext<HealthContextProps>({
  topics: [],
  myHealthFinder: [],
  itemList: [],
});

export function HealthProvider({ children }: PropsWithChildren) {
  const [topics, setTopics] = useState<Array<ITopicResult>>([]);
  const [myHealthFinder, setMyHealthFinder] = useState<Array<any>>([]);
  const [itemList, setItemList] = useState<Array<any>>([]);
  const [topicParams, setTopicParams] = useState<ITopicSearch>({});
  const [myHealthFinderParams, setMyHealthFinderParams] =
    useState<IMyHealthFinder>({ age: null, sex: null });
  const [itemListParams, setItemListParams] = useState<ITopicSearch>({});
  useEffect(() => {
    fetchTopics(topicParams).then((result: React.SetStateAction<any[]>) => {
      setTopics(result);
    });

    fetchHealthFinder(myHealthFinderParams).then(
      (result: React.SetStateAction<any[]>) => {
        setMyHealthFinder(result);
      }
    );
    fetchItemList(itemListParams).then(
      (result: React.SetStateAction<any[]>) => {
        setItemList(result);
      }
    );
  }, []);
  return (
    <HealthContext.Provider
      value={{
        topics,
        myHealthFinder,
        itemList,
      }}
    >
      {children}
    </HealthContext.Provider>
  );
}

export const useHealthContext = (): HealthContextProps => {
  const context = useContext<HealthContextProps>(HealthContext);
  if (context === undefined) {
    throw new Error("Error: useHealthContext error.");
  }

  return context;
};

export default HealthContext;
