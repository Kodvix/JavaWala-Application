import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://formspree.io/f/mwpqjrdp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ firstName: "", lastName: "", email: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (err) {
            alert("Network error. Please try again later.");
        }
    };

    return (
        <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center px-4 py-4">
            <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">

                {/* Left: Contact Info */}
                <div className="bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff] text-gray-800 px-6 py-8 md:w-1/2 w-full">
                    <div className="flex flex-col h-full justify-start">
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact Javawala</h2>
                        <p className="mb-6 text-gray-700 text-sm leading-relaxed">
                            Have questions about our training programs? <br />
                            Reach out and we’ll help you get started on your learning journey.
                        </p>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-blue-500" />
                                <span>Info@javawala.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPhoneAlt className="text-blue-500" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-blue-500" />
                                <span>Indore, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="p-6 md:w-1/2 w-full bg-white">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">Send Us a Message</h3>

                    {submitted ? (
                        <div className="text-green-700 font-medium bg-green-100 border border-green-200 px-4 py-3 rounded-md text-sm">
                            ✅ Thank you! We’ll get back to you shortly.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4 text-sm">

                            {/* First & Last Name */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-gray-600">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="block mb-1 text-gray-600">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-1 text-gray-600">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block mb-1 text-gray-600">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none text-sm"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow-sm transition text-sm"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
