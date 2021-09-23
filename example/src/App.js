import React, {useState} from 'react'

import { CSSBuilder } from 'css-builder'
import 'css-builder/dist/index.css'


const App = () => {
  const [val, setVal] = useState({border:'1px'});

  return (
  <div className="page-top">
    <div class="header">
      <a class="logo" href=".page-top">React CSS Builder</a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li><a href="https://www.npmjs.com/package/react-ui-css-builder" target="_blank" class="link link-theme link-arrow">NPM</a></li>
        <li><a href="https://github.com/koustov/css-builder" target="_blank" class="link link-theme link-arrow">Git</a></li>
        <li><a href="https://github.com/koustov/css-builder" target="_blank" class="link link-theme link-arrow">Star</a></li>
      </ul>
    </div>

  <div className="wrapper main">
    
    <div className="config">
      <div style={{border: "1px solid #cdcdcd", display:"flex", flexDirection:'column', height: '100%'}}>
        <div style={{padding: "1rem", height: '100px'}}>
  <h4>Styling Area</h4>
  <pre>Currently completed only attributes starts with "a","c" and "d"</pre>
        </div>

        <div style={{padding: '1rem', flex: 1, overflow:"hidden"}}><CSSBuilder inline onChange={(v) => {setVal(v)}}/></div></div>
      </div>
      
  <div className="live-demo">
  <div style={{border: "1px solid #cdcdcd", display:"flex", flexDirection:'column', height: '100%'}}>
  <div style={{padding: "1rem"}}>
  <h4>Rendering Area</h4>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem'}}>
           <pre>
        {JSON.stringify(val, null, 2)}
      </pre>
    <fieldset className="outer">
      <legend>Outer box</legend>
      <div style={{flex:1, height: "200px",width: "400px", display: "flex"}}>
    <fieldset className="target" style={val}>
      <legend>Target Box</legend>
    <fieldset className="inner">
      <legend>Inner Box</legend>
      <input type="text" placeholder="[sample input]"/>
      </fieldset>
      </fieldset>
      </div>
      </fieldset>
    </div>
    
    
      </div>
        </div>
    </div>
 
    
  </div>
  )
}

export default App
