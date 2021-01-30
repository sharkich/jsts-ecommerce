import { BehaviorSubject } from 'rxjs';

export class AppStore {
  static isExits = false;
  static instance: AppStore;

  public $render = new BehaviorSubject(null);

  constructor() {
    if (AppStore.isExits) {
      return AppStore.instance;
    }

    AppStore.isExits = true;
    AppStore.instance = this;
  }
}

export const appStore = new AppStore();
