export type SortType = 'LOW' | 'HIGH'
export type currencyType = 'USD' | 'EUR'
export type ActionType = "SET_MAIN_STATE"

export interface Action {
  type: ActionType;
  payload: Partial<MainReducerState>
}

export interface ICartItem {
  id: number;
  quanity: number;
}

export interface IProduct {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly price: string;
  readonly imageuRL: string;

}

export interface MainReducerState {
  loading: boolean;
  products: IProduct[];
  searchString?: string;
  sortBy: SortType;
  currency: currencyType;
  cart: ICartItem[];
}


