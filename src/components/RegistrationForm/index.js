import React, { useState } from 'react';
import './index.css';
function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
    });
    const [errors, setErrors] = useState({});
    const [filled, setFilled] = useState(false)

    // Copied from: https://stackoverflow.com/questions/41348459/regex-in-react-email-validation
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validateForm = () => {
        let errors = {};
        if (formData.firstName === '') {
            errors.firstName = 'First name is required';
        }
        if (formData.lastName === '') {
            errors.lastName = 'Last name is required';
        }
        if (formData.email === '') {
            errors.email = 'Email is required';
        } else if (!regEmail.test(formData.email)) {
            errors.email = 'Please enter a valid email';
        }
        if (formData.password === '') {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password should be at least 6 characters long';
        }
        if (formData.gender === '') {
            errors.gender = 'Gender is required';
        }
        if (Object.keys(errors).length === 0) {
            setFilled(true);
        }
        setErrors(errors);

    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
    };
    const onClickSubmitAnotherResponse = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
        });
        setErrors({});
        setFilled(false);

    };

    return (
        <div className="registration-form-container">
            {filled ? <h1 className="form-title">View Details</h1> : <h1 className="form-title">Registration</h1>}
            <div className="view-container">

                {
                    filled ? (<>
                        <img
                            src="https://registeration-form.onrender.com/images/success-icon-img.png"
                            alt="success"
                            className="success-image"
                        />
                        <p>Submitted Successfully</p>
                        <button
                            type="button"
                            className="submit-button"
                            onClick={onClickSubmitAnotherResponse}
                        >
                            Submit Another Response
                        </button>
                        <br></br>
                        <div className="user-card">
                            {formData.firstName &&
                                <div className="user-container">
                                    <p className='user-text'>First Name: {formData.firstName}</p>
                                </div>
                            }
                            {formData.lastName &&
                                <div className="user-container">
                                    <p className='user-text'>Last Name: {formData.lastName}</p>
                                </div>
                            }
                            {formData.email &&
                                <div className="user-container">
                                    <p className='user-text'>Email: {formData.email}</p>
                                </div>
                            }
                            {formData.password &&
                                <div className="user-container">
                                    <p className='user-text'>Password: ***********</p>
                                </div>
                            }
                            {formData.gender &&
                                <div className="user-container">
                                    <p className='user-text'>Gender: {formData.gender}</p>
                                </div>
                            }
                        </div>
                    </>) : <form className="form-container" onSubmit={handleSubmit}>
                        <div className="input-container"><label className="input-label" htmlFor="firstName">FIRST NAME</label>
                            <input type="text" id="firstName" className="name-input-field" placeholder="First name" onChange={handleChange} name='firstName'></input>
                            {errors.firstName && <p className='error'>{errors.firstName}</p>}
                        </div>
                        <div className="input-container"><label className="input-label" htmlFor="lastName">LAST NAME</label>
                            <input type="text" id="lastName" className="name-input-field" placeholder="Last name" onChange={handleChange} name='lastName'></input>
                            {errors.lastName && <p className='error'>{errors.lastName}</p>}
                        </div>
                        <div className="input-container"><label className="input-label" htmlFor="lastName">EMAIL</label>
                            <input type="email" id="email" className="name-input-field" placeholder="Email" onChange={handleChange} name='email'></input>
                            {errors.email && <p className='error'>{errors.email}</p>}
                        </div>
                        <div className="input-container"><label className="input-label" htmlFor="password">PASSWORD</label>
                            <input type="password" id="password" className="name-input-field" placeholder="Password" onChange={handleChange} name='password'></input>
                            {errors.password && <p className='error'>{errors.password}</p>}

                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor="Gender">GENDER</label>
                            <div className="radio-input-container">
                                <div>
                                    <input type="radio" id='male' className="name-input-field" value="Male" name='gender' onChange={handleChange}></input>
                                    <label className="input-label" htmlFor="male">MALE</label>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                    <input type="radio" id='female' className="name-input-field" value="Female" name='gender' onChange={handleChange}></input>
                                    <label className="input-label" htmlFor="female">FEMALE</label>
                                </div>
                            </div>
                            {errors.gender && <p className='error'>{errors.gender}</p>}
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                }
            </div>
        </div>
    );
}

export default RegistrationForm;