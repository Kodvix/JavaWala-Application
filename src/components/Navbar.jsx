import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(null);
    const [subDropdown, setSubDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef();
    const location = useLocation();

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setDropdown(null);
                setSubDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isHomePage = location.pathname === "/";

    const menus = [
        {
            label: "Explore Programs",
            options: [
                {
                    label: "Industrial Training",
                    subOptions: [
                        { label: "Generative AI", link: "/course/generativeai" },
                        { label: "Data Science", link: "/course/datascience" },
                        { label: "DevOps", link: "/courses/devops" },
                        { label: "MERN Stack", link: "/course/mern" },
                        { label: "Java Programming", link: "/course/java" },
                    ],
                },
                {
                    label: "Placement Training",
                    subOptions: [
                        { label: "Full Stack Developer", link: "/course/fullstack" },
                        { label: "Backend Development", link: "/courses/backend" },
                    ],
                },
                {
                    label: "Corporate Training",
                    subOptions: [
                        { label: "React Corporate", link: "/courses/reactcorp" },
                        { label: "Spring Boot Corp", link: "/courses/springcorp" },
                    ],
                },
            ],
        },
        {
            label: "Success Stories",
            options: [
                { label: "Student Placements", link: "/success-stories" },
                { label: "Testimonials", link: "/testimonials" },
            ],
        },
        { label: "Contact Us", link: "/contact" },
        { label: "About Us", link: "/aboutus" },
    ];

    return (
        <nav
            ref={navRef}
            className="sticky top-0 bg-black text-white px-6 pt-2 pb-0 transition-all duration-500 z-[10000]"
            style={{
                height:
                    isHomePage
                        ? window.innerWidth >= 640
                            ? "60px"
                            : "60px"
                        : "60px",
                paddingBottom: isHomePage ? "0px" : "0px",
            }}
        >
            {/* Top Row with Logo + Desktop Menu + Hamburger */}
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-6">
                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="text-white md:hidden text-xl"
                    >
                        <FaBars />
                    </button>

                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="/Logo2.png"
                            alt="JavaWala Logo"
                            className="w-28 h-14 object-contain"
                        />
                    </Link>



                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-row items-center space-x-8 pl-[80px]">
                        {menus.map((menu, idx) => (
                            <div className="relative" key={idx}>
                                {menu.options ? (
                                    <>
                                        <button
                                            onClick={() => setDropdown(dropdown === idx ? null : idx)}
                                            className="flex items-center hover:text-blue-600 text-white font-medium"
                                        >
                                            {menu.label}
                                            <FaChevronDown className="ml-1 text-xs" />
                                        </button>

                                        {dropdown === idx && (
                                            <div className="absolute top-full left-0 mt-2 bg-white border shadow-lg rounded w-56 z-[10000]">
                                                {menu.options.map((option, i) => (
                                                    <div key={i} className="relative group">
                                                        {option.subOptions ? (
                                                            <button
                                                                onClick={() => setSubDropdown(subDropdown === i ? null : i)}
                                                                className="flex justify-between items-center w-full px-4 py-2 text-sm text-black hover:text-blue-600 hover:bg-gray-100"
                                                            >
                                                                {option.label}
                                                                <FaChevronRight className="text-xs ml-1" />
                                                            </button>
                                                        ) : (
                                                            <Link
                                                                to={option.link}
                                                                className="block px-4 py-2 text-sm text-black hover:text-blue-600 hover:bg-gray-100"
                                                            >
                                                                {option.label}
                                                            </Link>
                                                        )}

                                                        {subDropdown === i && option.subOptions && (
                                                            <div className="absolute left-full top-0 bg-white border shadow-md rounded w-56 z-[11000]">
                                                                {option.subOptions.map((sub, j) => (
                                                                    <Link
                                                                        key={j}
                                                                        to={sub.link}
                                                                        className="block px-4 py-2 text-sm text-black hover:text-blue-600 hover:bg-gray-100"
                                                                    >
                                                                        {sub.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        to={menu.link}
                                        className="hover:text-blue-600 text-white font-medium"
                                    >
                                        {menu.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white text-black z-[9999] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } md:hidden`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold text-blue-600">JavaWala</h2>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xl text-gray-800"
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className="flex flex-col p-4 space-y-2">
                    {menus.map((menu, idx) => (
                        <div key={idx}>
                            {menu.options ? (
                                <>
                                    <button
                                        onClick={() => setDropdown(dropdown === idx ? null : idx)}
                                        className="flex items-center justify-between w-full text-left text-black font-medium py-2"
                                    >
                                        {menu.label}
                                        <FaChevronDown className="ml-1 text-xs" />
                                    </button>

                                    {dropdown === idx && (
                                        <div className="ml-4 space-y-1">
                                            {menu.options.map((option, i) => (
                                                <div key={i}>
                                                    {option.subOptions ? (
                                                        <>
                                                            <button
                                                                onClick={() =>
                                                                    setSubDropdown(subDropdown === i ? null : i)
                                                                }
                                                                className="flex justify-between items-center w-full text-left text-sm text-gray-700 py-1"
                                                            >
                                                                {option.label}
                                                                <FaChevronRight className="text-xs" />
                                                            </button>
                                                            {subDropdown === i && (
                                                                <div className="ml-4 space-y-1">
                                                                    {option.subOptions.map((sub, j) => (
                                                                        <Link
                                                                            key={j}
                                                                            to={sub.link}
                                                                            className="block text-sm text-gray-600 hover:text-blue-600"
                                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                                        >
                                                                            {sub.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <Link
                                                            to={option.link}
                                                            className="block text-sm text-gray-700 hover:text-blue-600 py-1"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {option.label}
                                                        </Link>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={menu.link}
                                    className="block text-black py-2 font-medium hover:text-blue-600"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {menu.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
