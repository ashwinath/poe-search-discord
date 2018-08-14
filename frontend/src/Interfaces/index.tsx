interface SearchState {
  data: FormData
  selectedClassName: string;
  userInput: UserInput;
}

interface UserInput {
  name: string;
  className: string;
  baseItem: string;
  mods: string;
  requiredLevel: string;
}

interface FormData {
  classNames: string[];
  baseItems: string[];
}

interface PoeItem {
  name: string;
  className: string;
  baseItem: string;
  mods: string[];
  dropLevel: number;
  dropLevelMaximum: number;
  requiredDexterity: number
  requiredIntelligence: number;
  requiredLevel: number;
  requiredLevelBase: number;
  requiredStrength: number;
  poeNinja?: ServerPoeNinjaResponse;
}

interface ServerPoeNinjaResponse {
  chaosValue?: string;
  exaltedValue?: string;
  imageUrl: string;
  name: string;
  sparkLine?: number[];
  receive?: number;
  receiveSparkLine?: number[];
  pay?: number;
  paySparkLine?: number[];
}

interface SearchItemResult {
  success: boolean;
  data: PoeItem[];
}

interface SearchFormProps {
  onSearchFormChange: ((poeItems: PoeItem[]) => void);
}

interface MainState {
  poeItems: PoeItem[];
}

interface SearchItemsResultsProps {
  poeItems: PoeItem[];
}

interface SearchResultsState {
  poeItems: PoeItem[];
}

export {
  SearchResultsState,
  SearchItemsResultsProps,
  MainState,
  SearchFormProps,
  SearchItemResult,
  PoeItem,
  FormData,
  UserInput,
  SearchState,
};
