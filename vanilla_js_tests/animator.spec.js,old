const animatorTest = (Animator) => {
  console.log(Animator)
  const obj = {
    className : 'block block_1'
  }
  const animator = new Animator(obj)
  animator.set(1)
  console.log(obj)
  animator.set(2)
  console.log(obj)

  if (obj.className === 'block block_1 state_2')
    console.log('OK')
  else
    throw 'FAIL звони Сереге'

  
}

module.exports = {
  animatorTest:animatorTest
} 