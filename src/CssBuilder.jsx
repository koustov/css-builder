import * as React from 'react'
import { useState, useEffect, Fragment } from 'react'
// https://www.w3schools.com/cssref/
import { Templates } from './definitions'
import { PropertyBrowser } from './components/propertyBrowser'
import { ControlTemplate } from './components/control-template'
import './index.css'
import Accordion from './components/accordion'
import { CBSimpleButton } from './components/styled'
import { ThemeProvider } from 'styled-components'
import * as Themes from './themes'

export const CSSBuilder = ({
  tags,
  onChange,
  inline,
  baseTheme = 'chalk',
  themeOverride = {},
  config,
  ...rest
}) => {
  const [allProps, setAllProps] = useState([])
  const [showPropertyBorwser, setShowPropertyBorwser] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(-1)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [finalTheme, setFinalTheme] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    let defaultTheme = Themes[baseTheme]
    const oTheme = themeOverride
    defaultTheme = Object.assign(defaultTheme, oTheme)
    setFinalTheme(defaultTheme)
    setLoading(false)
  }, [config])

  const onRowAdd = () => {
    setSelectedProperty(allProps.length)
    setShowPropertyBorwser(true)
  }

  const onPropertyChange = (value) => {
    setShowPropertyBorwser(false)
    allProps[selectedProperty] = Templates.filter((f) => {
      return f.name === value.name && f.propertyName === value.propertyName
    })[0]

    allProps[selectedProperty].controls.forEach((c) => {
      c.value = c.default ? c.default : ''
    })

    setAllProps(JSON.parse(JSON.stringify(allProps)))
    fireOnChange(allProps)
    setSelectedIndex(selectedProperty)
  }
  const onPropertyValueChange = (value, controlindex, rowindex) => {
    allProps[rowindex].controls[controlindex].value = `${
      allProps[rowindex].controls[controlindex].prefix || ''
    }${value}${allProps[rowindex].controls[controlindex].suffix || ''}`
    setAllProps(allProps)
    fireOnChange(allProps)
  }

  const camelCase = (input) => {
    return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
      return group1.toUpperCase()
    })
  }

  const fireOnChange = (styles) => {
    let resStyle = inline ? {} : ''
    styles.forEach((row) => {
      if (Object.keys(row).length) {
        const styleName = inline
          ? camelCase(row.propertyName)
          : row.propertyName
        let styleValue = row.valuetemplate || '${0}'
        row.controls.forEach((c, ci) => {
          styleValue = styleValue.replace(`{${ci}}`, c.value || '')
        })

        if (inline) {
          resStyle[styleName] = styleValue
        } else {
          resStyle = `${resStyle}${styleName}:${styleValue};}`
        }
      }
    })
    if (onChange) {
      onChange(resStyle)
    }
  }

  return (
    <Fragment>
      {loading ? null : (
        <ThemeProvider theme={finalTheme}>
          <div
            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ overflow: 'auto', flex: 1 }}>
              <Accordion
                selectedIndex={selectedIndex}
                onChange={(index, expanded, si) => setSelectedIndex(si)}
              >
                {allProps.map((prop, propi) => {
                  return (
                    <div
                      data-header={`${prop.display || 'No attribute selected'}`}
                      help-link={prop.link}
                      on-remove-clicked={() => {
                        allProps.splice(propi, 1)
                        setAllProps(JSON.parse(JSON.stringify(allProps)))
                        fireOnChange(allProps)
                      }}
                      on-change-clicked={() => {
                        setSelectedProperty(propi)
                        setShowPropertyBorwser(true)
                      }}
                    >
                      {prop.controls.map((c, ci) => {
                        return (
                          <div style={{ flex: 1 }} key={ci}>
                            <div style={{ display: 'flex' }}>
                              <ControlTemplate
                                field={c}
                                onChange={(val) => {
                                  onPropertyValueChange(val, ci, propi)
                                }}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </Accordion>
            </div>
            <div style={{ height: '40px' }}>
              <CBSimpleButton
                type='button'
                value='Add'
                onClick={() => onRowAdd()}
                style={{ height: '40px' }}
              />
            </div>
            {showPropertyBorwser ? (
              <PropertyBrowser
                show={showPropertyBorwser}
                onChange={(val) => onPropertyChange(val)}
                onClose={() => setShowPropertyBorwser(false)}
              />
            ) : null}
          </div>
        </ThemeProvider>
      )}
    </Fragment>
  )
}
