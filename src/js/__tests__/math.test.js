import { Daemon } from '../math'
import { Magician } from '../math'
import MathChar from '../math'

test('should atack', () => {
  const mathChar = new MathChar()
  mathChar.distance = 0
  mathChar.getAttack()
  expect(mathChar.attack).toBe(100)
})

test('should -10% actack because distance', () => {
  const mathChar = new MathChar()
  mathChar.distance = 2
  mathChar.getAttack()
  expect(mathChar.attack).toBe(90)
})

test('should atack >= 0', () => {
  const mathChar = new MathChar()
  mathChar.attack = -3
  mathChar.getAttack()
  expect(mathChar.attack).toBe(0)
})

test('should -actack because lock', () => {
  const mathChar = new MathChar()
  mathChar.lock = true
  mathChar.distance = 2
  mathChar.getAttack()
  expect(mathChar.attack).toBe(85)
})

test('should actack 1', () => {
  const mathChar = new MathChar()
  mathChar.setAttack(1)
  expect(mathChar.attack).toBe(1)
})

test('should return lock', () => {
  const mathChar = new MathChar()
  expect(mathChar.getStoned()).toBe(false)
  mathChar.setStoned(true)
  expect(mathChar.getStoned()).toBe(true)
})

test('should Deamon', () => {
  const mathChar = new Daemon("Ilya")
  expect(mathChar).toEqual({
    name: "Ilya",
    distance: 1,
    lock: false,
    attack: 100,
    type: "Daemon",
  })
})

test('should Magician', () => {
  const mathChar = new Magician("Ilya")
  expect(mathChar).toEqual({
    name: "Ilya",
    distance: 1,
    lock: false,
    attack: 100,
    type: "Magician",
  })
})
