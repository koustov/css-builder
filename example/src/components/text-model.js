import React, { useState } from 'react'

import { CSSBuilder } from 'css-builder'
import { CodeArea } from './code-area'
import 'css-builder/dist/index.css'

export const TextboxModel = () => {
  const [val, setVal] = useState()

  return (
    <div className='control-wrapper'>
      <fieldset className='container-fieldset'>
        <legend>Code Area</legend>
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
            <div
              style={{
                flex: 1,
                height: '200px',
                width: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem'
              }}
            >
              <input type='text' style={val} value='Sample Text Box' />
            </div>
          </fieldset>
        </fieldset>

        <CodeArea code={val} />
      </div>
    </div>
  )
}
