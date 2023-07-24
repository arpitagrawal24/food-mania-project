import React, { useState } from 'react'

function ContactForm({ handleSubmit }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg py-3 px-[14px] text-body-color text-base border border-black outline-none focus-visible:shadow-none 
                    focus:border-primary transition hover:bg-gray-300"
                    required
                />
            </div>
            <div className="mb-6">
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg py-3 px-[14px] text-body-color text-base border border-black outline-none focus-visible:shadow-none 
                    focus:border-primary transition hover:bg-gray-300"
                    required
                />
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Your Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg py-3 px-[14px] text-body-color text-base border border-black outline-none focus-visible:shadow-none 
                    focus:border-primary transition hover:bg-gray-300"
                    required
                />
            </div>
            <div className="mb-6">
                <textarea
                    rows="6"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-y outline-none focus-visible:shadow-none 
                    focus:border-primary transition hover:bg-gray-300"
                ></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full bg-blue-800 text-white bg-primary rounded-lg border border-primary p-3 transition hover:bg-opacity-90"
                >
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default ContactForm
