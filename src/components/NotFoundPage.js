import component from 'lib/Component'

export default component({
  tagName: 'not-found-page',

  render() {
    var {h1} = this.dom
    return h1('Not Found')
  }
})
