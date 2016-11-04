import { observable } from 'mobx';

class AppState {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }

  add100(){
    this.timer += 100;
  }
}

export default AppState;
