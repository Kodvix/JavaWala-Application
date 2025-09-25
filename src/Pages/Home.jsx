import { useState, useRef, useEffect } from "react";
import { courses } from "../Data/courses";
import CourseCard from "../components/CourseCard";
import { FaRocket, FaUserTie, FaHandshake } from "react-icons/fa";
import { FaUsers, FaClipboardCheck, FaTrophy, FaIndustry, FaUserGraduate, FaProjectDiagram, FaGraduationCap, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import hero from '../assets/hero.png';
import aastro from '../assets/astro-Photoroom.png';
import aastro1 from '../assets/aastro-Photoroom1.png';
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

import { useSearch } from "../context/SearchContext";
import Footer from "../components/Footer";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { searchQuery } = useSearch();
    const [showSocials, setShowSocials] = useState(false);
    const [isLearnersSectionVisible, setIsLearnersSectionVisible] = useState(false);
    const [animatedCounts, setAnimatedCounts] = useState({
        totalLearners: 0,
        placedStudents: 0,
        activeCourses: 0
    });
    const [userName, setUserName] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const courseSectionRef = useRef();
    const learnersSectionRef = useRef();
    const scrollRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    // Intersection Observer for learners section
    useEffect(() => {
        const currentRef = learnersSectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isLearnersSectionVisible) {
                        setIsLearnersSectionVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isLearnersSectionVisible]);

    // Animate counters when section becomes visible
    useEffect(() => {
        if (isLearnersSectionVisible) {
            const targets = {
                totalLearners: 2500,
                placedStudents: 500,
                activeCourses: 15
            };

            const duration = 2000; // 2 seconds
            const steps = 60; // 60 steps for smooth animation
            const stepDuration = duration / steps;

            let step = 0;
            const timer = setInterval(() => {
                step++;
                const progress = step / steps;

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                setAnimatedCounts({
                    totalLearners: Math.floor(targets.totalLearners * easeOutQuart),
                    placedStudents: Math.floor(targets.placedStudents * easeOutQuart),
                    activeCourses: Math.floor(targets.activeCourses * easeOutQuart)
                });

                if (step >= steps) {
                    clearInterval(timer);
                    // Ensure final values are exact
                    setAnimatedCounts(targets);
                }
            }, stepDuration);

            return () => clearInterval(timer);
        }
    }, [isLearnersSectionVisible]);
    // Removed unused features constant

    return (
        <>
            <section
                className="relative w-full h-auto md:h-screen pt-24 pb-12 md:pt-10 md:pb-0 px-4 sm:px-6 md:px-20 shadow-xl"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #2F80EDCC 0%, #56CCF2CC 0%, #ffffffCC 100%), url(${hero})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 9,
                }}
            >

                {/* ✅ Dark overlay to reduce background highlight */}
                <div className="absolute inset-0 "></div>

                <div className="relative w-full h-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center md:gap-6 z-10">
                    {/* ✅ Left Side: Interactive Java Code */}
                    <motion.div
                        className="w-full md:w-4/12 h-full flex flex-col items-center justify-center text-left md:mr-auto z-10"
                        initial={{ x: 0 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="w-[100%] h-auto md:h-[70%] max-w-xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-gray-300/30 p-5 mx-auto md:mx-0 flex flex-col justify-center mt-2 mr-[20px]">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-semibold text-gray-500">
                                    HelloWorld.java
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-700 text-white border">
                                    Java
                                </span>
                            </div>
                            <pre className="text-sm leading-6 font-mono text-[#39FF14] bg-black rounded-lg p-4 overflow-auto">
                                {`public class HelloWorld {
  public static void main(String[] args) {
    String name = "${submittedName || "YourName"}";
    System.out.println("Hey " + name + ", Learn. Build. Get Placed.");
  }
}`}
                            </pre>
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-500 mb-1">
                                    Enter your name
                                </label>
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            const name = userName.trim();
                                            if (name) {
                                                setSubmittedName(name);
                                            }
                                        }
                                    }}
                                    placeholder="Enter your name to see the magic"
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* ✅ Right Side: Welcome or Animated Output */}
                    <motion.div
                        className="w-full md:w-8/12 h-full flex flex-col justify-center items-center gap-4 md:ml-auto"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {!submittedName ? (
                            // BEFORE NAME (2 lines, white text)
                            <div className="w-full h-full p-8 md:p-12 flex items-center">
                                <div className="w-full flex flex-col md:flex-row items-center md:items-end gap-8">
                                    <div className="flex-1 text-center md:text-left max-w-2xl">
                                        <h3 className="text-[2.75rem] sm:text-5xl md:text-[2.75rem] font-extrabold text-white mb-4 leading-snug md:leading-tight">
                                            Welcome To JavaWala
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed">
                                            Enter your name on the left and press Enter to
                                            see a personalized greeting.
                                        </p>
                                        <div className="mt-5 inline-flex items-center gap-3 text-sm text-gray-500 bg-white/10 border border-gray-400/30 rounded-full px-4 py-2">
                                            <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                                            Ready when you are!
                                        </div>
                                    </div>
                                    <div className="hidden md:block flex-1">
                                        <img
                                            src={aastro}
                                            alt="Welcome"
                                            className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] mx-auto md:ml-auto object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // AFTER NAME (3 lines + greeting design 🎉✨)
                            <div className="relative w-full h-full bg-transparent border-none p-8 md:p-12 flex items-start mt-11">
                                {/* Greeting Sparkles 🎉 */}
                                <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.1, delay: 0.1 }}
                                        className="text-6xl"
                                    >

                                    </motion.div>
                                </div>

                                <div className="w-full flex flex-col md:flex-row items-start md:items-start gap-8 relative z-10">
                                    <div className="flex-1 text-center md:text-left max-w-3xl">
                                        {(() => {
                                            const message = `Hey ${submittedName}!\nWelcome To JavaWala.\nLearn, Build & Get Placed. Together we will achieve your goals.`;
                                            const parts = message.split(/(\n| )/);
                                            return (
                                                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-wide whitespace-pre-line max-w-3xl">
                                                    {parts.map((part, idx) =>
                                                        part === "\n" ? (
                                                            <br key={idx} />
                                                        ) : part === " " ? (
                                                            " "
                                                        ) : (
                                                            <motion.span
                                                                key={idx}
                                                                initial={{ opacity: 0, y: 8 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{
                                                                    duration: 0.20,
                                                                    delay: idx * 0.05,
                                                                }}
                                                                className="inline-block"
                                                            >
                                                                {part}
                                                            </motion.span>
                                                        )
                                                    )}
                                                </div>
                                            );
                                        })()}
                                    </div>
                                    <div className="hidden md:block flex-1">
                                        <img
                                            src={aastro1}
                                            alt="Welcome"
                                            className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] mx-auto md:ml-auto object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>


            {/* COURSE SECTION */}
            {/* COURSE SECTION */}
            <section
                ref={courseSectionRef}
                id="courses"
                className="relative pt-[5rem] sm:pt-14 md:pt-[5rem] p-6 pb-[5rem] bg-white shadow-xl min-h-[51vh] md:min-h-[70vh] z-20"
            >
                {/* Scrollable Container with Arrows */}
                <div className="relative w-full">
                    {/* Left Arrow */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-md md:hidden"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-md md:hidden"
                    >
                        <FaChevronRight />
                    </button>

                    {/* Cards Scroll Area */}
                    <div
                        className="w-full overflow-x-auto scrollbar-hide px-1"
                        ref={scrollRef}
                    >
                        <div className="flex flex-nowrap gap-6 px-6">
                            {courses
                                .filter((course) => {
                                    if (!searchQuery?.trim()) return true;
                                    const q = searchQuery.toLowerCase();
                                    return (
                                        course.title.toLowerCase().includes(q) ||
                                        course.id.toLowerCase().includes(q) ||
                                        course.description.toLowerCase().includes(q)
                                    );
                                })
                                .map((course) => (
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
            </section>

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
            <section
                ref={learnersSectionRef}
                className="py-12 px-4 md:px-8 relative overflow-hidden w-full -mt-16"
            >
                {/* Background Image with overlay and blur */}
                <div className="absolute inset-0">
                    <img
                        src="/src/assets/imageback.jpg"
                        alt="Programming Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-blue-500/60 "></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto pt-[3rem]">
                    <motion.div
                        className="text-center mb-8 pt-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Join Our Growing Community
                        </h2>
                        <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
                            Be part of thousands of learners who have transformed their careers with our industry-leading programs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Total Learners */}
                        <motion.div
                            className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="mb-3">
                                <FaGraduationCap className="text-4xl text-white mx-auto mb-3" />
                            </div>
                            <motion.div
                                className="text-3xl md:text-4xl font-bold text-white mb-1"
                                key={animatedCounts.totalLearners}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {animatedCounts.totalLearners.toLocaleString()}+
                            </motion.div>
                            <h3 className="text-lg font-semibold text-white mb-1">Total Learners</h3>
                            <p className="text-white/80 text-xs">
                                Students enrolled across all our programs
                            </p>
                        </motion.div>

                        {/* Placed Students */}
                        <motion.div
                            className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="mb-3">
                                <FaUsers className="text-4xl text-white mx-auto mb-3" />
                            </div>
                            <motion.div
                                className="text-3xl md:text-4xl font-bold text-white mb-1"
                                key={animatedCounts.placedStudents}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {animatedCounts.placedStudents.toLocaleString()}+
                            </motion.div>
                            <h3 className="text-lg font-semibold text-white mb-1">Successfully Placed</h3>
                            <p className="text-white/80 text-xs">
                                Students who landed their dream jobs
                            </p>
                        </motion.div>

                        {/* Active Courses */}
                        <motion.div
                            className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="mb-3">
                                <FaLaptopCode className="text-4xl text-white mx-auto mb-3" />
                            </div>
                            <motion.div
                                className="text-3xl md:text-4xl font-bold text-white mb-1"
                                key={animatedCounts.activeCourses}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {animatedCounts.activeCourses}+
                            </motion.div>
                            <h3 className="text-lg font-semibold text-white mb-1">Active Courses</h3>
                            <p className="text-white/80 text-xs">
                                Industry-relevant programs available
                            </p>
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        className="text-center mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-block bg-[#EF7722] text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        >
                            Join Our Community Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About Us Section - Full Width */}
            <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-[1.5rem] px-6 md:px-12 w-full">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[40px] md:text-[40px] font-bold mb-6 text-gray-800 mt-[3rem]">
                            Why Choose <span className="text-blue-600">JavaWala</span>?
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Main Content */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    Transforming Careers Through Excellence
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    At JavaWala, we believe that quality education is the foundation of a successful career.
                                    Our mission is to bridge the gap between academic knowledge and industry requirements,
                                    empowering students with practical skills that matter in the real world.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-blue-600 mb-3">
                                    Industry-Focused Learning
                                </h4>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Our curriculum is designed by industry experts and updated regularly to reflect the latest
                                    technologies and market demands. We don't just teach theory – we provide hands-on experience
                                    with real-world projects that prepare you for actual job scenarios.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-blue-600 mb-3">
                                    Expert Mentorship & Support
                                </h4>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Learn from professionals who have worked in top-tier companies. Our mentors provide
                                    personalized guidance, career counseling, and industry insights that you won't find
                                    in traditional classrooms.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-blue-600 mb-3">
                                    100% Placement Assistance
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    From resume building to mock interviews, from referrals to placement drives –
                                    we support you every step of the way until you land your dream job. Our strong
                                    industry connections ensure you get opportunities that align with your career goals.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Side - Visual Elements */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {/* Feature Cards in Vertical */}
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <FaRocket className="text-3xl text-blue-600" />,
                                        title: "Industry-Ready Skills",
                                        description: "Learn technologies used by Fortune 500 companies",
                                        bgColor: "bg-blue-50",
                                        borderColor: "border-blue-200"
                                    },
                                    {
                                        icon: <FaUserTie className="text-3xl text-green-600" />,
                                        title: "Expert Mentors",
                                        description: "Get guidance from professionals with 10+ years experience",
                                        bgColor: "bg-green-50",
                                        borderColor: "border-green-200"
                                    },
                                    {
                                        icon: <FaHandshake className="text-3xl text-purple-600" />,
                                        title: "Career Support",
                                        description: "Complete placement assistance with interview preparation",
                                        bgColor: "bg-green-50",
                                        borderColor: "border-blue-200"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={`${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300`}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="flex justify-center mb-4">
                                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <h5 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h5>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>


                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <Link
                            to="/aboutus"
                            className="inline-block bg-[#EF7722] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Learn More About Us
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Placement Journey Section - Full Width */}
            <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-[1rem] px-6 md:px-12 w-full">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[40px] md:text-[40px] font-bold mb-[0.5rem] text-gray-800 mt-[3rem]">
                            Your <span className="text-blue-600">Placement Journey</span>
                        </h2>
                        <p className="text-[18px] text-gray-600 max-w-4xl mx-auto mb-8">
                            From learning the fundamentals to working on real client projects,
                            we guide you through every step of your career transformation journey.
                        </p>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </motion.div>

                    {/* Journey Steps */}
                    <div className="space-y-16">
                        {/* Step 1: Learning & Training */}
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="space-y-6 h-full flex flex-col">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mt-[20px]">1</div>
                                    <h3 className="text-3xl font-bold text-gray-800">Learning & Training</h3>
                                </div>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Start your journey with our comprehensive curriculum designed by industry experts.
                                    Learn cutting-edge technologies through hands-on projects and real-world scenarios.
                                    Our structured approach ensures you master both theoretical concepts and practical applications.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <FaRocket className="text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Industry-Relevant Curriculum</h4>
                                            <p className="text-gray-600 text-sm">Updated regularly to match current market demands</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaChalkboardTeacher className="text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Expert Mentorship</h4>
                                            <p className="text-gray-600 text-sm">Learn from professionals with 10+ years industry experience</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaLaptopCode className="text-purple-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Hands-on Projects</h4>
                                            <p className="text-gray-600 text-sm">Build real applications and gain practical experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                className="relative h-full"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
                                    <div className="text-center mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <FaGraduationCap className="text-3xl text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-2">Training Impact</h4>
                                        <p className="text-sm text-gray-600">Comprehensive learning outcomes</p>
                                    </div>

                                    {/* Statistics Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="text-center bg-blue-50 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-blue-600">15+</div>
                                            <div className="text-sm text-gray-600">Active Courses</div>
                                        </div>
                                        <div className="text-center bg-green-50 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-green-600">2500+</div>
                                            <div className="text-sm text-gray-600">Students Trained</div>
                                        </div>
                                        <div className="text-center bg-purple-50 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-purple-600">98%</div>
                                            <div className="text-sm text-gray-600">Completion Rate</div>
                                        </div>
                                        <div className="text-center bg-orange-50 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-orange-600">4.8/5</div>
                                            <div className="text-sm text-gray-600">Student Rating</div>
                                        </div>
                                    </div>

                                    {/* Progress Bars */}
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-gray-700">Course Completion</span>
                                                <span className="text-sm text-gray-600">98%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-gray-700">Student Satisfaction</span>
                                                <span className="text-sm text-gray-600">95%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-gray-700">Industry Relevance</span>
                                                <span className="text-sm text-gray-600">100%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Removed Course Categories */}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Step 2: Multiple Capstone Projects */}
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="relative order-2 lg:order-1 h-full"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl h-full flex flex-col">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <FaProjectDiagram className="text-3xl text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-[30px]">Capstone Projects</h4>

                                        {/* Stats as cards: 2 per row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0">
                                            <div className="bg-white/20 border border-white/30 rounded-xl p-4 flex items-center justify-between backdrop-blur-sm">
                                                <h5 className="text-sm font-medium">Project Completion Rate</h5>
                                                <span className="text-lg font-extrabold">98%</span>
                                            </div>
                                            <div className="bg-white/20 border border-white/30 rounded-xl p-4 flex items-center justify-between backdrop-blur-sm">
                                                <h5 className="text-sm font-medium">Client Satisfaction</h5>
                                                <span className="text-lg font-extrabold">95%</span>
                                            </div>
                                            <div className="bg-white/20 border border-white/30 rounded-xl p-4 flex items-center justify-between backdrop-blur-sm">
                                                <h5 className="text-sm font-medium">Projects Delivered</h5>
                                                <span className="text-lg font-extrabold">150+</span>
                                            </div>
                                            <div className="bg-white/20 border border-white/30 rounded-xl p-4 flex items-center justify-between backdrop-blur-sm">
                                                <h5 className="text-sm font-medium">Real Client Projects</h5>
                                                <span className="text-lg font-extrabold">80+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                            <div className="space-y-6 order-1 lg:order-2 h-full flex flex-col">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mt-[20px]">2</div>
                                    <h3 className="text-3xl font-bold text-gray-800">Multiple Capstone Projects</h3>
                                </div>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Apply your learning through multiple real-world capstone projects. Work on actual client
                                    requirements, solve complex business problems, and build production-ready applications.
                                    Each project is designed to simulate real industry scenarios and challenges.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <FaIndustry className="text-orange-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Real Client Projects</h4>
                                            <p className="text-gray-600 text-sm">Work with actual companies and solve genuine business challenges</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaUsers className="text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Team Collaboration</h4>
                                            <p className="text-gray-600 text-sm">Learn to work in agile teams and manage project timelines effectively</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaTrophy className="text-yellow-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Portfolio Building</h4>
                                            <p className="text-gray-600 text-sm">Create an impressive portfolio with real project deliverables and case studies</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaProjectDiagram className="text-purple-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">End-to-End Development</h4>
                                            <p className="text-gray-600 text-sm">Experience complete software development lifecycle from planning to deployment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 3: Internship with Full-time Job Offer */}
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="space-y-6 h-full flex flex-col">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mt-[20px]">3</div>
                                    <h3 className="text-3xl font-bold text-gray-800">Internship & Job Offer</h3>
                                </div>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Based on your performance in capstone projects, get selected for our exclusive internship
                                    program. Work directly with our development team on live projects, gain industry experience,
                                    and earn a full-time job offer upon successful completion. This is your gateway to a
                                    guaranteed career in tech.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <FaUserGraduate className="text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Performance-Based Selection</h4>
                                            <p className="text-gray-600 text-sm">Top performers from capstone projects get selected for internship</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaHandshake className="text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Live Project Experience</h4>
                                            <p className="text-gray-600 text-sm">Work on actual production systems and contribute to real products</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaTrophy className="text-purple-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Guaranteed Job Offer</h4>
                                            <p className="text-gray-600 text-sm">Successful interns receive full-time employment offers</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaUserTie className="text-orange-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Mentorship & Growth</h4>
                                            <p className="text-gray-600 text-sm">Get mentored by senior developers and accelerate your career growth</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                className="relative h-full"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <FaHandshake className="text-3xl text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-2">Career Success</h4>
                                        <div className="space-y-4 mt-6">
                                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                                                <div className="text-2xl font-bold text-purple-600 mb-1">85%</div>
                                                <div className="text-sm text-gray-600">Internship Conversion Rate</div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="text-center bg-green-50 rounded-lg p-3">
                                                    <div className="text-lg font-bold text-green-600">500+</div>
                                                    <div className="text-xs text-gray-600">Students Placed</div>
                                                </div>
                                                <div className="text-center bg-blue-50 rounded-lg p-3">
                                                    <div className="text-lg font-bold text-blue-600">95%</div>
                                                    <div className="text-xs text-gray-600">Success Rate</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 pt-4 border-t border-gray-100">
                                            <p className="text-sm text-gray-600 mb-2">Average Starting Salary:</p>
                                            <p className="text-xl font-bold text-green-600">₹4.5 - 8 LPA</p>
                                            <p className="text-xs text-gray-500 mt-1">Based on performance & skills</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Success Stories Preview */}



                    {/* Call to Action */}

                </div>
            </section>



            <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 mt-[4rem] mb-[4rem]">
                <button
                    onClick={() =>
                        courseSectionRef.current?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="bg-[#EF7722] border border-white hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:text-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
                >
                    Explore Courses
                </button>

                <Link
                    to="/contact"
                    className="bg-[#EF7722] border border-white hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:text-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
                >
                    Contact Us
                </Link>
            </div>


            <Footer />


        </>
    );
}
