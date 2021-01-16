import React, { useState } from 'react';
import emailjs from 'emailjs-com';
//Hook
import useContactForm from './useContactForm';
//Styles
import './contact.scss';
//Component
import MyInput from './CustomInput';
//Fields validations
import { required, email } from './fieldValidations';

const Contact = () => {
    const [messageSent, setMessageSent] = useState('');
    const initialValues = {
        name: '',
        mail: '',
        subject: '',
        message: '',
    };

    const {
        values,
        handleChange,
        errors,
        setErrors,
        setValues,
    } = useContactForm({
        initialValues,
        onSubmit: values => console.log({ values })
    });

    const onSubmit = (e, form) => {
        const { values } = e;

        if (!values.name) {
            setErrors({...errors, 'name': 'Required'});
        }

        if (!values.mail) {
            setErrors({...errors, 'mail': 'Required'});
        }

        if (!errors && (Object.keys(errors).length === 0 && errors.constructor === Object)) {
            //TODO: Move emails sender to a proper API
            emailjs.sendForm(process.env.REACT_APP_MAIL_VALUE, process.env.REACT_APP_TEMPLATE_ID, form, process.env.REACT_APP_USER_ID)
                .then(() => {
                    setValues(initialValues);
                    setMessageSent('succeed');
                }, (error) => {
                    console.log(error.text);
                    setMessageSent('error');
                });
        }
    };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        onSubmit({ values }, event.target);
    };

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={'message succeed'}>
                <h2>Thank you!</h2>
                <p>Your message has been successfully sent. We will contact you very soon!</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={'message error'}>
                <h2>Something went wrong</h2>
                <p>Please try again or send and email to: support@mbanalyst.com</p>
            </div>
        }
        return null;
    };

    return(
        <div className={'contact-section'} id={'contact'}>
            <div className={'contact-title-section'}>
                <h1 className={'contact-first-title'}>CONTACT</h1>
                <h1 className={'contact-second-title'}>AND GET MY QUOTE</h1>
            </div>
            <div className={'contact-border'}>
                {/*TODO: REFACTOR THIS COMPONENT AND CREATE A GENERIC FORM BUILDER */}
                <form className={'contact-form'} onSubmit={handleSubmit}>
                    <MyInput
                        fieldName={'name'}
                        fieldType={'text'}
                        label={'Name (required)'}
                        handleChange={handleChange}
                        value={values.name}
                        validations={[required]}
                        errors={errors}
                    />
                    <MyInput
                        fieldName={'mail'}
                        fieldType={'text'}
                        label={'Mail (required)'}
                        handleChange={handleChange}
                        value={values.mail}
                        validations={[required, email]}
                        errors={errors}
                    />
                    <MyInput
                        fieldName={'subject'}
                        fieldType={'text'}
                        label={'Subject'}
                        handleChange={handleChange}
                        value={values.subject}
                    />
                    <section className={'contact-item'}>
                        <label className={'contact-label'}>Message</label>
                        <textarea
                            name={'message'}
                            id={'message'}
                            onChange={handleChange}
                            value={values.message}
                            rows={'5'}
                            cols={'40'}
                            className={'contact-input-box'}
                        />
                    </section>
                    {renderSentMessage()}
                    <section className={'contact-item'}>
                        <button
                            type={'submit'}
                            className={'contact-input-button'}
                        >
                            SUBMIT
                        </button>
                    </section>
                </form>
            </div>
        </div>
    )
};

export default Contact