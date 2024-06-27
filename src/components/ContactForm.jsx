import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm({ id, data }) {
    const form = useRef();
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'form_email') {
            setEmail(value);
        } else if (name === 'form_subject') {
            setSubject(value);
        } else if (name === 'form_message') {
            setMessage(value);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                data.VITE_EMAILJS_SERVICE_ID,
                data.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    email,
                    subject,
                    message,
                    publicKey: data.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Reset form fields
                    setEmail('');
                    setSubject('');
                    setMessage('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <section className="bg-white" id={id}>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary-brand">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-semibold text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form ref={form} onSubmit={sendEmail} action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-bold text-primary-brand">Your email</label>
                        <input type="email" name="form_email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@email.com" value={email} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-bold text-primary-brand">Subject</label>
                        <input type="text" name="form_subject" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" value={subject} onChange={handleInputChange} required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-bold text-primary-brand">Your message</label>
                        <textarea id="message" name="form_message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." value={message} onChange={handleInputChange}></textarea>
                    </div>
                    <button value="submit" type="submit" className="py-3 border-primary-brand border-2 px-5 text-sm font-bold text-center text-primary-brand rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-brand hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
