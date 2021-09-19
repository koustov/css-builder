import { useState, useEffect, Fragment } from "react";
import React from "react";
import styles from './control-template.scss';

export const ControlTemplate = ({field, onChange}) => {
  const [fieldData, setFieldData] = useState({});
  const [subFiledValues, setSubFieldValues] = useState([]);
  useEffect(() => {
    setFieldData(field || {});
  }, [field])

  const onPropertyValueChange = (value) => {
      fieldData.value = value;
      setFieldData({...fieldData});
      if(onChange) {
        if(typeof (fieldData.value) === 'string' && fieldData.value.indexOf("{") === 0) {
          const v =  JSON.parse(fieldData.value)
          if(typeof (v.value) === 'string' && v.value.indexOf("{")) {
          } else {
            onChange((fieldData.valuetemplate || '{0}').replace(`{${0}}`, v.value))  
          }
          
        }
        else {
          onChange((fieldData.valuetemplate || '{0}').replace(`{${0}}`, value))  
        }
      }
  }

  const onSubControlValueChanged = (control, value, index, f) => {
    let res = f.valuetemplate || "{0}";
    for(var i =0; i<= index; i++) {
      subFiledValues[i] = subFiledValues[i] || '';
    }
    subFiledValues[index] = value;
    
    for(var j =0; j< subFiledValues.length; j++) {
      res = res.replace(`{${j}}`, subFiledValues[j]);
    }
    if(onChange) {
      onChange(res);
    }
  }

  const getSubControls =() => {
    const res = [];
    if(fieldData.value && typeof (fieldData.value) === 'string' && fieldData.value.indexOf("{") === 0) {
      const obj = JSON.parse(fieldData.value);
      obj.value.controls.forEach((c, ci) => {
        res.push(<ControlTemplate field={c} onChange={(val) => {
          onSubControlValueChanged(c, val, ci, obj)
        }}/>)
      })
   }
   return res;
  }

  const getControl = () => {
    let res = []
    let output = [];
    switch (fieldData.type) {
      case 'select':
        output.push(
          <div className='cb-floating-label-content' style={{ flex: 1 }}>
            <select
              className='cb-floating-select'
              value={fieldData.value}
              onChange={(e) =>
                onPropertyValueChange(
                  e.target.value,
                )
              }
              style={{ width: '100%' }}
            >
              {fieldData.options.map((o, oi) => {
                return (
                  <option value={typeof(o.value) === 'object'? JSON.stringify(o) : o.value} key={oi}>
                    {`${o.name}`}
                    {/* [value: "${typeof(o.value) === 'object'? 'custom' :o.value}"] */}
                  </option>
                )
              })}
            </select>
          </div>
        )
        break
      case 'radio':
        output.push(
          <div className='radio-toolbar' style={{ flex: 1 }}>
            {fieldData.options.map((o, oi) => {
              return (
                <Fragment key={oi}>
                  <input
                    type='radio'
                    id={`radio-${o.name}`}
                    name={`radio-${o.name}`}
                    value={o.value}
                    checked={
                      o.value ===
                      fieldData.value
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
        output.push(
          <div style={{ flex: 1 }}>
            <input
              type='color'
              id='favcolor'
              name='favcolor'
              value={fieldData.value}
              style={{
                padding: '0px',
                border: 'none',
                width: '100%',
                height: '20px'
              }}
              onChange={(e) =>
                onPropertyValueChange(
                  e.target.value
                )
              }
            />
          </div>
        )
        break
      case 'number':
        output.push (
          <div style={{ flex: 1 }}>
            <input
              type='number'
              id='favcolor'
              name='favcolor'
              value={fieldData.value}
              onChange={(e) =>
                onPropertyValueChange(
                  e.target.value
                )
              }
            />
          </div>
        )
        break;
      case 'range':
        output.push(
          <div style={{ flex: 1 }}>
            <input
              type='range'
              min={fieldData.min || '1'}
              max={fieldData.max || '100'}
              value={fieldData.value}
              style={{ width: '100%' }}
              onChange={(e) =>
                onPropertyValueChange(
                  e.target.value * (fieldData.multiplier || 1),
                )
              }
            />
          </div>
        )
        break

      case 'text':
        output.push (
          <div style={{ flex: 1 }}>
            <input
              type='text'
              id='favcolor'
              name='favcolor'
              placeholder={fieldData.label}
              value={fieldData.value}
              onChange={(e) =>
                onPropertyValueChange(
                  e.target.value
                )
              }
            />
          </div>
        )
    }
    res = res.concat([<div className={styles.cb_grid_cell}>
      <div style={{ flex: 1, display:'flex' }}><div style={{flex:1}}>{fieldData.label}</div>
      
      <div className={styles.cb_help_tip}>
        <p>{fieldData.description}<br />
        <span style={{fontWeight: '500'}}>Default: </span>{fieldData.default}<br />
	      <a  href={fieldData.link || 'https://www.w3schools.com/cssref/'} target="_blank">W3School Definition</a>
    </p>
</div>
      </div>
      <div>{output}</div>
    </div>])
    res  = res.concat(getSubControls())
    return res
  }

  const allcontrols = getControl()
  return (
    <div className={styles.cb_grid_row} style={{gridTemplateColumns: `repeat(${allcontrols.length}, 1fr)`}}>
      {getControl()}
    </div>
  )
}
