import React from 'react';
import './contact.css';

const Contact = (props) => {
    return(
        <div className={'contact-section'}>
            <h1>CONTACT AND GET MY QUOTE</h1>
            <form className={'contact-form'}>
                <section>
                    <label for={'dashboards'}>Number of dashboards</label>
                    <input type={'number'} name={'dashboards'} id={'dashboards'}/>
                </section>
                <section>
                    <label for={'data-sources'}>Number of data sources</label>
                    <input type={'number'} name={'data-sources'} id={'data-sources'}/>
                </section>
                <section>
                    <label for={'data-kind'}>What data sources are you using? ( i.e SQL Server, Web, Excel, etc.)</label>
                    <input type={'text'} name={'data-kind'} id={'data-kind'}/>
                </section>
                <section>
                    <label for={'revision'}>Number of Revision</label>
                    <input type={'number'} name={'revision'} id={'revision'}/>
                </section>
                <section>
                    <label for={'timeframe'}>Expected Timeframe (Weeks)</label>
                    <input type={'number'} name={'timeframe'} id={'timeframe'}/>
                </section>
                <section>
                    <label for={'name'}>Name (required)</label>
                    <input type={'text'} name={'name'} id={'name'}/>
                </section>
                <section>
                    <label for={'surname'}>Surname (required)</label>
                    <input type={'text'} name={'surname'} id={'surname'}/>
                </section>
                <section>
                    <label for={'mail'}>Mail (required)</label>
                    <input type={'text'} name={'mail'} id={'mail'}/>
                </section>
                <section>
                    <label for={'subject'}>Subject</label>
                    <input type={'text'} name={'subject'} id={'subject'}/>
                </section>
                <section>
                    <label for={'message'}>Message</label>
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