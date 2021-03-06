import { Dispatch } from "redux";

interface SearchItemResult {
  success: boolean;
  data: PoeNinjaItem[];
}

interface SearchFormProps {
  dispatch: Dispatch;
  searchKey: string;
  activeLinksButton: string;
}

interface SearchItemsResultsProps {
  poeItems: PoeNinjaItem[];
  dispatch: Dispatch;
}

interface SearchResultsState {
  poeItems: PoeNinjaItem[];
}

interface EsItem {
  id: string; // We use the name as the primary key.
  source: string;
}

interface PoeNinjaItem extends EsItem {
  imageUrl: string;
  name: string;
  poeTradeId?: number;
  mapTier?: number;
  levelRequired?: number;
  baseType: string;
  stackSize?: number;
  prophecyText?: string;
  sparkline?: number[];
  implicit?: string[];
  explicit?: string[];
  flavourText?: string;
  corrupted?: boolean;
  gemLevel?: number;
  gemQuality?: number;
  itemType: string;
  pay?: number;
  receive?: number;
  isCurrency: boolean;
  paySparkline?: number[];
  receiveSparkline?: number[];
  chaosValue: number;
  exaltedValue: number;
  links?: number;
  artFilename?: string;
}

interface NavigationState {
  isOpen: boolean;
}

interface SearchResultListProps {
  searchResultsList: SearchResultListItem[];
}

interface SearchResultItemProps {
  data: SearchResultListItem;
  dispatch: Dispatch;
}

interface SearchResultListItem {
  id: string;
  name: string;
  imageUrl: string;
  chaosValue: number;
  source: string;
  links?: number;
  exaltedValue: number;
  baseType?: string;
  corrupted?: boolean;
  gemLevel?: number;
  gemQuality?: number;
  stackSize?: number;
  paySparkline?: number[];
  sparkline?: number[];
}

interface MiscInformationProps {
  links?: number;
  gemLevel?: number;
  gemQuality?: number;
  source: string;
  stackSize?: number;
}

interface SearchResultDetailsProps {
  item?: PoeNinjaItem;
  dispatch: Dispatch;
}

export {
  SearchResultDetailsProps,
  NavigationState,
  SearchResultsState,
  SearchItemsResultsProps,
  SearchFormProps,
  SearchItemResult,
  PoeNinjaItem,
  SearchResultListProps,
  SearchResultListItem,
  MiscInformationProps,
  SearchResultItemProps,
};
