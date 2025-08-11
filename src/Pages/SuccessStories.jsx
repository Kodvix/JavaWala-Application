import React from "react";
import { motion } from "framer-motion";
import { successStories } from "../Data/studentSuccessData";
import { FaUserGraduate, FaUserTie, FaUserNinja, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const profileIcons = [FaUserGraduate, FaUserTie, FaUserNinja]; // Add more if needed

export default function SuccessStories() {
    const navigate = useNavigate();
    const handleJoinNow = () => {
        navigate("/contact");
    }
    return (
        <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen py-16 px-4 md:px-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300 animate-pulse">
                 Success Stories from Javawala
            </h2>

            <div className="space-y-12">
                {successStories.map((student, index) => {
                    const Icon = profileIcons[index % profileIcons.length];
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md border border-white/20 gap-8"
                        >
                            {/* Icon Side */}
                            <div className="text-cyan-300 text-7xl">
                                <Icon />
                            </div>

                            {/* Content Side */}
                            <div>
                                <h3 className="text-2xl font-semibold text-cyan-200">{student.name}</h3>
                                <p className="text-sm text-gray-300">{student.course}</p>
                                <p className="mt-1 text-sm text-yellow-400 font-semibold">
                                    Placed as: {student.role}
                                </p>
                                {/* Rating */}
                                <div className="flex text-yellow-400 mt-2">
                                    {[...Array(4)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                    <FaStarHalfAlt />
                                </div>
                                {/* Testimonial */}
                                <p className="mt-4 italic text-gray-300 text-sm max-w-xl">
                                    “{student.testimonial}”
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="text-center mt-16">
                <p className="text-xl text-white font-medium">
                     You could be our next success story!
                </p>
                <button onClick={handleJoinNow} className="mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition duration-300">
                    Join Javawala Today
                </button>
            </div>
        </div>
    );
}
