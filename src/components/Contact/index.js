import React from 'react';
import emailjs from 'emailjs-com';
//Styles
import './contact.scss';

const Contact = () => {
    console.log('>>process.env', process.env);
    const onSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tx6tcno', 'template_uwk801r', e.target, 'user_zIp5WFXMeXJDWwUBtUVPw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }); 
    };

    return(
        <div className={'contact-section'} id={'contact'}>
            <div className={'contact-title-section'}>
                <h1 className={'contact-first-title'}>CONTACT</h1>
                <h1 className={'contact-second-title'}>AND GET MY QUOTE</h1>
            </div>
            <div className={'contact-border'}>
                <form className={'contact-form'} onSubmit={onSubmit}>
                    <section className={'contact-item'}>
                        <label className={'contact-label'}>Name (required)</label>
                        <input type={'text'} name={'name'} id={'name'} className={'contact-input'}/>
                    </section>
                    <section className={'contact-item'}>
                        <label className={'contact-label'}>Mail (required)</label>
                        <input type={'text'} name={'mail'} id={'mail'} className={'contact-input'}/>
                    </section>
                    <section className={'contact-item'}>
                        <label className={'contact-label'}>Subject</label>
                        <input type={'text'} name={'subject'} id={'subject'} className={'contact-input'}/>
                    </section>
                    <section className={'contact-item'}>
                        <label className={'contact-label'}>Message</label>
                        <textarea id={'message'} name={'message'} rows={'5'} cols={'40'} className={'contact-input-box'}/>
                    </section>
                    <section className={'contact-item'}>
                        <input type={'submit'} value={'Send'} className={'contact-input-button'}/>
                    </section>
                </form>
            </div>
        </div>
    )
};

export default Contact