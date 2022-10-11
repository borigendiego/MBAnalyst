import React from 'react';
//Styles
import styles from './contact.module.scss';
//Fields validations
import { required, email } from './fieldValidations';
import { Form } from 'hippo-components';
//Framer motion
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const Contact = () => {
    return (
        <div className={styles.container} id={'contact'}>
            <div className={styles.title}>
                <motion.h1
                    className={styles.first_title}
                    initial={{opacity: 0, y: -30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 1}}
                >CONTACT</motion.h1>
                <motion.h1
                    className={styles.second_title}
                    initial={{opacity: 0, y: -30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 1.5}}
                >AND GET MY QUOTE</motion.h1>
            </div>
            <motion.div
                className={styles.border}
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 1.5}}
            >
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
            </motion.div>
        </div>
    )
};

export default Contact
