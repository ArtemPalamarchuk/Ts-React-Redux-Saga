import React from 'react';

const Input = ({handleChange, options, value}) => {

  return(
    <div className={'selectWrapper'}>
      {options.length > 0 ?
          <>
            <select onChange={handleChange} defaultValue={value}>
              {options.map(({value, label}) =>
                <option key={value} value={value}>
                  {label}
                </option>
              )}
            </select>
            <span className={'selectText'}>per page</span>
          </>
        : <div className={'selectText'}>No Items</div>
      }
    </div>
  )
}

export default Input