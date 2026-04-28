import type { StackScreenProps } from '@react-navigation/stack';

export type TeadsConfig = {
  pid: string;
  url: string;
};

export type FeedConfig = {
  widgetId: string;
  articleUrl: string;
};

export type RootStackParamList = {
  ConfigScreen: undefined;
  ArticlePage: {
    teadsConfig?: TeadsConfig;
    feedConfig?: FeedConfig;
  };
  HelloPage: undefined;
};

export type ConfigScreenProps = StackScreenProps<
  RootStackParamList,
  'ConfigScreen'
>;

export type ArticlePageProps = StackScreenProps<
  RootStackParamList,
  'ArticlePage'
>;

export type HelloPageProps = StackScreenProps<RootStackParamList, 'HelloPage'>;
