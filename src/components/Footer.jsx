import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setMessage("Email cannot be empty.");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("https://formspree.io/f/mvgwpbog", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage("Subscribed successfully!");
                setEmail("");
            } else {
                setMessage("Oops! Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            setMessage("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="bg-black text-gray-300 py-12 px-6 md:px-20 mt-[20px]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Javawala 🚀</h2>
                    <p className="text-sm mb-4">
                        Empowering future developers with real-world skills, mentorship, and career-ready programs.
                    </p>
                    <div className="flex space-x-4 text-lg">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Quick Links + Contact Info */}
                <div className="grid grid-cols-2 gap-6 text-gray-300">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link to="/explore" className="hover:text-white transition">Courses</Link></li>
                            <li><Link to="/aboutus" className="hover:text-white transition">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt /> +91 12345 67890
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope /> support@javawala.com
                            </li>
                            <li className="flex items-center gap-2">
                                <FaMapMarkerAlt /> Indore, India
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
                    <p className="text-sm mb-4">Get the latest updates, offers, and resources straight to your inbox.</p>
                    <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium transition ${loading ? "opacity-60 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading ? "Subscribing..." : "Subscribe"}
                        </button>
                    </form>
                    {message && <p className="text-sm mt-2 text-white/80">{message}</p>}
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Javawala. All rights reserved.
            </div>
        </footer>
    );
}
