import * as React from '../vendor/react'
import * as ReactDOM from '../vendor/react-dom/'
import { App }  from './app';
console.log("test app injection")
ReactDOM.render(<App />, document.getElementById('root'));
console.log("test app has been injected")
