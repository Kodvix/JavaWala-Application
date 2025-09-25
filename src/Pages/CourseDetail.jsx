import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { courses } from "../Data/courses";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    FaChevronDown,
    FaChalkboardTeacher,
    FaProjectDiagram,
    FaUserTie,
    FaHeadset,
} from "react-icons/fa";
import girl1 from "../assets/girlll1.jpg";
import girl2 from "../assets/girll2 (2).jpg";
import girl3 from "../assets/girll3.jpg";
import girl4 from "../assets/girll4.jpg";
import Footer from "../components/Footer";

export default function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const course = courses.find((c) => c.id === id);
    const [activeTab, setActiveTab] = useState("whyUs");
    const [openModuleIndex, setOpenModuleIndex] = useState(null);

    const journeySectionRef = useRef(null);

    if (!course)
        return <div className="p-4 text-red-600">Course not found.</div>;

    const toggleModule = (index) => {
        setOpenModuleIndex(openModuleIndex === index ? null : index);
    };

    const journeySteps = [
        {
            title: "Level 1 - Beginner",
            desc: "Start your journey with coding basics, like HTML, CSS, JS, logic building, and essential tools like Git, VS Code, etc.",
            img: girl1,
        },
        {
            title: "Level 2 - Intermediate",
            desc: "Build real-world projects, enhance your resume and GitHub profile, and attend mock interviews.",
            img: girl2,
        },
        {
            title: "Level 3 - Advanced",
            desc: "Learn system design, DSA, crack interviews, and apply for internships.",
            img: girl3,
        },
        {
            title: "Level 4 - Placement",
            desc: "You're now fully equipped to secure your dream job or internship in top tech companies.",
            img: girl4,
        },
    ];

    const whyUsFeatures = [
        {
            title: "Industry-expert trainers with real-world experience",
            details:
                "Get mentored by professionals who've worked in top MNCs and bring real-time problem-solving techniques into your learning.",
            icon: <FaChalkboardTeacher className="text-4xl text-orange-500" />,
        },
        {
            title: "Hands-on live projects & case studies",
            details:
                "Work on live projects that simulate real company environments, preparing you for actual on-job expectations.",
            icon: <FaProjectDiagram className="text-4xl text-green-500" />,
        },
        {
            title: "1:1 mentorship and career support",
            details:
                "Get personalized career guidance and resume reviews from industry experts to ensure job readiness.",
            icon: <FaUserTie className="text-4xl text-blue-500" />,
        },
        {
            title: "24/7 doubt-clearing & tech support",
            details:
                "Dedicated support teams and mentors available around the clock to help you tackle challenges instantly.",
            icon: <FaHeadset className="text-4xl text-purple-500" />,
        },
    ];

    const actionContent = [
        {
            title: "Foundation Building",
            actions: [
                "Interactive coding workshops",
                "Hands-on project development",
                "Industry-standard tool training",
                "Personalized learning path"
            ],
            icon: "🚀",
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            title: "Skill Enhancement",
            actions: [
                "Real company project simulation",
                "Portfolio optimization",
                "Technical interview preparation",
                "Industry mentor guidance"
            ],
            icon: "💡",
            gradient: "from-purple-500 to-pink-400"
        },
        {
            title: "Professional Preparation",
            actions: [
                "Advanced system architecture",
                "Competitive coding practice",
                "Mock interview sessions",
                "Industry networking events"
            ],
            icon: "🎯",
            gradient: "from-orange-500 to-red-400"
        },
        {
            title: "Career Launch",
            actions: [
                "Job application strategy",
                "Salary negotiation coaching",
                "Continuous career support",
                "Alumni network access"
            ],
            icon: "👑",
            gradient: "from-green-500 to-emerald-400"
        }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[320px] sm:h-[380px] md:h-[460px] overflow-hidden"
                style={{
                    backgroundImage: `url(${course.image2 || course.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark + blur overlay only on small screens */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm sm:bg-black/30 sm:backdrop-blur-none md:bg-transparent"></div>

                <div className="relative h-full flex items-center px-4 sm:px-8 md:px-12">
                    <div className="p-5 sm:p-6 md:p-8 max-w-[33rem]">
                        <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-white sm:text-white leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-white sm:text-white text-sm sm:text-base mt-3">
                            {course.description}
                        </p>
                        <div className="mt-4 flex items-baseline gap-3">
                            {course.oldPrice && (
                                <span className="text-gray-300 sm:text-gray-500 line-through text-sm sm:text-base">
                                    {course.oldPrice}
                                </span>
                            )}
                            <span className="text-2xl sm:text-3xl font-bold text-white sm:text-white">
                                {course.price}
                            </span>
                        </div>
                        <div className="mt-2 text-white sm:text-white text-sm sm:text-base">
                            <span className="font-semibold">Duration:</span> {course.duration}
                        </div>
                        <button
                            onClick={() => navigate("/contact", { state: { focus: true } })}
                            className="mt-5 px-5 py-2.5 bg-[#EF7722] text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Tabs */}
            <div className="w-full flex justify-center py-4">
                <div className="w-[90%] sm:w-[80%] lg:w-[70%]">
                    <div className="grid grid-cols-3 w-full mb-6 border-b">
                        {["whyUs", "offer", "modules"].map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 py-2 capitalize text-center ${activeTab === tab
                                    ? "border-b-4 border-blue-500 text-blue-700"
                                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-25"
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab === "whyUs" && "Why Us"}
                                {tab === "offer" && "What You Get"}
                                {tab === "modules" && "Curriculum"}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                    {/* Why Us Tab */}
                    {activeTab === "whyUs" && (
                        <motion.div
                            key="whyUs"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-10"
                        >
                            {/* Features */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-[20px]">
                                {whyUsFeatures.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 hover:shadow-lg hover:from-blue-100 hover:to-blue-150 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="shrink-0 text-blue-600 text-xl">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-blue-900 font-semibold text-lg md:text-xl">
                                                    {item.title}
                                                </h3>
                                                <p className="text-blue-700 text-sm md:text-base mt-2">
                                                    {item.details}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Enhanced Placement Journey */}
                            <div className="relative py-16 md:py-[2rem] mx-auto max-w-7xl px-4">
                                <div ref={journeySectionRef}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        viewport={{ once: true }}
                                        className="text-center mb-16"
                                    >
                                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                                            Your Journey to Success
                                        </h2>
                                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                            A carefully crafted roadmap that transforms beginners into industry-ready professionals
                                        </p>
                                    </motion.div>

                                    <div className="space-y-20">
                                        {journeySteps.map((step, idx) => {
                                            const isEven = idx % 2 === 0;
                                            const currentActionContent = actionContent[idx];

                                            return (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                                                    viewport={{ once: true }}
                                                    className="relative"
                                                >
                                                    {/* Connection Line */}
                                                    {idx < journeySteps.length - 1 && (
                                                        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-10 z-10">
                                                            <motion.div
                                                                initial={{ scaleY: 0 }}
                                                                whileInView={{ scaleY: 1 }}
                                                                transition={{ duration: 0.8, delay: (idx * 0.2) + 0.5 }}
                                                                viewport={{ once: true }}
                                                                className="w-1 h-10 bg-gradient-to-b from-gray-300 to-gray-400 origin-top"
                                                            />
                                                        </div>
                                                    )}

                                                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                                                        }`}>
                                                        {/* Step Card */}
                                                        <motion.div
                                                            whileHover={{ scale: 1.02, y: -5 }}
                                                            transition={{ duration: 0.3 }}
                                                            className={`relative group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                                                        >
                                                            {/* Floating Elements */}
                                                            <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300" />
                                                            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-300" />

                                                            <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                                                                {/* Card Header */}
                                                                <div className={`h-2 bg-gradient-to-r ${currentActionContent.gradient}`} />

                                                                <div className="p-8">
                                                                    {/* Step Number */}
                                                                    <div className="flex items-center gap-4 mb-6">
                                                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentActionContent.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                                                            {idx + 1}
                                                                        </div>
                                                                        <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent" />
                                                                    </div>

                                                                    {/* Image */}
                                                                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300 flex justify-center items-center">
                                                                        <img
                                                                            src={step.img}
                                                                            alt={step.title}
                                                                            className="w-full max-h-64 object-contain rounded-xl shadow-md bg-white"
                                                                            style={{ background: '#fff' }}
                                                                        />
                                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none" />
                                                                    </div>

                                                                    {/* Content */}
                                                                    <h4 className="text-2xl font-bold text-gray-800 mb-3">
                                                                        {step.title}
                                                                    </h4>
                                                                    <p className="text-gray-600 leading-relaxed">
                                                                        {step.desc}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </motion.div>

                                                        {/* Action Content */}
                                                        <motion.div
                                                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.8, delay: (idx * 0.2) + 0.3 }}
                                                            viewport={{ once: true }}
                                                            className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                                                        >
                                                            <div className="relative">
                                                                {/* Background Decoration */}
                                                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-60" />

                                                                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                                                                    {/* Header */}
                                                                    <div className="flex items-center gap-4 mb-6">
                                                                        <div className="text-4xl">{currentActionContent.icon}</div>
                                                                        <div>
                                                                            <h3 className="text-2xl font-bold text-gray-800">
                                                                                {currentActionContent.title}
                                                                            </h3>
                                                                            <p className="text-gray-600">What we focus on</p>
                                                                        </div>
                                                                    </div>

                                                                    {/* Action Items */}
                                                                    <div className="space-y-4">
                                                                        {currentActionContent.actions.map((action, actionIdx) => (
                                                                            <motion.div
                                                                                key={actionIdx}
                                                                                initial={{ opacity: 0, x: -20 }}
                                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                                transition={{
                                                                                    duration: 0.5,
                                                                                    delay: (idx * 0.2) + 0.5 + (actionIdx * 0.1)
                                                                                }}
                                                                                viewport={{ once: true }}
                                                                                className="flex items-center gap-4 p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                                                                            >
                                                                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentActionContent.gradient}`} />
                                                                                <span className="text-gray-700 font-medium">
                                                                                    {action}
                                                                                </span>
                                                                            </motion.div>
                                                                        ))}
                                                                    </div>

                                                                    {/* Progress Indicator */}
                                                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                                                            <span>Progress</span>
                                                                            <span>{Math.round(((idx + 1) / journeySteps.length) * 100)}%</span>
                                                                        </div>
                                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                                            <motion.div
                                                                                initial={{ width: 0 }}
                                                                                whileInView={{ width: `${((idx + 1) / journeySteps.length) * 100}%` }}
                                                                                transition={{ duration: 1, delay: (idx * 0.2) + 0.8 }}
                                                                                viewport={{ once: true }}
                                                                                className={`h-2 bg-gradient-to-r ${currentActionContent.gradient} rounded-full`}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    {/* Success Metrics */}

                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Offer Tab */}
                    {activeTab === "offer" && (
                        <motion.div
                            key="offer"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start md:items-center p-6"
                        >
                            <div className="space-y-4 pl-6">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800">
                                    What We Offer
                                </h3>
                                <p className="text-blue-700 text-sm sm:text-base leading-relaxed">
                                    Elevate your career with our comprehensive training and
                                    placement programs. From professional certifications to
                                    guaranteed internships, we ensure you get the skills,
                                    experience, and support you need to succeed.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Professional Certification on Completion",
                                    "Guaranteed Internship Opportunity",
                                    "Placement Support with Mock Interviews",
                                    "Access to Alumni Network & Job Referrals",
                                ].map((item, idx) => (
                                    <button
                                        key={idx}
                                        className="group w-full text-left p-3 sm:p-4 border border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:shadow-lg hover:from-blue-100 hover:to-blue-150 transition-all duration-300 flex items-start sm:items-center space-x-3"
                                    >
                                        <div className="text-blue-600 text-lg sm:text-xl group-hover:scale-110 transition">
                                            ✅
                                        </div>
                                        <span className="text-blue-800 text-sm sm:text-base font-medium">
                                            {item}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Modules Tab */}
                    {activeTab === "modules" && (
                        <motion.div
                            key="modules"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.4 }}
                            className="px-4 sm:px-6 lg:px-8"
                        >
                            <h3 className="text-3xl font-bold text-blue-800 mb-4 text-center sm:text-left">
                                {course.title} Curriculum
                            </h3>
                            <p className="text-blue-700 mb-6 text-center sm:text-left">
                                Comprehensive curriculum designed to take you from beginner to
                                professional level. Each section builds upon the previous one to
                                ensure solid understanding.
                            </p>

                            {course.curriculum && course.curriculum.length > 0 ? (
                                <div className="space-y-4">
                                    {course.curriculum.map((section, sectionIdx) => (
                                        <motion.div
                                            key={sectionIdx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: sectionIdx * 0.1,
                                            }}
                                            className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                                        >
                                            <div
                                                onClick={() => toggleModule(sectionIdx)}
                                                className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-blue-100 to-blue-150 hover:from-blue-150 hover:to-blue-200 transition-all duration-300"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className="text-blue-600 text-2xl">📚</div>
                                                    <h4 className="text-xl font-semibold text-blue-800">
                                                        {section.section}
                                                    </h4>
                                                </div>
                                                <motion.div
                                                    animate={{
                                                        rotate: openModuleIndex === sectionIdx ? 180 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-blue-600"
                                                >
                                                    <FaChevronDown className="text-lg" />
                                                </motion.div>
                                            </div>

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
                                                                        transition={{
                                                                            duration: 0.3,
                                                                            delay: topicIdx * 0.1,
                                                                        }}
                                                                        className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200 hover:from-blue-100 hover:to-blue-150 transition-all duration-300"
                                                                    >
                                                                        <div className="text-blue-500 text-sm">
                                                                            ▸
                                                                        </div>
                                                                        <span className="text-blue-800 font-medium text-sm">
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
                                <p className="text-gray-600">Curriculum details not available.</p>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Footer />
        </div>
    );
}