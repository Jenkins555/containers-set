import { Character } from '../classCharacter';
import { Team } from '../classTeam';

test('throwError', () => {
  const team = new Team();
  const warrior = new Character('Warrior');
  const mage = new Character('Mage');
  expect(() => {
    team.add(warrior);
    team.add(mage);
    team.add(mage);
  }).toThrow('Такой класс персонажа существует'); // Проверка вывода ошибки при добавлении дублей
});

test('nonDoubleAddmethod', () => {
  const team = new Team();
  const warrior = new Character('Warrior');
  const mage = new Character('Mage');
  const bowman = new Character('Bowman');
  const hunter = new Character('Hunter');
  team.addAll(warrior, mage, bowman, hunter, hunter);
  expect(team.members.size).toBe(4);
});

test('toArray', () => {
  const team = new Team();
  const warrior = new Character('Warrior');
  const mage = new Character('Mage');
  const bowman = new Character('Bowman');
  const hunter = new Character('Hunter');
  team.addAll(warrior, mage, bowman, hunter);
  expect(team.toArray()).toEqual([{ charClass: 'Warrior' }, { charClass: 'Mage' }, { charClass: 'Bowman' }, { charClass: 'Hunter' }]);
});
