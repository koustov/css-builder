import * as React from 'react'
import { useState, useEffect, Fragment } from 'react'
// https://www.w3schools.com/cssref/
import { Templates } from './definitions'
import { PropertyBrowser } from './components/propertyBrowser'
import styles from './app.scss'
import './index.css'

export const CSSBuilder = ({ tags, onChange, inline, ...rest }) => {
  const [allProps, setAllProps] = useState([])
  const [showPropertyBorwser, setShowPropertyBorwser] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(-1)

  const getControl = (control, controlindex, rowindex) => {
    const res = [<div style={{ flex: 1 }}>{control.label}</div>]
    switch (control.type) {
      case 'select':
        res.push(
          <div className='cb-floating-label-content' style={{ flex: 1 }}>
            <select
              className='cb-floating-select'
              value={allProps[rowindex].controls[controlindex].value}
              onChange={(e) =>
                onPropertyValueChange(e.target.value, controlindex, rowindex)
              }
              style={{ width: '100%' }}
            >
              {control.options.map((o, oi) => {
                return (
                  <option value={o.value} key={oi}>
                    {o.name}
                  </option>
                )
              })}
            </select>
          </div>
        )
        break
      case 'radio':
        res.push(
          <div className='radio-toolbar' style={{ flex: 1 }}>
            {control.options.map((o, oi) => {
              return (
                <Fragment key={oi}>
                  <input
                    type='radio'
                    id={`radio-${o.name}`}
                    name={`radio-${o.name}`}
                    value={o.value}
                    checked={
                      o.value ===
                      allProps[rowindex].controls[controlindex].value
                    }
                  />
                  <label for='radioBanana'>{o.name}</label>
                </Fragment>
              )
            })}
          </div>
        )
        break

      case 'color':
        res.push(
          <div style={{ flex: 1 }}>
            <input
              type='color'
              id='favcolor'
              name='favcolor'
              value={allProps[rowindex].controls[controlindex].value}
              style={{
                padding: '0px',
                border: 'none',
                width: '100%'
              }}
              onChange={(e) =>
                onPropertyValueChange(
                  e.target.value,
                  // hexToRgb(e.target.value),
                  controlindex,
                  rowindex
                )
              }
            />
          </div>
        )
        break
      case 'number':
        return (
          <div style={{ flex: 1 }}>
            <input
              type='number'
              id='favcolor'
              name='favcolor'
              value={allProps[rowindex].controls[controlindex].value}
              onChange={(e) =>
                onPropertyValueChange(e.target.value, controlindex, rowindex)
              }
            />
          </div>
        )
      case 'range':
        res.push(
          <div style={{ flex: 1 }}>
            <input
              type='range'
              min={control.min || '1'}
              max={control.max || '100'}
              value={allProps[rowindex].controls[controlindex].value}
              style={{ width: '100%' }}
              onChange={(e) =>
                onPropertyValueChange(
                  e.target.value * (control.multiplier || 1),
                  controlindex,
                  rowindex
                )
              }
            />
          </div>
        )
        break

      case 'text':
        return (
          <div style={{ flex: 1 }}>
            <input
              type='text'
              id='favcolor'
              name='favcolor'
              value={allProps[rowindex].controls[controlindex].value}
              onChange={(e) =>
                onPropertyValueChange(e.target.value, controlindex, rowindex)
              }
            />
          </div>
        )
    }
    return res
  }

  const onRowAdd = () => {
    setSelectedProperty(allProps.length)
    setShowPropertyBorwser(true)
    // allProps.push({})
    // setAllProps(JSON.parse(JSON.stringify(allProps)))
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
          //   styleValue = `'${styleValue}'`
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

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
          result[3],
          16
        )}`
      : null
  }

  return (
    <Fragment>
      <form style={{ width: '100%' }}>
        <div className={styles.cb_list_container}>
          {allProps.map((prop, propi) => {
            return (
              <div>
                <div className='property'>
                  <div>
                    <button
                      type='button'
                      className={styles.attribute_picker_button}
                      onClick={() => {
                        setSelectedProperty(propi)
                        setShowPropertyBorwser(true)
                      }}
                    >
                      {prop.display ? 'Change' : 'Add'}
                    </button>
                    {prop.display ? (
                      <button
                        type='button'
                        className={styles.attribute_picker_button}
                        style={{ backgroundColor: '#F34541' }}
                        onClick={() => {
                          allProps.splice(propi, 1)
                          setAllProps(JSON.parse(JSON.stringify(allProps)))
                          fireOnChange(allProps)
                        }}
                      >
                        Remove
                      </button>
                    ) : null}
                  </div>
                  <div>{prop.display || 'No attribute selected'}</div>
                </div>
                <div className='value'>
                  {prop.controls && prop.controls.length ? (
                    <Fragment>
                      {prop.controls.map((c, ci) => {
                        return (
                          <div style={{ flex: 1 }} key={ci}>
                            <div style={{ display: 'flex' }}>
                              {getControl(c, ci, propi)}{' '}
                            </div>
                          </div>
                        )
                      })}
                    </Fragment>
                  ) : (
                    <Fragment>Select a property type first</Fragment>
                  )}
                </div>
              </div>

              // <div style={{ padding: '1rem' }}>
              //   <div
              //     style={{
              //       minHeight: '50px',
              //       border: '1px solid #454545',
              //       borderRadius: '4px'
              //     }}
              //     key={propi}
              //   >
              //     <div style={{ display: 'flex' }}>
              //       <div style={{ flex: 1 }}>
              //         <input
              //           type='button'
              //           className={styles.attribute_picker_button}
              //           onClick={() => {
              //             setSelectedProperty(propi)
              //             setShowPropertyBorwser(true)
              //           }}
              //           value={
              //             prop.display || '<Click here to select an attribute>'
              //           }
              //         />
              //       </div>
              //       <div>
              //         <button
              //           type='button'
              //           className={styles.attribute_picker_button}
              //           onClick={() => {
              //             allProps.splice(propi, 1)
              //             setAllProps(JSON.parse(JSON.stringify(allProps)))
              //             fireOnChange(allProps)
              //           }}
              //         >
              //           <div className={styles.cb_icon_trash}>
              //             <div className={styles.cb_trash_lid}></div>
              //             <div className={styles.cb_trash_container}></div>
              //             <div className={styles.cb_trash_line_1}></div>
              //             <div className={styles.cb_trash_line_2}></div>
              //             <div className={styles.cb_trash_line_3}></div>
              //           </div>
              //         </button>
              //       </div>
              //     </div>
              //     <div
              //       style={{
              //         flex: 1,
              //         display: 'flex',
              //         flexDirection: 'column',
              //         padding: '8px'
              //       }}
              //     >
              //       {prop.controls && prop.controls.length ? (
              //         <Fragment>
              //           {prop.controls.map((c, ci) => {
              //             return (
              //               <div style={{ flex: 1 }} key={ci}>
              //                 <div style={{ display: 'flex' }}>
              //                   {getControl(c, ci, propi)}{' '}
              //                 </div>
              //               </div>
              //             )
              //           })}
              //         </Fragment>
              //       ) : (
              //         <Fragment>Select a property type first</Fragment>
              //       )}
              //     </div>
              //   </div>
              // </div>
            )
          })}
        </div>
        <div>
          <input
            type='button'
            value='Add'
            className={styles.cb_simple_button}
            onClick={() => onRowAdd()}
          />
        </div>
      </form>
      {showPropertyBorwser ? (
        <PropertyBrowser
          show={showPropertyBorwser}
          onChange={(val) => onPropertyChange(val)}
          onClose={() => setShowPropertyBorwser(false)}
        />
      ) : null}
    </Fragment>
  )
}
