import { BehaviorSubject } from 'rxjs';
import { State } from './State';

const DEFAULT_STATE: State = {
  cart: {
    products: {},
  },
  products: [],
};

export class AppStore {
  static isExits = false;
  static instance: AppStore;

  private state = DEFAULT_STATE;
  public $state = new BehaviorSubject<State>(this.state);

  constructor() {
    if (AppStore.isExits) {
      return AppStore.instance;
    }

    AppStore.isExits = true;
    AppStore.instance = this;

    this.$state.subscribe((state) => {
      this.state = state;
    });
  }

  update(state: Partial<State> = {}) {
    this.$state.next({
      ...this.state,
      ...state,
    });
  }
}

export const appStore = new AppStore();
