export type SortType = 'LOW' | 'HIGH'
export type CurrencyType = 'USD' | 'EUR'
export type ActionType = "SET_MAIN_STATE"

export interface Action {
  type: ActionType;
  payload: Partial<MainReducerState>
}

export interface CartItem {
  id: number;
  quanity: number;
}

export interface Product {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly price: string;
  readonly imageUrl: string;

}

export interface MainReducerState {
  loading: boolean;
  products: Product[];
  searchString?: string;
  sortBy: SortType;
  currency: CurrencyType;
  cart: CartItem[];
}


