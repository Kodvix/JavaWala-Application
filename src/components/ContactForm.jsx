import React, { useState, useRef } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        course: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    // Refs for each input field
    const inputRefs = {
        firstName: useRef(),
        lastName: useRef(),
        phone: useRef(),
        email: useRef(),
        course: useRef(),
        message: useRef(),
    };

    const handleEnterKey = (e, currentField) => {
        if (e.key === "Enter") {
            e.preventDefault(); // prevent form submission on Enter
            const fields = Object.keys(inputRefs);
            const currentIndex = fields.indexOf(currentField);
            const nextField = fields[currentIndex + 1];
            if (nextField && inputRefs[nextField].current) {
                inputRefs[nextField].current.focus();
            }
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be 10 digits";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Invalid email address";
        }

        if (!formData.course) newErrors.course = "Please select a course";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("submitting");

        const formPayload = new FormData();
        formPayload.append("name", `${formData.firstName} ${formData.lastName}`);
        formPayload.append("phone", formData.phone);
        formPayload.append("email", formData.email);
        formPayload.append("course", formData.course);
        formPayload.append("message", formData.message);

        try {
            const response = await fetch("https://formspree.io/f/xkgzpkgy", {
                method: "POST",
                body: formPayload,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    course: "",
                    message: "",
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-lg"
        >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>

           
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="w-full">
                    <label className="block mb-1 text-gray-700">First Name</label>
                    <input
                        ref={inputRefs.firstName}
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onKeyDown={(e) => handleEnterKey(e, "firstName")}
                        className={`w-full px-3 py-2 rounded-md border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-300`}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div className="w-full">
                    <label className="block mb-1 text-gray-700">Last Name</label>
                    <input
                        ref={inputRefs.lastName}
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onKeyDown={(e) => handleEnterKey(e, "lastName")}
                        className={`w-full px-3 py-2 rounded-md border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-300`}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
            </div>

           
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Phone Number</label>
                <input
                    ref={inputRefs.phone}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnterKey(e, "phone")}
                    placeholder="Enter 10-digit number"
                    className={`w-full px-3 py-2 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-300`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

           
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Email</label>
                <input
                    ref={inputRefs.email}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnterKey(e, "email")}
                    className={`w-full px-3 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-300`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Select Course</label>
                <select
                    ref={inputRefs.course}
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnterKey(e, "course")}
                    className={`w-full px-3 py-2 rounded-md border ${errors.course ? 'border-red-500' : 'border-gray-300'} bg-white focus:outline-none focus:ring-2 focus:ring-green-300`}
                >
                    <option value="">-- Choose a Course --</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Java (Spring Boot)">Java (Spring Boot)</option>
                    <option value="React.js">React.js</option>
                    <option value="Python + Data Science">Python + Data Science</option>
                    <option value="Frontend (HTML/CSS/JS)">Frontend (HTML/CSS/JS)</option>
                </select>
                {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
            </div>

           
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Message</label>
                <textarea
                    ref={inputRefs.message}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-3 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-300`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            
            <div className="flex justify-center">
                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-1/2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
            </div>

            
            {status === "success" && (
                <p className="mt-4 text-green-600 text-center">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
                <p className="mt-4 text-red-600 text-center">❌ Something went wrong. Please try again.</p>
            )}
        </form>
    );
}
