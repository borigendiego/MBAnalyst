import React from 'react';
//Styles
import styles from './contact.module.scss';
//Fields validations
import { required, email } from './fieldValidations';
import { Form } from 'hippo-components';

const Contact = () => {
    return (
        <div className={styles.container} id={'contact'}>
            <div className={styles.title}>
                <h1 className={styles.first_title}>CONTACT</h1>
                <h1 className={styles.second_title}>AND GET MY QUOTE</h1>
            </div>
            <div className={styles.border}>
                <Form
                    fields={[
                        {
                            name: 'name',
                            type: 'text',
                            label: 'Name (Required)',
                            validations: [required],
                        },
                        {
                            name: 'customerEmail',
                            type: 'text',
                            label: 'Email (Required)',
                            validations: [email],
                        },
                        {
                            name: 'subject',
                            type: 'text',
                            label: 'Subject',
                        },
                        {
                            name: 'message',
                            type: 'textArea',
                            label: 'Message',
                        }
                    ]}
                    onSuccessMessage={'Your message has been successfully sent. We will contact you very soon!'}
                    onErrorMessage={'Please try again in some minutes'}
                    submitButtonLabel={'SUBMIT'}
                    customClass={'mbanalyst-contact-form'}
                    emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/mbanalyst-mail'}
                />
            </div>
        </div>
    )
};

export default Contact
