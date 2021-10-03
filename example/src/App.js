import React from 'react'

import Tabs from './Tabs'
import { BoxModel, ButtonModel, TextboxModel } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNpm, faGit, faTwitter } from '@fortawesome/free-brands-svg-icons'

const App = () => {
  return (
    <div className='page-top'>
      <div class='header'>
        <div style={{ flex: 1 }}>
          <a class='logo' href='.page-top'>
            CSS Builder
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
              <FontAwesomeIcon icon={faNpm} />
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
              <FontAwesomeIcon icon={faGit} />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/koustov'
              without
              rel='noopener noreferrer'
              target='_blank'
              class='link link-theme link-arrow'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
      <pre>
        Few of the properties works with specific element, select the model
        carefully to play around. Currently completed only subset of attributes
        for pending items refer{' '}
        <a
          href='https://github.com/koustov/css-builder/issues'
          without
          rel='noopener noreferrer'
          target='_blank'
          class='link link-theme link-arrow'
          style={{ color: '#454545', fontSize: '1.1rem' }}
        >
          git issue
        </a>{' '}
        section
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
