import { useState, useRef ,useEffect} from "react";
import { courses } from "../Data/courses";
import CourseCard from "../components/CourseCard";
import { FaRocket, FaUserTie, FaHandshake } from "react-icons/fa";
import { FaUsers, FaClipboardCheck, FaTrophy, FaIndustry, FaUserGraduate, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";
import indust from '../assets/indust.jpg';
import { SiImessage } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    const [showSocials, setShowSocials] = useState(false);
    const courseSectionRef = useRef();
   
    const scrollRef = useRef();

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };
  
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const container = scrollRef.current;
                const cardWidth = container.firstChild?.firstChild?.offsetWidth || 0;
                const maxScroll = container.scrollWidth - container.clientWidth;

                if (container.scrollLeft + cardWidth >= maxScroll) {
                    container.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    container.scrollBy({ left: cardWidth, behavior: "smooth" });
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);
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
                className="relative w-full min-h-1/2 pt-10 px-4 sm:px-6 md:px-20 bg-[#C4E1E6] shadow-xl"
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
                                Oh that’s great, let’s explore together!
                            </div>
                            <p className="text-sm text-gray-700 mt-1">Sam</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* COURSE SECTION */}
            {/* COURSE SECTION */}
            <section
                ref={courseSectionRef}
                id="courses"
                className="relative pt-10 sm:pt-14 md:pt-24 p-6 pb-8 bg-white shadow-xl min-h-screen z-20"
                style={{ zIndex: 9999 }}
            >
                {/* Scrollable Container with Arrows */}
                <div className="relative w-full">
                    {/* Left Arrow */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-md"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-md"
                    >
                        <FaChevronRight />
                    </button>

                    {/* Cards Scroll Area */}
                    <div
                        className="w-full overflow-x-auto scrollbar-hide px-1"
                        ref={scrollRef}
                    >
                        <div className="flex gap-8 px-6">
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="flex-shrink-0 w-[300px]"
                                >
                                    <CourseCard course={course} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Floating Action Button with Social Links */}
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

                        {/* Mobile Horizontal Scroll View */}
                        <div
                            className="block md:hidden overflow-x-auto scrollbar-hide px-2"
                            ref={scrollRef}
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
                    </section>

                    {/* Placement History Section */}
                    <section className="bg-white py-3 px-4 sm:px-6 md:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
                            Placement History
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                {
                                    icon: <FaUsers />,
                                    title: "500+ Students Placed",
                                    description: "Across top MNCs and product-based companies.",
                                    bg: "bg-green-100",
                                    text: "text-green-800",
                                },
                                {
                                    icon: <FaClipboardCheck />,
                                    title: "100% Placement Assistance",
                                    description: "From resume to referrals and mock interviews.",
                                    bg: "bg-blue-100",
                                    text: "text-blue-800",
                                },
                                {
                                    icon: <FaTrophy />,
                                    title: "Real Alumni Success",
                                    description: "Our students are now working at TCS, Infosys, Capgemini & more.",
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
                                <li><a href="#" className="hover:text-white transition">Courses</a></li>
                                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition">Contact</a></li>
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
