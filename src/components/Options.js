import React from 'react';

import Option from './Option';

const Options = props => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__title'>Your Options</h3>
      <button
        className='button button--link'
        onClick={props.handleDeleteOptions}
      >
        remove all
      </button>
    </div>

    {props.options.length === 0 && (
      <p className='widget__message'>please add an option to get started!!</p>
    )}
    {props.options.map((opt, i) => (
      <Option
        key={i}
        option={opt}
        count={i + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
