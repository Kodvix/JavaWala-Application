import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { successStories } from "../Data/studentSuccessData";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function SuccessStories() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-white text-gray-800 min-h-screen">
            {/* Hero Section */}
            <section
                className="relative w-full h-[70vh] flex items-center justify-start text-left"
                style={{
                    backgroundImage: `url('/src/assets/assetshero.jpeg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                <div className="relative z-10 max-w-3xl px-4 sm:px-8 md:px-12 lg:px-20">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
                        "These success stories didn’t start with confidence — they started
                        with curiosity, late-night errors, and the will to keep going. Line
                        by line, they built their future in code."
                    </h1>
                    <p className="mt-4 text-lg text-white">— Vedansh Naik</p>
                </div>
            </section>

            {/* Stories Section */}
            <div className="py-12 md:py-16 px-4 md:px-20">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900">
                    Stories
                </h2>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {successStories.map((student, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md border border-gray-200 gap-4 md:gap-8"
                            >
                                {/* Icon Side */}
                                <div className="flex items-center justify-center w-24 h-24 md:w-40 md:h-40 rounded-full bg-blue-100 shadow-lg">
                                    <FaUser className="text-5xl md:text-7xl text-blue-600" />
                                </div>

                                {/* Content Side */}
                                <div className="text-center md:text-left">
                                    <p className="italic text-gray-600 text-md max-w-xl">
                                        “{student.testimonial}”
                                    </p>
                                    <h3 className="text-xl font-semibold text-gray-800 mt-4">
                                        — {student.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {student.course}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Contact Section */}
            <section className="bg-blue-500 py-12 md:py-16 mb-[-21px]">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Side */}
                    <div className="text-white text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Need help getting started?
                        </h2>
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

            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
