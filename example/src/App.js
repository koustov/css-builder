import React, {useState} from 'react'

import { CSSBuilder } from 'css-builder'
import 'css-builder/dist/index.css'


const App = () => {
  const [val, setVal] = useState({border:'1px'});

  return <div className="wrapper">
    <div className="config">
      <div style={{border: "1px solid #cdcdcd", display:"flex", flexDirection:'column', height: '100%'}}>
        <div style={{padding: "1rem", height: '100px'}}>
  <h4>Styling Area</h4>
  <pre>Currently completed only attributes starts with "a"</pre>
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
      </fieldset>
      </fieldset>
      </div>
      </fieldset>
    </div>
    
    
      </div>
        </div>
    </div>
 
    
}

export default App
