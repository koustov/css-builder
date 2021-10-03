import React from 'react'

import Tabs from './Tabs'
import { BoxModel, ButtonModel, TextboxModel } from './components'

const App = () => {
  return (
    <div className='page-top'>
      <div class='header'>
        <div style={{ flex: 1 }}>
          <a class='logo' href='.page-top'>
            React CSS Builder
          </a>
          <input class='menu-btn' type='checkbox' id='menu-btn' />
          <label class='menu-icon' for='menu-btn'>
            <span class='navicon'></span>
          </label>
        </div>
        <ul class='menu'>
          <li>
            <a
              href='https://www.npmjs.com/package/react-ui-css-builder'
              without
              rel='noopener noreferrer'
              target='_blank'
              class='link link-theme link-arrow'
            >
              NPM
            </a>
          </li>
          <li>
            <a
              href='https://github.com/koustov/css-builder'
              without
              rel='noopener noreferrer'
              target='_blank'
              class='link link-theme link-arrow'
            >
              Git
            </a>
          </li>
          <li>
            <a
              href='https://github.com/koustov/css-builder'
              without
              rel='noopener noreferrer'
              target='_blank'
              class='link link-theme link-arrow'
            >
              Star
            </a>
          </li>
        </ul>
      </div>
      <pre>
        Few of the properties works with specific element, chose the model
        carefully to play around. Currently completed only attributes starts
        with "a", "c", "d", "h", "e" and "j"
      </pre>
      <div className='wrapper main'>
        <Tabs
          tabs={[
            {
              title: 'Box Model',
              content: <BoxModel />
            },
            {
              title: 'Button Model',
              content: <ButtonModel />
            },
            {
              title: 'Text Box Model',
              content: <TextboxModel />
            }
          ]}
        ></Tabs>
        {/* */}
      </div>
    </div>
  )
}

export default App
