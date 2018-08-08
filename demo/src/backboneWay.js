class Model {
  get n () {
    return this.n_
  }

  set n (val) {
    if (val === this.n) {
      return
    }

    this.n_ = val

    this.context.triggerChangeEvent({
      n: this.n
    })
  }

  constructor () {
    this.n_ = 0
  }

  setContext (ctx) {
    this.context = ctx
  }

  increment () {
    this.n += 1
  }

  decrement () {
    this.n -= 1
  }
}

class Controller {
  constructor (model, view) {
    this.model = model
    this.view = view

    model.setContext(this)
    view.setContext(this)
  }

  initialize () {
    const n = this.model.n
    this.view.render(n)
  }

  triggerChangeEvent (evt) {
    this.view.render(evt.n)
  }

  triggerViewIncrement () {
    this.model.increment()
  }

  triggerViewDecrement () {
    this.model.decrement()
  }
}

class View {
  constructor (sel) {
    const root = document.querySelector(sel)
    const btnInc = root.querySelector('.j-increment')
    const btnDec = root.querySelector('.j-decrement')
    this.inputWrap = root.querySelector('.j-inputs-wrap')

    btnInc.addEventListener('click', this.onIncClick.bind(this))
    btnDec.addEventListener('click', this.onDecClick.bind(this))
  }

  setContext (ctx) {
    this.context = ctx
  }

  onIncClick () {
    this.context.triggerViewIncrement()
  }

  onDecClick () {
    this.context.triggerViewDecrement()
  }

  render (n) {
    this.inputWrap.innerHTML = `
      <input type="text" value=${n} />
      <input type="text" value=${2 * n} />
    `
  }
}

export default function backboneWay (sel) {
  const model = new Model()
  const view = new View(sel)
  const controller = new Controller(model, view)

  controller.initialize()
}
