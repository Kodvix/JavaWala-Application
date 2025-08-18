import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [openMainD, setOpenMainD] = useState(null);
    const [openL1D, setOpenL1D] = useState(null);
    const [openL2D, setOpenL2D] = useState(null);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openMainM, setOpenMainM] = useState(null);
    const [openL1M, setOpenL1M] = useState(null);
    const [openL2M, setOpenL2M] = useState(null);

    const navRef = useRef(null);
    const mainHoverTimer = useRef(null);
    const l1HoverTimer = useRef(null);
    const l2HoverTimer = useRef(null);

    const location = useLocation();

    useEffect(() => {
        function onDocClick(e) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenMainD(null);
                setOpenL1D(null);
                setOpenL2D(null);
            }
        }
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    useEffect(() => {
        setDrawerOpen(false);
        setOpenMainM(null);
        setOpenL1M(null);
        setOpenL2M(null);
        setOpenMainD(null);
        setOpenL1D(null);
        setOpenL2D(null);
    }, [location]);

    // Desktop hover handlers with delay
    const handleMouseEnterMain = (i) => {
        clearTimeout(mainHoverTimer.current);
        setOpenMainD(i);
    };
    const handleMouseLeaveMain = () => {
        mainHoverTimer.current = setTimeout(() => {
            setOpenMainD(null);
            setOpenL1D(null);
            setOpenL2D(null);
        }, 500);
    };

    const handleMouseEnterL1 = (j) => {
        clearTimeout(l1HoverTimer.current);
        setOpenL1D(j);
    };
    const handleMouseLeaveL1 = () => {
        l1HoverTimer.current = setTimeout(() => {
            setOpenL1D(null);
            setOpenL2D(null);
        }, 500);
    };

    const handleMouseEnterL2 = (k) => {
        clearTimeout(l2HoverTimer.current);
        setOpenL2D(k);
    };
    const handleMouseLeaveL2 = () => {
        l2HoverTimer.current = setTimeout(() => {
            setOpenL2D(null);
        }, 500);
    };

    const menus = [
        {
            label: "Explore Programs",
            options: [
                {
                    label: "Placement Training",
                    subOptions: [
                        { label: "Full Stack Developer", link: "/#courses" },
                        {
                            label: "Backend Development",
                            subOptions: [
                                { label: "Java Backend Developer", link: "/course/java-backend" },
                                { label: "Python Developer", link: "/course/python-dev" },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            label: "Success Stories",
            options: [{ label: "Student Placements", link: "/success-stories" }],
        },
        { label: "Contact Us", link: "/contact" },
        { label: "About Us", link: "/aboutus" },
    ];

    const handleMobileLinkClick = () => {
        setDrawerOpen(false);
        setOpenMainM(null);
        setOpenL1M(null);
        setOpenL2M(null);
    };

    return (
        <nav ref={navRef} className="sticky top-0 bg-black text-white z-[50000]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/Logo2.png" alt="JavaWala Logo" className="w-28 h-14 object-contain" />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8 pr-[70px]">
                        {menus.map((menu, i) => (
                            <li
                                key={i}
                                className="relative"
                                onMouseEnter={() => handleMouseEnterMain(i)}
                                onMouseLeave={handleMouseLeaveMain}
                            >
                                {menu.options ? (
                                    <>
                                        <button
                                            className="flex items-center font-medium hover:text-blue-500"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {menu.label}
                                            <FaChevronDown className="ml-1 text-xs" />
                                        </button>

                                        {openMainD === i && (
                                            <ul className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded w-64 py-2">
                                                {menu.options.map((opt, j) => (
                                                    <li
                                                        key={j}
                                                        className="relative"
                                                        onMouseEnter={() => handleMouseEnterL1(j)}
                                                        onMouseLeave={handleMouseLeaveL1}
                                                    >
                                                        {opt.subOptions ? (
                                                            <>
                                                                <div className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                                                    {opt.label}
                                                                    <FaChevronRight className="text-xs ml-2" />
                                                                </div>

                                                                {openL1D === j && (
                                                                    <ul className="absolute left-full top-0 bg-white text-black shadow-lg rounded w-64 py-2">
                                                                        {opt.subOptions.map((sub, k) => (
                                                                            <li
                                                                                key={k}
                                                                                className="relative"
                                                                                onMouseEnter={() => handleMouseEnterL2(k)}
                                                                                onMouseLeave={handleMouseLeaveL2}
                                                                            >
                                                                                {sub.subOptions ? (
                                                                                    <>
                                                                                        <div className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                                                                            {sub.label}
                                                                                            <FaChevronDown
                                                                                                className={`text-xs ml-2 ${openL2D === k ? "rotate-180" : ""}`}
                                                                                            />
                                                                                        </div>
                                                                                        {openL2D === k && (
                                                                                            <ul className="absolute left-full top-0 bg-white text-black shadow-lg rounded w-64 py-2">
                                                                                                {sub.subOptions.map((leaf, z) => (
                                                                                                    <li key={z}>
                                                                                                        <Link
                                                                                                            to={leaf.link}
                                                                                                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                                                                                                        >
                                                                                                            {leaf.label}
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        )}
                                                                                    </>
                                                                                ) : (
                                                                                    <Link
                                                                                        to={sub.link}
                                                                                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                                                                                    >
                                                                                        {sub.label}
                                                                                    </Link>
                                                                                )}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <Link
                                                                to={opt.link}
                                                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                                                            >
                                                                {opt.label}
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link to={menu.link} className="font-medium hover:text-blue-500">
                                        {menu.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Burger */}
                    <button
                        className="md:hidden text-2xl"
                        aria-label="Open menu"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Overlay */}
            {drawerOpen && (
                <div className="fixed inset-0 bg-black/50 z-[9998]" onClick={() => setDrawerOpen(false)} />
            )}

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white text-black z-[9999] transform transition-transform duration-300 ease-in-out ${drawerOpen ? "translate-x-0" : "-translate-x-full"
                    } md:hidden`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <span className="text-lg font-semibold text-blue-600">JavaWala</span>
                    <button className="text-2xl" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
                        <FaTimes />
                    </button>
                </div>
                <div className="p-3 h-full overflow-y-auto">
                    <ul className="space-y-1">
                        {menus.map((menu, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-2">
                                {menu.options ? (
                                    <>
                                        <button
                                            className="w-full flex items-center justify-between py-2 font-medium"
                                            onClick={() => {
                                                setOpenMainM(openMainM === i ? null : i);
                                                setOpenL1M(null);
                                                setOpenL2M(null);
                                            }}
                                        >
                                            <span>{menu.label}</span>
                                            <FaChevronDown
                                                className={`text-xs transition-transform ${openMainM === i ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        {openMainM === i && (
                                            <ul className="pl-3">
                                                {menu.options.map((opt, j) => (
                                                    <li key={j} className="py-1">
                                                        {opt.subOptions ? (
                                                            <>
                                                                <button
                                                                    className="w-full flex items-center justify-between py-2 text-sm hover:text-blue-600"
                                                                    onClick={() => {
                                                                        setOpenL1M(openL1M === j ? null : j);
                                                                        setOpenL2M(null);
                                                                    }}
                                                                >
                                                                    <span>{opt.label}</span>
                                                                    <FaChevronDown
                                                                        className={`text-xs transition-transform ${openL1M === j ? "rotate-180" : ""
                                                                            }`}
                                                                    />
                                                                </button>
                                                                {openL1M === j && (
                                                                    <ul className="pl-3">
                                                                        {opt.subOptions.map((sub, k) => (
                                                                            <li key={k} className="py-1">
                                                                                {sub.subOptions ? (
                                                                                    <>
                                                                                        <button
                                                                                            className="w-full flex items-center justify-between py-2 text-sm hover:text-blue-600"
                                                                                            onClick={() =>
                                                                                                setOpenL2M(openL2M === k ? null : k)
                                                                                            }
                                                                                        >
                                                                                            <span>{sub.label}</span>
                                                                                            <FaChevronDown
                                                                                                className={`text-xs transition-transform ${openL2M === k ? "rotate-180" : ""
                                                                                                    }`}
                                                                                            />
                                                                                        </button>
                                                                                        {openL2M === k && (
                                                                                            <ul className="pl-5">
                                                                                                {sub.subOptions.map((leaf, z) => (
                                                                                                    <li key={z}>
                                                                                                        <Link
                                                                                                            to={leaf.link}
                                                                                                            className="block py-2 text-sm hover:text-blue-600"
                                                                                                            onClick={handleMobileLinkClick}
                                                                                                        >
                                                                                                            {leaf.label}
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        )}
                                                                                    </>
                                                                                ) : (
                                                                                    <Link
                                                                                        to={sub.link}
                                                                                        className="block py-2 text-sm hover:text-blue-600"
                                                                                        onClick={handleMobileLinkClick}
                                                                                    >
                                                                                        {sub.label}
                                                                                    </Link>
                                                                                )}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <Link
                                                                to={opt.link}
                                                                className="block py-2 text-sm hover:text-blue-600"
                                                                onClick={handleMobileLinkClick}
                                                            >
                                                                {opt.label}
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        to={menu.link}
                                        className="block py-2 font-medium hover:text-blue-600"
                                        onClick={handleMobileLinkClick}
                                    >
                                        {menu.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
