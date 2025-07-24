// Данные уровней
const Levels = {
  // Уровень 1 — пока заполнено лишь пару примеров, повторите для всех блоков из скрина:
  1: [
    { x:  80, y: 100, width: 80, height: 40, hits: 1, minutes: 60 },
    { x: 170, y: 100, width: 80, height: 40, hits: 2, minutes: 90 },
    // … TODO: скопировать все блоки из вашего календаря
  ],

  // Генерация случайного уровня (2+)
  random(levelNum) {
    const cols = 7, rows = 5;
    const blockW = canvas.width / cols, blockH = 30;
    const blocks = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // случайная длительность: 30–300 мин
        const minutes = 30 + Math.floor(Math.random() * 270);
        let hits = minutes <= 60 ? 1
                 : minutes <= 120 ? 2
                 : minutes <= 24*60 ? 3 : 4;
        blocks.push({
          x: c * blockW + 5,
          y: 100 + r * (blockH + 5),
          width: blockW - 10,
          height: blockH,
          hits,
          minutes
        });
      }
    }
    return blocks;
  }
};
