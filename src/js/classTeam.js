export class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    /// добавить персонажа.Сделать проверку и выдать ошибку, если такой существует.
    if (this.members.has(char)) {
      throw new Error('Такой класс персонажа существует'); /// ok
    }
    this.members.add(char);
  }

  addAll(...char) {
    char.forEach((value) => {
      this.members.add(value);
    });

    /// добавить произвольное количество персонажей
  }

  toArray() {
    /// Деструктуризация в массив
    const arr = [...this.members];
    return arr;
  }
}
