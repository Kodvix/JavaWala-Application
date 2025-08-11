import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { courses } from "../Data/courses";
import { motion, AnimatePresence,  } from "framer-motion";
import { FaChevronDown, FaChalkboardTeacher, FaProjectDiagram, FaUserTie, FaHeadset } from "react-icons/fa";
import { FaInfinity,  FaStar, FaComments } from "react-icons/fa";
import { useInView } from "framer-motion";
import { useRef } from "react";
import rocketImg from "../assets/rocketimg.gif"; // or .svg
import girl1 from "../assets/girlll1.jpg";
import girl2 from "../assets/girll2 (2).jpg";
import girl3 from "../assets/girll3.jpg";
import girl4 from "../assets/girll4.jpg";
import { successStories } from "../Data/studentSuccessData"; 
import { FaUserCircle, FaUserAlt,  FaRegUser } from "react-icons/fa";

const profileIcons = [FaUserCircle, FaUserAlt, FaUserTie, FaRegUser];


export default function CourseDetail() {
    const { id } = useParams();
    const course = courses.find((c) => c.id === id);
    const [activeTab, setActiveTab] = useState("whyUs");
    const [openCardIndex, setOpenCardIndex] = useState(null);
    const [openModuleIndex, setOpenModuleIndex] = useState(null);

    const containerRef = useRef(null);
    const journeySectionRef = useRef(null);
    const [isJourneySectionVisible, setIsJourneySectionVisible] = useState(false);
    const [rocketAnimationComplete, setRocketAnimationComplete] = useState(false);

    

    // Track when journey section is in view
    const isJourneyInView = useInView(journeySectionRef, {
        threshold: 0.3,
        triggerOnce: false 
        
    });

    
    useEffect(() => {
        if (activeTab === "whyUs" && isJourneyInView) {
            setIsJourneySectionVisible(true);
            setRocketAnimationComplete(false);
        } else if (activeTab !== "whyUs") {
            setIsJourneySectionVisible(false);
            setRocketAnimationComplete(false);
        } else if (activeTab === "whyUs" && !isJourneyInView) {
            setIsJourneySectionVisible(false);
        }
    }, [activeTab, isJourneyInView]);

    // Reset animation on page reload or when component mounts
    useEffect(() => {
        setRocketAnimationComplete(false);
        setIsJourneySectionVisible(false);
    }, []);

    // Dynamically calculate the rocket's path based on container height
    const [containerHeight, setContainerHeight] = useState(0);
    useEffect(() => {
        if (containerRef.current) {
            setContainerHeight(containerRef.current.offsetHeight);
        }
    }, [activeTab]);

    // Move rocket from bottom to top (reverse direction)
   // const rocketHeight = 64; // px, matches w-16 h-16
    

    if (!course) return <div className="p-4 text-red-600">Course not found.</div>;

    const toggleCard = (index) => {
        setOpenCardIndex(openCardIndex === index ? null : index);
    };

    const toggleModule = (index) => {
        setOpenModuleIndex(openModuleIndex === index ? null : index);
    };

    const journeySteps = [
        {
            title: "Level 1 - Beginner",
            desc: "Start your journey with coding basics,like HTML,CSS,JS , logic building, and essential tools like Git, VS Code, etc.",
            icon: "",
            img: girl1,
        },
        {
            title: "Level 2 - Intermediate",
            desc: "Build real-world projects, enhance your resume and GitHub profile, and attend mock interviews.",
            icon: "",
            img: girl2,
        },
        {
            title: "Level 3 - Advanced",
            desc: "Learn system design, DSA, crack interviews, and apply for internships.",
            icon: "",
            img: girl3,
        },
        {
            title: "Level 4 - Placement",
            desc: "You're now fully equipped to secure your dream job or internship in top tech companies.",
            icon: "",
            img: girl4,
        },
    ];

    const whyUsFeatures = [
        {
            title: "Industry-expert trainers with real-world experience",
            details: "Get mentored by professionals who've worked in top MNCs and bring real-time problem-solving techniques into your learning.",
            icon: <FaChalkboardTeacher className="text-4xl text-orange-500" />,
        },
        {
            title: "Hands-on live projects & case studies",
            details: "Work on live projects that simulate real company environments, preparing you for actual on-job expectations.",
            icon: <FaProjectDiagram className="text-4xl text-green-500" />,
        },
        {
            title: "1:1 mentorship and career support",
            details: "Get personalized career guidance and resume reviews from industry experts to ensure job readiness.",
            icon: <FaUserTie className="text-4xl text-blue-500" />,
        },
        {
            title: "24/7 doubt-clearing & tech support",
            details: "Dedicated support teams and mentors available around the clock to help you tackle challenges instantly.",
            icon: <FaHeadset className="text-4xl text-purple-500" />,
        },
    ];

    
    return (
        <div className="p-6 max-w-6xl mx-auto mt-[10px] bg-black">
            {/* 🟦 Course Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[black] shadow-lg rounded-3xl p-6 mb-10 border flex flex-col md:flex-row gap-6"
            >
                <div className="w-full md:w-1/2 flex justify-center items-center r">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-4/5 sm:w-3/4 md:w-full h-48 sm:h-60 md:h-64 object-contain rounded-3xl"
                    />
                </div>

                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{course.title}</h2>
                    <p className="text-[#FBE4D6] text-sm sm:text-base mb-4">{course.description}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <span className="text-lg font-semibold text-green-600">{course.price}</span>
                        <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                    </div>
                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Enroll Now
                    </button>
                </div>
            </motion.div>
            {/* 🔘 Tabs */}
            <div className="flex space-x-0 sm:space-x-2 border-b mb-6">

                {["whyUs", "offer", "perks", "modules"].map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 font-medium capitalize ${activeTab === tab
                            ? "border-b-2 border-blue-600 text-blue-700"
                            : "text-[#FBE4D6] hover:text-blue-700"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === "whyUs" && "Why Us"}
                        {tab === "offer" && "What You Get"}
                        {tab === "perks" && "Perks"}
                        {tab === "modules" && "Curriculum"}
                    </button>
                ))}
            </div>

            {/* 🔻 Tab Content */}
            <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                    {/* WHY US TAB */}
                    {activeTab === "whyUs" && (
                        <motion.div
                            key="whyUs"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-10"
                        >
                            {/* Expandable Cards with Icons */}
                            <div className="grid gap-6 md:grid-cols-2">
                                {whyUsFeatures.map((item, idx) => {
                                    const isOpen = openCardIndex === idx;
                                    return (
                                        <div
                                            key={idx}
                                            className="bg-[#FAF9EE] shadow border rounded-xl hover:shadow-md transition duration-300 overflow-hidden"
                                        >
                                            <div className="flex p-4">
                                                <div className="w-1/4 flex items-center justify-center">
                                                    {item.icon}
                                                </div>
                                                <div className="w-3/4 flex flex-col justify-center">
                                                    <div
                                                        onClick={() => toggleCard(idx)}
                                                        className="flex items-center justify-between cursor-pointer w-full gap-2"
                                                    >
                                                        <p className="text-gray-800 font-semibold text-base md:text-lg truncate">
                                                            {item.title}
                                                        </p>
                                                        <motion.div
                                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="shrink-0"
                                                        >
                                                            <FaChevronDown className="text-gray-500" />
                                                        </motion.div>
                                                    </div>


                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.4 }}
                                                                className="mt-2 text-gray-600 text-sm overflow-hidden"
                                                            >
                                                                <p>{item.details}</p>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Mentor Section */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-blue-700 text-center">
                                    Ratings and Reviews
                                </h3>

                                <div className="flex sm:flex-wrap flex-nowrap overflow-x-auto sm:justify-center gap-6 pb-4 px-2">
                                    {successStories.map((story, idx) => {
                                        const ProfileIcon = profileIcons[idx % profileIcons.length]; // Rotate icons
                                        return (
                                            <div
                                                key={idx}
                                                className="w-52 min-w-[13rem] p-4 bg-[#FAF9EE] rounded-lg shadow hover:shadow-md transition shrink-0"
                                            >
                                                <div className="flex justify-center">
                                                    <ProfileIcon className="text-6xl text-blue-600" />
                                                </div>
                                                <h4 className="text-center mt-3 font-semibold">{story.name}</h4>
                                                <p className="text-center text-sm text-gray-500">{story.role}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Placement Journey Section */}
                            <div className="relative bg-[#FAF9EE] py-10 md:py-20 overflow-hidden rounded-3xl" ref={containerRef}>
                                <div ref={journeySectionRef}>
                                    <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12 md:mb-16">
                                        Placement Journey
                                    </h2>

                                    {/* Center Rocket Path */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-t from-green-300 via-orange-300 to-pink-300 z-10"></div>

                                    {/* Rocket Animation */}
                                    <AnimatePresence>
                                        {isJourneySectionVisible && (
                                            <motion.div
                                                initial={{ y: Math.max(0, containerHeight - 128), opacity: 1 }}
                                                animate={{ y: -32, opacity: rocketAnimationComplete ? 0 : 1 }}
                                                transition={{
                                                    duration: 4,
                                                    ease: "easeInOut",
                                                    opacity: {
                                                        duration: rocketAnimationComplete ? 0.5 : 4,
                                                        delay: rocketAnimationComplete ? 0 : 3.5,
                                                    },
                                                }}
                                                onAnimationComplete={() => {
                                                    if (!rocketAnimationComplete) {
                                                        setRocketAnimationComplete(true);
                                                    }
                                                }}
                                                className="absolute left-1/2 -translate-x-1/2 top-0 z-20"
                                            >
                                                <motion.img
                                                    src={rocketImg}
                                                    alt="Rocket"
                                                    className="w-12 h-12 md:w-16 md:h-16"
                                                    animate={{
                                                        rotate: [0, 5, -5, 0],
                                                        scale: [1, 1.05, 1],
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                        repeat: Infinity,
                                                        repeatType: "reverse",
                                                    }}
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Journey Steps */}
                                    <div className="relative z-10 space-y-14 md:space-y-24">
                                        {journeySteps.map((step, idx) => {
                                            const isEven = idx % 2 === 0;
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ x: isEven ? -200 : 200, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                                                    viewport={{ once: false }}
                                                    className={`flex flex-col md:flex-row items-center px-4 md:px-20 ${!isEven ? "md:flex-row-reverse" : ""} gap-8 md:gap-16`}
                                                >
                                                    <div className="w-full md:w-1/2 h-52 sm:h-64 md:h-[350px] flex items-center justify-center">
                                                        <img
                                                            src={step.img}
                                                            alt={step.title}
                                                            className="w-full h-full object-contain rounded-xl shadow-lg border bg-white"
                                                        />
                                                    </div>

                                                    <div className="w-full md:w-1/2 bg-gradient-to-r from-orange-50 to-yellow-100 p-4 md:p-6 rounded-xl border shadow">
                                                        <div className="text-3xl md:text-4xl mb-2">{step.icon}</div>
                                                        <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{step.title}</h4>
                                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.desc}</p>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>



                        </motion.div>
                    )}

                    {/* OFFER TAB */}
                    {activeTab === "offer" && (
                        <motion.div
                            key="offer"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start md:items-center"
                        >
                            {/* Left Column */}
                            <div className="space-y-4">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FBE4D6]">
                                    What We Offer
                                </h3>
                                <p className="text-[#FBE4D6] text-sm sm:text-base leading-relaxed">
                                    Elevate your career with our comprehensive training and placement
                                    programs. From professional certifications to guaranteed internships,
                                    we ensure you get the skills, experience, and support you need to
                                    succeed.
                                </p>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-4">
                                {[
                                    "Professional Certification on Completion",
                                    "Guaranteed Internship Opportunity",
                                    "Placement Support with Mock Interviews",
                                    "Access to Alumni Network & Job Referrals",
                                ].map((item, idx) => (
                                    <button
                                        key={idx}
                                        className="group w-full text-left p-3 sm:p-4 border border-gray-200 rounded-xl bg-gradient-to-r from-green-50 to-green-100 hover:shadow-md transition flex items-start sm:items-center space-x-3"
                                    >
                                        <div className="text-green-600 text-lg sm:text-xl group-hover:scale-110 transition">
                                            ✅
                                        </div>
                                        <span className="text-gray-800 text-sm sm:text-base font-medium">
                                            {item}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}


                    {/* PERKS TAB */}
                    {activeTab === "perks" && (
                        <motion.div
                            key="perks"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
                        >
                            {[
                                {
                                    icon: <FaInfinity className="text-purple-600 text-2xl sm:text-xl" />,
                                    text: "Lifetime access to course materials",
                                },
                                {
                                    icon: <FaComments className="text-purple-600 text-2xl sm:text-xl" />,
                                    text: "Free career counseling sessions",
                                },
                                {
                                    icon: <FaUserTie className="text-purple-600 text-2xl sm:text-xl" />,
                                    text: "Soft skill & resume building training",
                                },
                                {
                                    icon: <FaStar className="text-purple-600 text-2xl sm:text-xl" />,
                                    text: "Top performer recognition & rewards",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4 flex items-start gap-3 shadow hover:shadow-md transition"
                                >
                                    <div className="shrink-0">{item.icon}</div>
                                    <p className="text-gray-700 text-sm sm:text-base">{item.text}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}


                    {/* MODULES/CURRICULUM TAB - Updated with Collapsible Sections */}
                    {activeTab === "modules" && (
                        <motion.div
                            key="modules"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-6"
                        >
                            <h3 className="text-3xl font-bold text-[#FBE4D6] mb-4">
                                {course.title} Curriculum
                            </h3>
                            <p className="text-[#FBE4D6] mb-6">
                                Comprehensive curriculum designed to take you from beginner to professional level. Each section builds upon the previous one to ensure solid understanding.
                            </p>

                            {course.curriculum && course.curriculum.length > 0 ? (
                                <div className="space-y-4">
                                    {course.curriculum.map((section, sectionIdx) => (
                                        <motion.div
                                            key={sectionIdx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: sectionIdx * 0.1 }}
                                            className="bg-white border border-blue-200 rounded-xl shadow hover:shadow-md transition overflow-hidden"
                                        >
                                            {/* Module Header - Clickable */}
                                            <div
                                                onClick={() => toggleModule(sectionIdx)}
                                                className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-150 transition-colors"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className="text-blue-600 text-2xl">📚</div>
                                                    <h4 className="text-xl font-semibold text-blue-700">
                                                        {section.section}
                                                    </h4>
                                                </div>
                                                <motion.div
                                                    animate={{ rotate: openModuleIndex === sectionIdx ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-blue-600"
                                                >
                                                    <FaChevronDown className="text-lg" />
                                                </motion.div>
                                            </div>

                                            {/* Module Content - Collapsible */}
                                            <AnimatePresence>
                                                {openModuleIndex === sectionIdx && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="p-6 pt-0">
                                                            <div className="grid gap-3 md:grid-cols-2">
                                                                {section.topics.map((topic, topicIdx) => (
                                                                    <motion.div
                                                                        key={topicIdx}
                                                                        initial={{ opacity: 0, x: -20 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ duration: 0.3, delay: topicIdx * 0.1 }}
                                                                        className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors"
                                                                    >
                                                                        <div className="text-blue-500 text-sm">▸</div>
                                                                        <span className="text-gray-700 font-medium text-sm">
                                                                            {topic}
                                                                        </span>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-gray-500">No curriculum available for this course yet.</p>
                                </div>
                            )}
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}


