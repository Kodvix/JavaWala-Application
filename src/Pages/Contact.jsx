import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";

export default function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const firstNameInputRef = useRef(null);

    useEffect(() => {
        if (location.state?.focus && firstNameInputRef.current) {
            firstNameInputRef.current.focus();
        }
    }, [location]);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.phone.trim()) {
            alert("Please fill in all required fields.");
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email.");
            return;
        }

        // Simple phone validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/mvgwpbog", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Network error. Please try again later.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-cyan-400 to-blue-500 text-white">
            <div className="flex flex-1 flex-col md:flex-row w-full container mx-auto px-4 py-0">
                {/* Left: Contact Info */}
                <div className="flex-1 px-8 py-10 flex flex-col justify-center">
                    <p className="text-lg font-semibold">Contact us</p>
                    <h2 className="text-4xl sm:text-5xl font-bold my-4">How can we help you Today?</h2>
                    <p className="mb-8 text-lg">Fill the form and drop a message</p>

                    <div className="space-y-5 text-lg">
                        <div className="flex items-center gap-4 p-4 border border-white/50 rounded-lg">
                            <FaPhoneAlt className="text-white text-xl" />
                            <span>+91 8109 600 225</span>
                        </div>
                        <div className="flex items-center gap-4 p-4 border border-white/50 rounded-lg">
                            <FaEnvelope className="text-white text-xl" />
                            <span>Connect@javaWala.com</span>
                        </div>
                        <div className="flex items-center gap-4 p-4 border border-white/50 rounded-lg">
                            <FaMapMarkerAlt className="text-white text-xl" />
                            <span>Indore, India</span>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="flex-1 px-8 py-10 flex items-center justify-center">
                    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                        {submitted ? (
                            <div className="text-green-700 font-medium bg-green-100 border border-green-200 px-4 py-3 rounded-md text-sm">
                                ✅ Thank you! We’ll get back to you shortly.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        ref={firstNameInputRef}
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-gray-700"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-gray-700"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-gray-700"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-gray-700"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        required
                                        className="w-full px-4 py-3 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none text-sm text-gray-700"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md shadow-md transition text-base font-semibold"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
