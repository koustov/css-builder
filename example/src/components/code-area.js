import React, { useState } from 'react'

import 'css-builder/dist/index.css'

export const CodeArea = ({ code }) => {
  const [checked, setChecked] = useState(0)

  const camelCaseToDash = (myStr) => {
    return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  }

  const getFormattedData = () => {
    if (checked === 0) {
      return JSON.stringify(code, null, 2)
    } else {
      return camelCaseToDash(JSON.stringify(code, null, 2))
    }
  }
  return (
    <fieldset className='container-fieldset'>
      <legend>Code</legend>
      <div className='radio-button'>
        <ul>
          <li>
            <input
              type='radio'
              id='f-option'
              name='selector'
              checked={checked === 0}
            />
            <label
              for='f-option'
              onClick={() => {
                setChecked(0)
              }}
            >
              Inline Style Object
            </label>

            <div class='check'></div>
          </li>
          <li>
            <input
              type='radio'
              id='f-option'
              name='selector'
              checked={checked === 1}
            />
            <label
              for='f-option'
              onClick={() => {
                setChecked(1)
              }}
            >
              CSS Snippet
            </label>

            <div class='check'></div>
          </li>
        </ul>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1rem'
        }}
      >
        <pre>{getFormattedData()}</pre>
      </div>
    </fieldset>
  )
}
