import React, { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!name.trim() || !email.trim() || !phone.trim()) {
            setStatus("Name, Email, and Phone cannot be empty.");
            return;
        }

        // Simple email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus("Please enter a valid email address.");
            return;
        }

        // Simple phone number validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            setStatus("Please enter a valid 10-digit phone number.");
            return;
        }

        setLoading(true);
        setStatus('');

        try {
            const response = await fetch('https://formspree.io/f/mvgwpbog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, message })
            });

            if (response.ok) {
                setStatus("Thank you! We'll get back to you soon.");
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            } else {
                setStatus('Oops! Something went wrong.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-orange-500"
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-orange-500"
                />
            </div>
            <div>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-orange-500"
                />
            </div>
            <div>
                <textarea
                    placeholder="Your Message"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-orange-500"
                ></textarea>
            </div>
            {status && <p className="text-white text-sm">{status}</p>}
            <div className="text-center">
                <button
                    type="submit"
                    disabled={loading}
                    className={`bg-orange-500 text-white font-bold py-2 px-8 rounded-md hover:bg-orange-600 transition duration-300 ${loading ? 'opacity-60 cursor-not-allowed' : ''
                        }`}
                >
                    {loading ? "Sending..." : "Enroll Now"}
                </button>
            </div>
        </form>
    );
}
