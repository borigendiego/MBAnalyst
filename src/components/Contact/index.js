import React from 'react';
import './contact.css';

const Contact = (props) => {
    return(
        <div className={'contact-section'}>
            <h1>CONTACT AND GET MY QUOTE</h1>
            <form className={'contact-form'}>
                <section>
                    <label>Number of dashboards</label>
                    <input type={'number'} name={'dashboards'} id={'dashboards'}/>
                </section>
                <section>
                    <label>Number of data sources</label>
                    <input type={'number'} name={'data-sources'} id={'data-sources'}/>
                </section>
                <section>
                    <label>What data sources are you using? ( i.e SQL Server, Web, Excel, etc.)</label>
                    <input type={'text'} name={'data-kind'} id={'data-kind'}/>
                </section>
                <section>
                    <label>Number of Revision</label>
                    <input type={'number'} name={'revision'} id={'revision'}/>
                </section>
                <section>
                    <label>Expected Timeframe (Weeks)</label>
                    <input type={'number'} name={'timeframe'} id={'timeframe'}/>
                </section>
                <section>
                    <label>Name (required)</label>
                    <input type={'text'} name={'name'} id={'name'}/>
                </section>
                <section>
                    <label>Surname (required)</label>
                    <input type={'text'} name={'surname'} id={'surname'}/>
                </section>
                <section>
                    <label>Mail (required)</label>
                    <input type={'text'} name={'mail'} id={'mail'}/>
                </section>
                <section>
                    <label>Subject</label>
                    <input type={'text'} name={'subject'} id={'subject'}/>
                </section>
                <section>
                    <label>Message</label>
                    <textarea id={'message'} name={'message'} rows={'5'} cols={'40'}/>
                </section>
                <section>
                    <input type={'submit'} value={'Send'}/>
                </section>
            </form>
        </div>
    )
};

export default Contact