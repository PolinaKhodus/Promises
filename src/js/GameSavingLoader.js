import GameSaving from './GameSaving';
import read from './reader';
import json from './parser';

class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      let parsedData;
      read().then((data) => json(data)).then((value) => {
        parsedData = value;
        resolve(new GameSaving(parsedData));
      });
    });
  }
}

export default GameSavingLoader;
