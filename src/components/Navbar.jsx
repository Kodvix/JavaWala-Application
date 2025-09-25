import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronRight, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { useSearch } from "../context/SearchContext";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(null);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef();
    const location = useLocation();
    const { searchQuery, setSearchQuery } = useSearch();

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setDropdown(null);
                setExpandedCategory(null);
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

                        { label: "Data Science", link: "/course/datascience" },

                        { label: "MERN Stack", link: "/course/mern" },
                        { label: "Java Programming", link: "/course/java" },
                    ],
                },
                {
                    label: "Placement Training",
                    subOptions: [
                        { label: "Full Stack Developer", link: "/course/fullstack" },

                    ],
                },

            ],
        },
        {
            label: "Success Stories",
            options: [
                { label: "Student Placements", link: "/success-stories" },

            ],
        },
        { label: "Contact Us", link: "/contact" },
        { label: "About Us", link: "/aboutus" },
    ];

    return (
        <nav
            ref={navRef}
            className="sticky top-0 bg-white text-white px-6 pt-2 pb-0 transition-all duration-500 z-[10000]  shadow-lg "
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
                        className="text-black md:hidden text-xl"
                    >
                        <FaBars />
                    </button>

                    {/* Logo */}

                    <Link to="/" className="flex items-center space-x-2 h-[45px]">
                        <img
                            src="/Logo2.png"
                            alt="JavaWala Logo"
                            className="w-28 h-[48px] object-contain margin-bottom-[1rem]"
                        />
                    </Link>

                </div>

                {/* Center Search Box (Home page only) */}
                {isHomePage && (
                    <div className="hidden md:flex flex-1 justify-center px-6">
                        <div className="w-full max-w-md relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search courses..."
                                className="w-full border border-[#EF7722] rounded-full py-2 pl-4 pr-4 text-black focus:outline-none focus:ring-1 focus:ring-[#EF7722]"
                            />
                        </div>
                    </div>
                )}
                {/* Desktop Menu (right aligned) */}
                <div className="hidden md:flex flex-row items-center space-x-8 pr-[32px]">
                    {menus.map((menu, idx) => (
                        <div className="relative" key={idx}>
                            {menu.options ? (
                                <>
                                    <button
                                        onClick={() => {
                                            // Reset expanded category when switching dropdowns
                                            setExpandedCategory(null);
                                            // Toggle current dropdown or set new one
                                            setDropdown(dropdown === idx ? null : idx);
                                        }}
                                        className="flex items-center hover:text-[#EF7722] text-black font-medium transition-colors duration-200"
                                    >
                                        {menu.label}
                                        <FaChevronDown className="ml-1 text-xs" />
                                    </button>

                                    {dropdown === idx && (
                                        <div className="absolute top-full left-0 mt-2 bg-white border shadow-lg rounded w-80 z-[10000] transition-all duration-300 ease-in-out opacity-100 transform translate-y-0 max-h-96 overflow-y-auto">
                                            <div className="py-2">
                                                {menu.options.map((option, i) => (
                                                    <div key={i} className="relative">
                                                        {option.subOptions ? (
                                                            <>
                                                                <button
                                                                    onClick={() => {
                                                                        // Only one category can be expanded at a time
                                                                        setExpandedCategory(expandedCategory === i ? null : i);
                                                                    }}
                                                                    className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                                                                >
                                                                    <span>{option.label}</span>
                                                                    {expandedCategory === i ? (
                                                                        <FaChevronUp className="text-xs" />
                                                                    ) : (
                                                                        <FaChevronDown className="text-xs" />
                                                                    )}
                                                                </button>
                                                                {expandedCategory === i && (
                                                                    <div className="pb-2 transition-all duration-300 ease-in-out">
                                                                        {option.subOptions.map((sub, j) => (
                                                                            <Link
                                                                                key={j}
                                                                                to={sub.link}
                                                                                onClick={() => {
                                                                                    // Close dropdown when sub-option is selected
                                                                                    setDropdown(null);
                                                                                    setExpandedCategory(null);
                                                                                }}
                                                                                className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
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
                                                                onClick={() => {
                                                                    // Close dropdown when option is selected
                                                                    setDropdown(null);
                                                                    setExpandedCategory(null);
                                                                }}
                                                                className="block px-4 py-2 text-sm text-black hover:text-[#EF7722] hover:bg-gray-100 transition-colors duration-200"
                                                            >
                                                                {option.label}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={menu.link}
                                    className="hover:text-[#EF7722] text-black font-medium"
                                >
                                    {menu.label}
                                </Link>
                            )}
                        </div>
                    ))}
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
                className={`fixed top-0 left-0 h-full w-64 bg-white text-black z-[9999] transform transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
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
                                        onClick={() => {
                                            // Reset expanded category when switching dropdowns
                                            setExpandedCategory(null);
                                            // Toggle current dropdown or set new one
                                            setDropdown(dropdown === idx ? null : idx);
                                        }}
                                        className="flex items-center justify-between w-full text-left text-black font-medium py-2 transition-colors duration-200"
                                    >
                                        {menu.label}
                                        <FaChevronDown className="ml-1 text-xs" />
                                    </button>

                                    {dropdown === idx && (
                                        <div className="ml-4 space-y-1 transition-all duration-300 ease-in-out opacity-100 transform translate-x-0 max-h-80 overflow-y-auto">
                                            {menu.options.map((option, i) => (
                                                <div key={i}>
                                                    {option.subOptions ? (
                                                        <>
                                                            <button
                                                                onClick={() => {
                                                                    // Only one category can be expanded at a time
                                                                    setExpandedCategory(expandedCategory === i ? null : i);
                                                                }}
                                                                className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-800 py-1 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                                                            >
                                                                <span>{option.label}</span>
                                                                {expandedCategory === i ? (
                                                                    <FaChevronUp className="text-xs" />
                                                                ) : (
                                                                    <FaChevronDown className="text-xs" />
                                                                )}
                                                            </button>
                                                            {expandedCategory === i && (
                                                                <div className="ml-2 space-y-1 pb-2 transition-all duration-300 ease-in-out">
                                                                    {option.subOptions.map((sub, j) => (
                                                                        <Link
                                                                            key={j}
                                                                            to={sub.link}
                                                                            className="block text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors duration-200"
                                                                            onClick={() => {
                                                                                // Close mobile menu and reset state when sub-option is selected
                                                                                setIsMobileMenuOpen(false);
                                                                                setDropdown(null);
                                                                                setExpandedCategory(null);
                                                                            }}
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
                                                            className="block text-sm text-gray-700 hover:text-blue-600 py-1 transition-colors duration-200"
                                                            onClick={() => {
                                                                // Close mobile menu and reset state when option is selected
                                                                setIsMobileMenuOpen(false);
                                                                setDropdown(null);
                                                                setExpandedCategory(null);
                                                            }}
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
