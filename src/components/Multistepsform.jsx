import { useState, useEffect } from "react";
import { courses } from "../Data/courses";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        course: "",
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            handleSubmit();
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        setShowPopup(true);
        setFormData({ name: "", phone: "", email: "", course: "" });
        setStep(1);
    };

    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => setShowPopup(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showPopup]);

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-16">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl shadow-2xl w-full max-w-3xl p-10 transition-all duration-500 text-white">
                <h2 className="text-3xl font-bold text-center mb-8">
                    🚀 Book a Free Counselling Session
                </h2>

                {/* Step Indicator */}
                <div className="flex justify-center mb-8 space-x-2">
                    {[1, 2, 3, 4].map((s) => (
                        <div
                            key={s}
                            className={`h-2 w-12 rounded-full transition-all duration-300 ${step >= s ? "bg-white" : "bg-gray-600"}`}
                        />
                    ))}
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleNext();
                    }}
                    className="flex flex-col gap-6"
                >
                    {step === 1 && (
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="p-4 bg-black/30 text-white placeholder:text-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    )}

                    {step === 2 && (
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="p-4 bg-black/30 text-white placeholder:text-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    )}

                    {step === 3 && (
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="p-4 bg-black/30 text-white placeholder:text-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    )}

                    {step === 4 && (
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="p-4 bg-black/30 text-white placeholder:text-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        >
                            <option value="">Select a course</option>
                            {courses.map((course) => (
                                <option key={course.id} value={course.title} className="text-black">
                                    {course.title}
                                </option>
                            ))}
                        </select>
                    )}

                    <div className="flex justify-between mt-4">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={handleBack}
                                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-xl transition"
                            >
                                ⬅ Back
                            </button>
                        )}

                        <button
                            type="submit"
                            className="bg-white text-black font-bold px-6 py-2 rounded-xl hover:bg-gray-300 transition ml-auto"
                        >
                            {step < 4 ? "Next ➡" : "Submit ✅"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed top-5 right-5 bg-green-700/80 text-white px-6 py-4 rounded-xl shadow-xl backdrop-blur-md animate-fade-in-out z-50">
                    <strong>🎉 Thank you!</strong> We will contact you soon.
                </div>
            )}
        </div>
    );
}
