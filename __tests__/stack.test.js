import makeStack from '../src/stack.js';
import _ from 'lodash';

test('stack\'s main flow', () => {
  const stack = makeStack();

  stack.push('one');
  stack.push('two');
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
});

test('isEmpty', () => {
  const stack = makeStack();

  expect(stack.isEmpty()).toBe(true);
  stack.push('two');
  expect(stack.isEmpty()).toBe(false);
  stack.pop();
  expect(stack.isEmpty()).toBe(true);
});

test('pop in empty stack', () => {
  const stack = makeStack();
  // Вызов метода pop обёрнут в функцию
  // иначе матчер не сможет перехватить исключение
  expect(() => stack.pop()).toThrow();
});

//-----избавляемся от дублирования данных для теста-----

const coll = ['One', true, 3, 10, 'cat', {}, '', 10, false];

test ('includes', () => {
  expect(_.includes(coll,3) ).toBe(true);
  expect(_.includes(coll,11) ).toBe(false);
});

//---- инициализируем перед каждым тестом а не при объявлении

//let now = Date.now(); даст один результат для разного времени тестов

let now;

beforeEach (() => {
  now = Date.now();
});

test ('first example', () => console.log(now));
test ('second example', () => console.log(now));

//---- инициализируем перед всеми тестами одновременно а не при объявлении

let nowAll;

beforeEach (() => {
  nowAll = Date.now();
});

test ('first example', () => console.log(nowAll));
test ('second example', () => console.log(nowAll));
