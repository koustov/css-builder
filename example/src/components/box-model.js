import React, { useState } from 'react'

import { CSSBuilder } from 'css-builder'
import { CodeArea } from './code-area'

import 'css-builder/dist/index.css'

export const BoxModel = () => {
  const [val, setVal] = useState()

  return (
    <div className='control-wrapper'>
      <fieldset className='container-fieldset'>
        <legend>Coding Area</legend>
        <pre>
          Currently completed only attributes starts with "a","c" and "d"
        </pre>
        <div style={{ padding: '1rem', flex: 1, overflow: 'hidden' }}>
          <CSSBuilder
            inline
            onChange={(v) => {
              setVal(v)
            }}
          />
        </div>
      </fieldset>

      <div className='live-demo'>
        <fieldset className='container-fieldset'>
          <legend>Playground</legend>
          <fieldset className='outer'>
            <legend>Canvas Area</legend>
            <fieldset className='outer'>
              <legend>Outer box</legend>
              <div
                style={{
                  flex: 1,
                  height: '200px',
                  width: '400px',
                  display: 'flex'
                }}
              >
                <fieldset className='target' style={val}>
                  <legend>Target Box</legend>
                  <fieldset className='inner'>
                    <legend>Inner Box</legend>
                    <input type='text' placeholder='[sample input]' />
                  </fieldset>
                </fieldset>
              </div>
            </fieldset>
          </fieldset>
        </fieldset>
        <CodeArea code={val} />
      </div>
    </div>
  )
}
