import * as React from 'react'
import { useState, useEffect, Fragment } from 'react'

import { Templates } from '../definitions'
// https://www.w3schools.com/cssref/

import Tabs from './Tabs'
import Panel from './Panel'
import {
  CBModal,
  CBAttributeRow,
  CBTabContainer,
  CBFilterInput
} from './styled'

export const PropertyBrowser = ({
  selected,
  onChange,
  onClose,
  show,
  ...rest
}) => {
  const [allProps, setAllProps] = useState([])
  const [sortedProps, setSortedProps] = useState({})

  useEffect(() => {
    let res = prepareList(Templates)
    setSortedProps(res)
  }, [])

  const onRowClicked = (val) => {
    if (onChange) {
      onChange(val)
    }
  }

  const onFilterTextChanged = (val) => {
    setSortedProps(
      prepareList(
        Templates.filter((t) => {
          return (
            t.display.indexOf(val) > -1 ||
            t.description.indexOf(val) > -1 ||
            t.propertyName.indexOf(val) > -1
          )
        })
      )
    )
  }

  const prepareList = (list) => {
    let res = {}
    res['#All'] = {}
    list.forEach((t) => {
      const index = t.display.substring(0, 1)
      res['#All'][index] = res['#All'][index] || []
      res['#All'][index].push(t)
      t.categories.forEach((c) => {
        res[c] = res[c] || {}
        res[c][index] = res[c][index] || []
        res[c][index].push(t)
      })
    })
    res = Object.keys(res)
      .sort()
      .reduce(function (result, key) {
        result[key] = res[key]
        return result
      }, {})
    return res
  }

  return (
    <CBModal state={show ? '1' : '0'} onClick={() => onClose()}>
      <div
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
      >
        <div>
          <div style={{ display: 'flex', height: '70px' }}>
            <div style={{ flex: 1 }}>
              <h1> CSS Attribute Browser</h1>
            </div>
            <div>
              <input type='button' value='close' onClick={() => onClose()} />{' '}
            </div>
          </div>
          <div style={{ height: '60px' }}>
            <CBFilterInput
              type='text'
              placeholder='FILTER'
              onChange={(e) => onFilterTextChanged(e.target.value)}
            />
            {/* <label className={styles.cb_floating_label}>
                                    Filter
                                  </label> */}
          </div>

          <CBTabContainer style={{ flex: 1 }}>
            <Tabs>
              {Object.keys(sortedProps)
                .sort()
                .map((catkey, cati) => {
                  return (
                    <Panel title={catkey} key={cati}>
                      <div style={{ overflow: 'auto !important' }}>
                        {Object.keys(sortedProps[catkey])
                          .sort()
                          .map((index, indexi) => {
                            return (
                              <div key={indexi}>
                                <div>
                                  <label>{index}</label>
                                </div>
                                <div>
                                  {sortedProps[catkey][index].map((c, ci) => {
                                    return (
                                      <CBAttributeRow
                                        style={{ display: 'flex' }}
                                        onClick={() => onRowClicked(c)}
                                        key={ci}
                                      >
                                        <div style={{ width: '20%' }}>
                                          {c.display}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                          {c.description}
                                        </div>
                                      </CBAttributeRow>
                                    )
                                  })}
                                </div>
                              </div>
                            )
                          })}
                      </div>
                    </Panel>
                  )
                })}
            </Tabs>
          </CBTabContainer>
        </div>
      </div>
    </CBModal>
  )
}
