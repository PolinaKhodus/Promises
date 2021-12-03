class GameSaving {
  constructor(data) {
    const saving = JSON.parse(data);
    this.id = saving.id;
    this.created = saving.created;
    this.userInfo = {
      id: saving.userInfo.id,
      name: saving.userInfo.name,
      level: saving.userInfo.level,
      points: saving.userInfo.points,
    };
  }
}

export default GameSaving;
