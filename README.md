# react-file-loader
> Vue-style .react files (Proof of concept)

Transform this (`app.react`/`app.rjs`):

```vue
<script>
import React from 'react'

export class App extends React.Component {
  state = {count: 0}
  render() {
    return <button className="btn" onClick={this.onClick}>+ {this.state.count}</button>
  }
  onClick = () => {
    this.setState({count: this.state.count + 1})
  }
}
</script>

<style>
.btn {
  border: none;
  border-radius: 0;
  background-color: blue;
  font-size: 2rem;
  color: white;
}
</style>
```

Into this (essentially):

```javascript
import React from 'react'

export class App extends React.Component {
  state = {count: 0}
  render() {
    return <button className="btn" onClick={this.onClick}>+ {this.state.count}</button>
  }
  onClick = () => {
    this.setState({count: this.state.count + 1})
  }
}

injectCSS(`
  .btn {
    border: none;
    border-radius: 0;
    background-color: blue;
    font-size: 2rem;
    color: white;
  }
`)
```

## Goals

- [x] Same development experience as using `component.js` + `component.css`
- [x] Play nicely with your existing JS loaders
- [ ] Opt-in CSS modules

## Problems

- [ ] Can't use `<style>` inside `<script>`. Need to use a real HTML parser. Look at how vue does it
- [ ] Old styles persist when hot loading
