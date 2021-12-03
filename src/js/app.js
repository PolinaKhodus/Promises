import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  Document.getElementsByTagName('body')[0].innerHTML += `
  ${saving.userInfo.name}
  `;
}, (error) => {
  Document.getElementsByTagName('body')[0].innerHTML += `ERROR: ${error}`;
});
