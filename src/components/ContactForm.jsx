
function ContactForm({
     handleSubmit,
        name,
        handleNameChange,
        email,
        handleEmailChange,
        phone,
        handlePhoneChange,
        message,
        handleMessageChange,
     }) {


    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleNameChange}
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
                    onChange={handleEmailChange}
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
                    onChange={handlePhoneChange}
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
                    onChange={handleMessageChange}
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
