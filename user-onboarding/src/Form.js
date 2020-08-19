import React from 'react';

function Form (props) {
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckboxChange = evt => {
        const {name,checked} = evt.target
        checkboxChange(name,checked)
    }

    const onInputChange = evt => {
        const {name,value} = evt.target
        inputChange(name,value)
    }
    
 


    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>

                <h2>New User</h2>
                <button disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsOfService}</div>
                </div>
            </div>

            <div className = 'form-group inputs'>
                <label>Name&nbsp;
                    <input
                        value = {values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'    
                    />
                </label>

                <label>Email&nbsp;
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='email'
                    />
                </label>

                <label>Password&nbsp;
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'
                    />
                </label>

                <div className='form-group checkboxes'>
                    <label>Click to accept the terms of service
                        <input
                            type='checkbox'
                            name='tos'
                            checked={values.termsOfService.tos}
                            onChange={onCheckboxChange}
                        />
                    </label>
                </div>
            </div>
        </form>
        )

}

export default Form