import sortCharactersByHealth from '../healthbars.js';

test('testing characters sort function', () => {
  const inputValue = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  const expectedValue = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
  const outputValue = sortCharactersByHealth(inputValue);
  expect(outputValue).toEqual(expectedValue);
});