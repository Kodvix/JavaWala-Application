import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Form from "../components/Form";
import Footer from "../components/Footer";
import cardbg from "../assets/cardbg.jpg";

const paragraphs = [
    "Learn from experienced professionals with real industry exposure. Our programs simulate real workflows, tools, and challenges to prepare you for real-world success.",
    "Get hands-on internship experience with project-based certification. Work on live projects, collaborate with professionals, and boost your career profile.",
    "Receive placement support, mock interviews, and MNC referrals. Build your portfolio and stand out with real project experience.",
];

const cardData = [
    {
        title: "Hands-On Learning",
        text: "Practical assignments and real-time projects that help you learn by doing.",
    },
    {
        title: "Mentorship",
        text: "Get guided by industry professionals to accelerate your learning journey.",
    },
    {
        title: "Placement Prep",
        text: "Mock interviews, referrals, and MNC connections to boost your career.",
    },
];

export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="text-black min-h-screen w-full overflow-x-hidden">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto px-4 pt-12 mb-12"
            >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-blue-600">
                    About Javawala
                </h1>
                <p className="text-blue-700 text-base sm:text-lg">
                    Empowering you with skills in Java, Spring Boot, React, DevOps, and beyond.
                </p>
            </motion.div>

            {/* Paragraphs Section */}
            <div className="px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto space-y-1">
                {paragraphs.map((text, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="text-blue-900 text-base sm:text-lg leading-relaxed text-center"
                    >
                        {text}
                    </motion.p>
                ))}
            </div>

            {/* Triangle Card Section */}
            <section className="mt-20 px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Big Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-2xl shadow-lg p-8 h-full flex flex-col justify-center overflow-hidden"
                        style={{
                            backgroundImage: `linear-gradient(rgba(37,99,235,0.85), rgba(59,130,246,0.7)), url(${cardbg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white drop-shadow">{cardData[0].title}</h3>
                        <p className="text-white drop-shadow">{cardData[0].text}</p>
                    </motion.div>

                    {/* Right Side → Two stacked cards */}
                    <div className="flex flex-col gap-10">
                        {cardData.slice(1).map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800 rounded-2xl shadow-lg p-6"
                            >
                                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                                <p>{card.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}


            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center mt-10 mb-16"
            >
                <Link
                    to="/contact"
                    className="bg-orange-500 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base sm:text-lg transition-all duration-300 shadow-md"
                >
                    🚀 Reach Us Now
                </Link>
            </motion.div>

            {/* CTA + Form Section */}
            <section className="bg-blue-500 pt-16 pb-20 mb-[-20px]">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <div className="text-white text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-4">Need help getting started?</h2>
                        <p className="text-lg">
                            Your dreams are valid, let's make them happen together.
                        </p>
                    </div>

                    {/* Right Side (Form) */}
                    <div>
                        <Form />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
