import React from 'react';
import './contact.scss';

const Contact = (props) => {
    return(
        <div className={'contact-section'} id={'contact'}>
            <div className={'contact-title-section'}>
                <h1 className={'contact-first-title'}>CONTACT</h1>
                <h1 className={'contact-second-title'}>AND GET MY QUOTE</h1>
            </div>
            <form className={'contact-form'}>
                <section className={'contact-item'}>
                    <label className={'contact-label'}>Number of dashboards</label>
                    <input type={'radio'} name={'dashboards'} id={'dashboards'} className={'contact-input'}/>
                    <label for={'dashboards'}>1</label>
                    <input type={'radio'} name={'dashboards'} id={'dashboards'} className={'contact-input'}/>
                    <label for={'dashboards'}>2</label>
                    <input type={'radio'} name={'dashboards'} id={'dashboards'} className={'contact-input'}/>
                    <label for={'dashboards'}>3</label>
                    <input type={'radio'} name={'dashboards'} id={'dashboards'} className={'contact-input'}/>
                    <label for={'dashboards'}>4</label>
                    <input type={'radio'} name={'dashboards'} id={'dashboards'} className={'contact-input'}/>
                    <label for={'dashboards'}>5</label>
                    <input type={'radio'} name={'dashboards'} id={'dashboards'} className={'contact-input'}/>
                    <label htmlFor={'dashboards'}>More than 5</label>
                </section>
                <section className={'contact-item'}>
                    <label className={'contact-label'}>Number of data sources</label>
                    <input type={'radio'} name={'data-sources'} id={'data-sources'} className={'contact-input'}/>
                    <label for={'data-sources'}>Not sure</label>
                    <input type={'radio'} name={'data-sources'} id={'data-sources'} className={'contact-input'}/>
                    <label for={'data-sources'}>1</label>
                    <input type={'radio'} name={'data-sources'} id={'data-sources'} className={'contact-input'}/>
                    <label for={'data-sources'}>2</label>
                    <input type={'radio'} name={'data-sources'} id={'data-sources'} className={'contact-input'}/>
                    <label for={'data-sources'}>3</label>
                    <input type={'radio'} name={'data-sources'} id={'data-sources'} className={'contact-input'}/>
                    <label for={'data-sources'}>More than 3</label>
                </section>
                <section className={'contact-item'}>
                    <label className={'contact-label'}>What data sources are you using? ( i.e SQL Server, Web, Excel, etc.)</label>
                    <input type={'text'} name={'data-kind'} id={'data-kind'} className={'contact-input'}/>
                </section>
                <section className={'contact-item'}>
                    <label className={'contact-label'}>Number of Revision</label>
                    <input type={'number'} name={'revision'} id={'revision'} className={'contact-input'}/>
                </section>
                <section className={'contact-item'}>
                    <label className={'contact-label'}>Expected Timeframe (Weeks)</label>
                    <input type={'number'} name={'timeframe'} id={'timeframe'} className={'contact-input'}/>
                </section>
                <section className={'contact-item'}>
                    <label className={'contact-label'}>Name (required)</label>
                    <input type={'text'} name={'name'} id={'name'} className={'contact-input'}/>
                </section>
                <section className={'contact-item'}>
                    <label className={'contact-label'}>Surname (required)</label>
                    <input type={'text'} name={'surname'} id={'surname'} className={'contact-input'}/>
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
                    <textarea id={'message'} name={'message'} rows={'5'} cols={'40'} className={'contact-input'}/>
                </section>
                <section className={'contact-item'}>
                    <input type={'submit'} value={'Send'} className={'contact-input'}/>
                </section>
            </form>
        </div>
    )
};

export default Contact