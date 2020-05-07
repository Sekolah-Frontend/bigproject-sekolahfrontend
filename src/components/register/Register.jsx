import React from 'react';

const Register = () => {
  return (
    <React.Fragment>
      <div>
        <div className='modal'>
          <div className='modal-background'></div>
          <div className='modal-content'>
            <div className='form'>
              <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                  <input className='input' type='text' placeholder='e.g Alex Smith' />
                </div>
              </div>

              <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                  <input className='input' type='email' placeholder='e.g. alexsmith@gmail.com' />
                </div>
              </div>
              <div className='field is-grouped'>
                <p className='control'>
                  <a className='button is-primary'>Submit</a>
                </p>
                <p className='control'>
                  <a className='button is-light'>Cancel</a>
                </p>
              </div>
            </div>
          </div>
          <button className='modal-close is-large' aria-label='close'></button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
