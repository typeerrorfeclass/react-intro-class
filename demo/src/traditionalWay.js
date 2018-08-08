export default function traditionalWay (sel) {
  const root = document.querySelector(sel)
  const btn = root.querySelector('.j-increment')
  const input = root.querySelector('.j-input')
  const input2 = root.querySelector('.j-input2')

  let n = 0

  btn.addEventListener('click', _ => {
    input.value = ++n
    input2.value = 2 * n
  })
}
