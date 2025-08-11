import React, { useState } from "react";
import { FaLaptopCode, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const features = [
    {
        title: "Expert-Led Training",
        icon: <FaChalkboardTeacher className="text-4xl sm:text-5xl text-green-400" />,
        description: "Learn from experienced professionals with real industry exposure.",
        details:
            "Our programs simulate real industry workflows, tools, and challenges for students and freshers."
    },
    {
        title: "Internship + Certification",
        icon: <FaLaptopCode className="text-4xl sm:text-5xl text-blue-400" />,
        description: "Hands-on internships with project-based certification.",
        details:
            "Work on live projects, collaborate with professionals, and receive internship letters & certificates."
    },
    {
        title: "Job-Oriented Programs",
        icon: <FaBriefcase className="text-4xl sm:text-5xl text-yellow-400" />,
        description: "Placement support, mock interviews, and MNC referrals.",
        details:
            "Sharpen communication, build portfolios, and stand out with real project experience."
    }
];

export default function AboutUs() {
    const [flipped, setFlipped] = useState(Array(features.length).fill(false));

    const toggleFlip = (index) => {
        const updated = [...flipped];
        updated[index] = !updated[index];
        setFlipped(updated);
    };

    return (
        <div className="bg-[#C4E1E6] text-black px-4 sm:px-6 pt-10 pb-10 min-h-screen">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto mb-12"
            >
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">About Javawala </h1>
                <p className="text-[#254D70] text-base sm:text-lg">
                    Empowering you with skills in Java, Spring Boot, React, DevOps, and beyond.
                </p>
            </motion.div>

            {/* Features with horizontal scroll on mobile */}
            <div className="overflow-x-auto sm:overflow-visible">
                <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto sm:auto-cols-auto min-w-[640px] sm:min-w-0">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            onClick={() => toggleFlip(index)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative h-80 sm:h-96 w-72 sm:w-auto flex-shrink-0 cursor-pointer group"
                        >
                            <div className={`flip-card ${flipped[index] ? "flipped" : ""}`}>
                                <div className="flip-face absolute w-full h-full bg-[#1e1e1e]/90 rounded-xl flex flex-col items-center justify-center shadow-lg text-center p-4 space-y-3">
                                    {feature.icon}
                                    <h3 className="text-lg sm:text-xl font-bold text-white">{feature.title}</h3>
                                    <p className="text-gray-300 text-sm">{feature.description}</p>
                                    <p className="text-gray-400 text-xs mt-1">Tap to flip 🧱</p>
                                </div>
                                <div
                                    className="flip-face absolute w-full h-full bg-[#A0C878]/90 rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-lg"
                                    style={{ transform: "rotateY(180deg)" }}
                                >
                                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{feature.title}</h3>
                                    <p className="text-black text-sm">{feature.details}</p>
                                    <p className="text-black text-xs mt-2">Tap to flip back 🧱</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div
                className="mt-20 bg-cover bg-center bg-no-repeat py-16 sm:py-20 px-4"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80')`,
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="bg-black/70 rounded-xl max-w-4xl mx-auto p-6 sm:p-8 shadow-xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">Let's Connect 📬</h2>
                    <p className="text-center text-gray-300 mb-6">
                        Want to enroll or learn more? Drop us a message below.
                    </p>
                    <ContactForm />
                </div>
            </div>

            {/* Why Javawala */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto mt-16 bg-[#1a1a1a] p-5 sm:p-6 rounded-xl text-gray-200"
            >
                <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3">Why Choose Javawala?</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Live project exposure with corporate mentors</li>
                    <li>Curriculum in Java, Spring Boot, React, DevOps</li>
                    <li>Mock interviews & resume sessions</li>
                    <li>Internship letter + Completion certificate</li>
                    <li>Placement drives with startups & MNCs</li>
                </ul>
            </motion.div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center mt-10"
            >
                <Link
                    to="/contact"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-base sm:text-lg transition-all duration-300"
                >
                    🚀 Reach Us Now
                </Link>
            </motion.div>

            <style>{`
                .flip-card {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    transform-style: preserve-3d;
                    transition: transform 0.8s;
                }
                .flip-card.flipped {
                    transform: rotateY(180deg);
                }
                .flip-face {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
            `}</style>
        </div>
    );
}
