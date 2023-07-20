import { ReactWebengage } from '../src/index'

test('reload', () => {
  expect(new ReactWebengage({licence:"licence"})).toBe(Boolean)
})