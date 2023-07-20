import { ReactWebengage } from '../src/index'

test('init', () => {
  const reactWebengage = new ReactWebengage({ licence: 'licence' })
  reactWebengage.init()
  expect(window.webengage).toBeDefined()
})
