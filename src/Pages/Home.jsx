import { useState, useRef, useEffect } from "react";
import { courses } from "../Data/courses";
import CourseCard from "../components/CourseCard";
import { FaRocket, FaUserTie, FaHandshake } from "react-icons/fa";
import { FaUsers, FaClipboardCheck, FaTrophy, FaIndustry, FaUserGraduate, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";
import indust from '../assets/indust.jpg';
import { SiImessage } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import {
    FaPlus,
    FaWhatsapp,
    FaLinkedin,
    FaInstagram,
    FaGoogle,
} from "react-icons/fa";
import {
    FaTwitter,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Home() {
    const location = useLocation();

    const [showSocials, setShowSocials] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const courseSectionRef = useRef();
    const scrollRef = useRef();
    const featuresScrollRef = useRef();

    // Course scroll functions
    const scrollLeft = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const cardWidth = container.offsetWidth; // Use full container width
            const newIndex = Math.max(0, currentIndex - 1);
            setCurrentIndex(newIndex);
            container.scrollTo({
                left: newIndex * cardWidth,
                behavior: "smooth"
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const cardWidth = container.offsetWidth; // Use full container width
            const maxIndex = courses.length - 1;
            const newIndex = Math.min(maxIndex, currentIndex + 1);
            setCurrentIndex(newIndex);
            container.scrollTo({
                left: newIndex * cardWidth,
                behavior: "smooth"
            });
        }
    };

    
    useEffect(() => {
        if (location.hash === "#courses") {
            const section = document.getElementById("courses");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    // Auto-scroll for courses (optional - remove if you don't want auto-scroll)
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current && window.innerWidth < 1280) { // Only on mobile/tablet
                const maxIndex = courses.length - 1;
                const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
                setCurrentIndex(nextIndex);

                const cardWidth = scrollRef.current.offsetWidth;
                scrollRef.current.scrollTo({
                    left: nextIndex * cardWidth,
                    behavior: "smooth"
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const features = [
        {
            title: "Industry-Focused Curriculum",
            icon: <FaRocket size={40} />,
            description:
                "Our courses are designed by working professionals with insights into current industry demands, ensuring you're always ahead.",
        },
        {
            title: "Expert Mentors",
            icon: <FaUserTie size={40} />,
            description:
                "Get direct access to experts from top companies, ready to guide you with personalized feedback and mentorship.",
        },
        {
            title: "Placement Support",
            icon: <FaHandshake size={40} />,
            description:
                "We help you get job-ready with resume polishing, mock interviews, referral support, and placement drives.",
        },
    ];

    return (
        <>
            {/* HERO SECTION WITH IMAGE + TEXT SPLIT */}
            <section
                className="relative w-full min-h-1/2 pt-10 px-4 sm:px-6 md:px-20 bg-[#C4E1E6] shadow-xl "
                style={{
                    borderTopLeftRadius: "60px",
                    borderTopRightRadius: "60px",
                    zIndex: 9999,
                }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-[1440px] mx-auto">

                    {/* ✅ Text Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                            {/* Animated Heading */}
                            <motion.h1
                                className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 leading-snug sm:leading-tight mt-1 whitespace-nowrap"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Learn. Build. Get Placed.
                            </motion.h1>
                        </div>

                        <motion.p
                            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-md leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Industry-focused training programs with real-time projects, internships, and 100% placement assistance to launch your career in tech.
                        </motion.p>
                    </div>

                    {/* ✅ Sticky Notes Section */}
                    <div className="w-full md:w-1/3 flex flex-col sm:flex-row md:flex-col flex-wrap justify-center items-center gap-4 mb-4">
                        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-xl shadow-md w-full rotate-[-2deg] hover:animate-bounceOnce hover:shadow-yellow-500 transition-transform duration-300">
                            <div className="flex items-center gap-2 text-base sm:text-lg font-semibold">
                                <SiImessage className="text-yellow-500" />
                                Hello, Wassup!
                            </div>
                            <p className="text-sm text-gray-700 mt-1">Sam</p>
                        </div>

                        <div className="bg-green-100 border-l-4 border-green-400 p-4 rounded-xl shadow-md w-full rotate-[1deg] hover:animate-bounceOnce hover:shadow-green-500 transition-transform duration-300">
                            <div className="flex items-center gap-2 text-base sm:text-lg font-semibold">
                                <SiImessage className="text-green-600" />
                                I am good, just exploring Javawala
                            </div>
                            <p className="text-sm text-gray-700 mt-1">Honey</p>
                        </div>

                        <div className="bg-blue-100 border-l-4 border-blue-400 p-4 rounded-xl shadow-md w-full rotate-[-1deg] hover:animate-bounceOnce hover:shadow-blue-500 transition-transform duration-300">
                            <div className="flex items-center gap-2 text-base sm:text-lg font-semibold">
                                <SiImessage className="text-blue-600" />
                                Oh that's great, let's explore together!
                            </div>
                            <p className="text-sm text-gray-700 mt-1">Sam</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* COURSE SECTION */}
            <section
                id="courses"
                ref={courseSectionRef}
                className="relative pt-10 sm:pt-14 md:pt-12 p-6 pb-8 bg-white shadow-xl min-h-screen z-20"
                style={{ zIndex: 9999 }}
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
                        Our Courses
                    </h2>

                    {/* Conditional rendering based on screen size */}
                    <div className="relative w-full">
                        {/* Mobile/Tablet Scrollable View - Show one card at a time */}
                        <div className="block xl:hidden">
                            {/* Navigation Arrows - Positioned outside the scroll container */}
                            <div className="flex justify-between items-center mb-4">
                                <button
                                    onClick={scrollLeft}
                                    disabled={currentIndex === 0}
                                    className={`p-3 rounded-full shadow-lg transition-all z-10 ${currentIndex === 0
                                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : 'bg-white hover:bg-gray-100 text-gray-700 hover:shadow-xl border'
                                        }`}
                                >
                                    <FaChevronLeft size={16} />
                                </button>

                                <div className="text-center text-sm text-gray-500">
                                    {currentIndex + 1} of {courses.length}
                                </div>

                                <button
                                    onClick={scrollRight}
                                    disabled={currentIndex === courses.length - 1}
                                    className={`p-3 rounded-full shadow-lg transition-all z-10 ${currentIndex === courses.length - 1
                                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : 'bg-white hover:bg-gray-100 text-gray-700 hover:shadow-xl border'
                                        }`}
                                >
                                    <FaChevronRight size={16} />
                                </button>
                            </div>

                            {/* Cards Scroll Area - Single card display on mobile, perfectly centered */}
                            <div className="w-full overflow-hidden">
                                <div
                                    className="flex transition-transform duration-300 ease-in-out"
                                    ref={scrollRef}
                                    style={{
                                        transform: `translateX(-${currentIndex * 100}%)`,
                                    }}
                                >
                                    {courses.map((course) => (
                                        <div key={course.id} className="flex-shrink-0 w-full flex justify-center px-4">
                                            <div className="w-full max-w-[320px]">
                                                <CourseCard course={course} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pagination dots */}
                            <div className="flex justify-center gap-2 mt-6">
                                {courses.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setCurrentIndex(index);
                                            if (scrollRef.current) {
                                                scrollRef.current.style.transform = `translateX(-${index * 100}%)`;
                                            }
                                        }}
                                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                                ? 'bg-blue-600 scale-125'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Desktop Grid View - Centered */}
                        <div className="hidden xl:block">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center max-w-fit mx-auto">
                                {courses.map((course) => (
                                    <div key={course.id} className="w-[300px]">
                                        <CourseCard course={course} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Action Button */}
                <div className="fixed bottom-6 right-6 z-50">
                    <div
                        className={`flex flex-col items-end gap-3 mb-3 transition-all duration-300 ${showSocials ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                    >
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="mailto:example@gmail.com"
                            className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
                        >
                            <FaGoogle />
                        </a>
                    </div>

                    <button
                        onClick={() => setShowSocials(!showSocials)}
                        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:rotate-45 transition-transform duration-300"
                    >
                        <FaPlus className="text-lg" />
                    </button>
                </div>

                <div className="w-full mt-1 bg-white shadow-xl text-black min-h-screen py-0 space-y-10 rounded-2xl">

                    {/* Why Choose Us */}
                    <section className="pt-4 sm:pt-8 md:pt-16 pb-10 bg-white px-4 md:px-12">
                        <h2 className="text-3xl font-bold text-center mb-6 sm:mb-10 text-blue-600">
                            Why Choose Us?
                        </h2>

                        {/* Desktop Grid View */}
                        <div className="hidden md:grid md:grid-cols-3 gap-8 items-stretch">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group bg-gray-900 px-5 py-6 rounded-xl shadow-xl w-full max-w-sm mx-auto min-h-[260px] flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-105"
                                >
                                    <div className="bg-gradient-to-br from-orange-500 to-yellow-400 text-white p-4 rounded-full mb-4 transform transition-transform duration-500 group-hover:rotate-[360deg]">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                                    <p className="text-gray-300 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Horizontal Scroll View with arrows */}
                        <div className="block md:hidden relative">
                            {/* Left Arrow for features */}
                           
                            {/* Right Arrow for features */}
                           

                            <div
                                className="overflow-x-auto scrollbar-hide px-2"
                                ref={featuresScrollRef}
                            >
                                <div className="flex gap-4 w-max px-1">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0 w-[72vw] bg-gray-900 px-4 py-5 rounded-xl shadow-xl min-h-[220px] flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-105"
                                        >
                                            <div className="bg-gradient-to-br from-orange-500 to-yellow-400 text-white p-3 rounded-full mb-3 transform transition-transform duration-500 group-hover:rotate-[360deg]">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                                            <p className="text-gray-300 text-sm">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Placement History Section */}
                    <section className="bg-white py-3 px-4 sm:px-6 md:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
                            Placement Process
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                {
                                    icon: <FaUsers />,
                                    title: "Connect with us",
                                    description: "Join our community and get personalized course recommendations.",
                                    bg: "bg-green-100",
                                    text: "text-green-800",
                                },
                                {
                                    icon: <FaClipboardCheck />,
                                    title: "Enroll Our Courses",
                                    description: "Become expertise in your field & Job ready with 100% placement assistant",
                                    bg: "bg-blue-100",
                                    text: "text-blue-800",
                                },
                                {
                                    icon: <FaTrophy />,
                                    title: "Get a Job offer ",
                                    description: "Get a job offer in top MNCs and product-based companies.",
                                    bg: "bg-yellow-100",
                                    text: "text-yellow-800",
                                },
                            ].map(({ icon, title, description, bg, text }, index) => (
                                <div
                                    key={index}
                                    className={`${bg} p-5 rounded-xl shadow-lg flex flex-col gap-2 hover:scale-[1.02] transition-transform duration-300`}
                                >
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className={`text-2xl ${text}`}
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        >
                                            {icon}
                                        </motion.div>
                                        <h3 className={`text-lg font-bold ${text}`}>{title}</h3>
                                    </div>
                                    <p className="text-gray-700 text-sm">{description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* What Makes Us Different Section */}
                    <section className="relative bg-gray-900 text-white py-10 px-6 md:px-20 overflow-hidden">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={indust}
                                alt="Industrial Training"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-6xl mx-auto">
                            <h2 className="text-2xl font-bold text-center mb-12 text-white">
                                What Makes Us Different?
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: <FaIndustry />,
                                        title: "Industrial Training",
                                        description:
                                            "We go beyond theory—our training includes actual industrial tools, practices, and workflows.",
                                    },
                                    {
                                        icon: <FaUserGraduate />,
                                        title: "Internship in Our Own Company",
                                        description:
                                            "High-performing students get the opportunity to intern within our organization itself.",
                                    },
                                    {
                                        icon: <FaProjectDiagram />,
                                        title: "Real-Time Projects",
                                        description:
                                            "Work on real-world projects with actual deliverables, giving you confidence and credibility.",
                                    },
                                ].map(({ icon, title, description }, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 transition hover:scale-105 hover:shadow-blue-400"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                    >
                                        <div className="flex items-center gap-4 mb-4 text-blue-300 text-3xl">
                                            <motion.div
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                            >
                                                {icon}
                                            </motion.div>
                                            <h3 className="text-xl font-semibold text-white">{title}</h3>
                                        </div>
                                        <p className="text-gray-300">{description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
                    <button
                        onClick={() =>
                            courseSectionRef.current?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-gray-900 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
                    >
                        Explore Courses
                    </button>

                    <Link
                        to="/contact"
                        className="bg-gray-900 border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            <footer className="bg-black text-gray-300 py-12 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Javawala 🚀</h2>
                        <p className="text-sm mb-4">
                            Empowering future developers with real-world skills, mentorship, and career-ready programs.
                        </p>
                        <div className="flex space-x-4 text-lg">
                            <a href="#" className="hover:text-white transition">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-white transition">
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
                                <li><a href="#" className="hover:text-white transition">Home</a></li>
                                <li><a href="#courses" className="hover:text-white transition">Courses</a></li>
                                <li><a href="/aboutus" className="hover:text-white transition">About Us</a></li>
                                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2">
                                    <FaPhoneAlt /> +91 8109600225
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaEnvelope /> connect@javawala.com
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
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Javawala. All rights reserved.
                </div>
            </footer>
        </>
    );
}