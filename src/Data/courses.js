import React from "react";
import mern from "../assets/mern.png";
import datascienceimg from "../assets/datascienceimg.png";
 import fullstack from "../assets/Fullstack.png"; // Optional: Add this image
import java from "../assets/java.jpg";
import python from "../assets/python.png";
import javabackend from "../assets/java.png";

export const courses = [

    {
        id: "fullstack",
        title: "Full Stack Development",
        duration: "4.5 Months",
        batch: "Upcoming",
        price: "₹38,000",
        oldPrice: "₹48,000",
        description:
            "Become a job-ready Full Stack Developer. Learn everything from HTML, CSS, and JS to advanced backend, databases, and deployment.",
        rating: 4.85,
        students: 600,
        highlights: [
            "Frontend + Backend",
            "Live Projects",
            "Internship & Placement",
        ],
        curriculum: [
            {
                section: "HTML & CSS",
                topics: [
                    "HTML5 Semantics & Structure",
                    "Forms & Validations",
                    "Tables, Media, Iframes",
                    "CSS Flexbox & Grid",
                    "Responsive Design (Media Queries)",
                    "Animations & Transitions",
                    "Tailwind CSS / Bootstrap Basics"
                ],
            },
            {
                section: "JavaScript (Core)",
                topics: [
                    "Variables, Data Types, Operators",
                    "DOM Manipulation",
                    "ES6+: let/const, arrow functions, spread/rest",
                    "Functions, Hoisting, Closures",
                    "Callback, Promises, Async/Await",
                    "Event Loop, this, bind/call/apply",
                    "Array Methods: map, filter, reduce",
                    "OOP in JS, Prototypes, Inheritance"
                ],
            },
            {
                section: "React JS",
                topics: [
                    "Component Architecture & JSX",
                    "Props & State Management",
                    "Hooks: useState, useEffect, useRef",
                    "Conditional Rendering & Lists",
                    "React Router DOM",
                    "Form Handling & Validation",
                    "Context API & Custom Hooks",
                    "Performance Optimization (memo, lazy, Suspense)",
                    "React Query / Redux Toolkit (Basics)"
                ],
            },
            {
                section: "Java (Backend Language)",
                topics: [
                    "OOP Concepts (Class, Object, Inheritance)",
                    "Collections Framework (List, Map, Set)",
                    "Exception Handling",
                    "File I/O",
                    "Multithreading Basics",
                    "Java 8+ Features: Streams, Lambda, Functional Interfaces"
                ]
            },
            {
                section: "Spring & Spring Boot",
                topics: [
                    "Spring Boot Project Setup (Maven/Gradle)",
                    "REST API Development",
                    "Dependency Injection & Autowiring",
                    "Spring Data JPA + Hibernate",
                    "CRUD Operations with MySQL/PostgreSQL",
                    "Spring Security (JWT Auth)",
                    "DTO, Service Layer, Exception Handling",
                    "API Testing (Postman), Swagger Docs",
                    "DevTools, Profiles, Properties, Validation"
                ],
            },
            {
                section: "Database & Deployment",
                topics: [
                    "MongoDB (NoSQL Basics)",
                    "MySQL/PostgreSQL (SQL Basics)",
                    "Mongoose ORM (for MongoDB)",
                    "Database Relationships & Indexing",
                    "Cloud Deployment: Vercel, Render, or EC2",
                    "CI/CD Basics (GitHub Actions)",
                    "Version Control with Git & GitHub",
                    "Basic Docker (optional)"
                ],
            },
        ],
        image: fullstack,
    },

    {
        id: "java-backend",
        title: "Java Backend Development",
        duration: "5 Months",
        batch: "Upcoming",
        price: "₹40,000",
        oldPrice: "₹50,000",
        description:
            "Master core Java, OOPs, JDBC, and Spring Boot. Build REST APIs and real-time backend applications with industry projects.",
        rating: 4.9,
        students: 800,
        highlights: [
            "Core + Advanced Java",
            "Spring Boot & REST APIs",
            "Mini + Major Projects",
            "Placement Support",
        ],
        curriculum: [
            {
                section: "Java Fundamentals",
                topics: [
                    "Java Setup & IDE (IntelliJ, Eclipse)",
                    "Data Types, Variables, Operators",
                    "Control Flow (if, switch, loops)",
                    "Arrays & Strings",
                    "Input/Output (Scanner, BufferedReader)",
                ],
            },
            {
                section: "Object-Oriented Programming (OOP)",
                topics: [
                    "Classes & Objects",
                    "Constructors",
                    "Inheritance",
                    "Polymorphism",
                    "Abstraction & Interfaces",
                    "Encapsulation",
                    "Static & Final Keywords",
                ],
            },
            {
                section: "Exception Handling & Debugging",
                topics: [
                    "Try-Catch-Finally",
                    "Throw & Throws",
                    "Custom Exceptions",
                    "Best Practices in Exception Handling",
                ],
            },
            {
                section: "Java Collections Framework",
                topics: [
                    "List, Set, Map Interfaces",
                    "ArrayList, LinkedList, HashSet, TreeSet",
                    "HashMap, TreeMap, LinkedHashMap",
                    "Iterator, Comparable & Comparator",
                    "Streams API & Lambda Expressions",
                ],
            },
            {
                section: "Multithreading & Concurrency",
                topics: [
                    "Thread Class & Runnable Interface",
                    "Thread Lifecycle",
                    "Synchronization & Locks",
                    "Executor Framework",
                    "Deadlock & Concurrency Issues",
                ],
            },
            {
                section: "File Handling",
                topics: [
                    "Reading & Writing Files",
                    "Serialization & Deserialization",
                    "FileInputStream/FileOutputStream",
                    "BufferedReader & Writer",
                ],
            },
            {
                section: "JDBC & Database Integration",
                topics: [
                    "JDBC Architecture",
                    "Database Connection",
                    "Statements vs PreparedStatement",
                    "CRUD Operations using JDBC",
                    "Connection Pooling",
                ],
            },
            {
                section: "Build Tools & Version Control",
                topics: [
                    "Maven Basics",
                    "Understanding POM.xml",
                    "Build Lifecycle",
                    "Git & GitHub Basics",
                    "Branching & Merging",
                ],
            },
            {
                section: "Spring Boot",
                topics: [
                    "Spring Core & Dependency Injection",
                    "Spring MVC Architecture",
                    "REST APIs with Spring Boot",
                    "Spring Boot Annotations",
                    "Spring Data JPA & Hibernate",
                    "Validation & Exception Handling",
                    "Security (JWT, Spring Security)",
                    "REST API Testing with Postman",
                ],
            },
            {
                section: "Deployment & DevOps Basics",
                topics: [
                    "Packaging & JAR/WAR Files",
                    "Spring Boot Deployment on Cloud (Heroku, Render)",
                    "Introduction to Docker for Java Apps",
                    "CI/CD Overview",
                ],
            },
            {
                section: "Mini & Major Projects",
                topics: [
                    "Student Management System (Mini)",
                    "E-commerce Backend API (Major)",
                    "Employee Payroll System",
                    "Blog App with JWT Auth",
                ],
            },
            {
                section: "Interview & Placement Preparation",
                topics: [
                    "Top Java Interview Questions",
                    "DSA with Java (Optional Add-on)",
                    "Resume Building & Portfolio",
                    "Mock Interviews",
                ],
            }
        ],
        image: javabackend,
    },

    {
        id: "mern",
        title: "MERN Stack Development",
        duration: "6 Months",
        batch: "Running",
        price: "₹35,500",
        oldPrice: "₹45,000",
        description:
            "Master MongoDB, Express.js, React, and Node.js. Build full-stack web apps from scratch and get placement support.",
        rating: 4.8,
        students: 700,
        highlights: [
            "Available Online and Offline",
            "Certified Course",
            "1-on-1 Doubt Sessions",
            "Placement Assistance",
        ],
        curriculum: [
            {
                section: "Introduction to Web Development",
                topics: ["HTML", "CSS", "JavaScript Basics", "Version Control (Git)"],
            },
            {
                section: "JavaScript & Web Fundamentals",
                topics: ["Basics of JavaScript", " Functions", "Arrays and Objects", "String and Array Methods", "Template Literals", "DOM Manipulation", "Event Handling", " Functions & Scope", "Higher-Order Functions","Debouncing and Throttling",
                    "Arrow functions", "Promises and Async/Await", "Error Handling", "JSON Parsing", "Local Storage and Session Storage", "AJAX and Fetch API", "Introduction to ES6+ Features", "Classes & Inheritance ", "Optional Chaining","Nullish Coalescing",
                    "Array/Object methods ","Advance Javascript","promises", "Async/Await", "Error Handling", "JSON Parsing", "Local Storage and Session Storage", "AJAX and Fetch API", "Introduction to ES6+ Features", "Classes & Inheritance ", "Optional Chaining","Nullish Coalescing",
                ], 
            },
            {
                section: "React.js Development",
                topics: ["What is React and why use it?", "Setting up project with Create React App (CRA) or Vite", "Components", "Props and Prop Drilling", "Hooks", "Event Handling in React", "Conditional Rendering", "Forms", "Routing", "State Management", "Component Design", " Performance Optimization","React Query / TanStack Query"],
            },
            {
                section: "Node.js & Express.js Backend",
                topics: [
                    "Node.js fundamentals",
                    "Express.js APIs",
                    "Authentication and Authorization",
                    "Connecting Backend to Frontend",
                ],
            },
            {
                section: "MongoDB & Database Management",
                topics: ["CRUD Operations", "Schema Design", "Mongoose ODM"],
            },
        ],
        image: mern,
    },
   
    {
        id: "python-dev",
        title: "Python Development",
        duration: "5 Months",
        batch: "Running",
        price: "₹28,000",
        oldPrice: "₹38,000",
        description:
            "Learn Python programming from basics to advanced. Build web apps, automation scripts, and data projects.",
        rating: 4.6,
        students: 450,
        highlights: [
            "Available Online and Offline",
            "Certified Course",
            "1-on-1 Doubt Sessions",
            "Placement Assistance",
        ],
        curriculum: [
            {
                section: "Python Basics",
                topics: [
                    "Syntax and Variables",
                    "Data Types",
                    "Control Flow",
                    "Functions",
                ],
            },
            {
                section: "Advanced Python",
                topics: [
                    "Object-Oriented Programming",
                    "Modules and Packages",
                    "Error Handling",
                    "File Operations",
                ],
            },
            {
                section: "Django Development",
                topics: [
                    "Introduction to Django & MVT Architecture",
                    "Setting up the Development Environment",
                    "Creating Projects & Apps",
                    "URL Routing and Views",
                    "Templates and Static Files",
                    "Models and Django ORM Basics",
                    "Admin Interface Customization",
                    "Forms and ModelForms",
                    "User Authentication and Authorization",
                    "Django Signals",
                    "File Uploads and Media Handling",
                    "Django Messaging Framework",
                    "Class-Based Views and Mixins",
                    "Django REST Framework for APIs",
                    "Middleware Development",
                    "Caching with Redis or Memcached",
                    "Asynchronous Tasks with Celery",
                    "Deployment on Heroku/AWS"
                ],
            },
            {
                section: "Flask Development",
                topics: [
                    "Introduction to Flask & Microservices Concept",
                    "Installing and Setting up Flask",
                    "Creating Routes and Handling Requests",
                    "HTML Templates with Jinja2",
                    "Static Files and Forms",
                    "POST & GET Request Handling",
                    "Blueprints for Modular Apps",
                    "Flask Extensions (Flask-WTF, Flask-Login)",
                    "Database Integration with SQLAlchemy",
                    "REST API Creation with Flask-RESTful",
                    "File Uploads and Validation",
                    "Authentication & JWT Tokens",
                    "Background Jobs with Celery/RQ",
                    "API Versioning and Pagination",
                    "Third-Party API Integration",
                    "Deployment with Gunicorn, Nginx, Docker"
                ],
            },
            
        ],
        image: python,
    }

    // {
    //     id: "datascience",
    //     title: "Data Science & AI",
    //     duration: "6 Months",
    //     batch: "Upcoming",
    //     price: "₹45,000",
    //     oldPrice: "₹55,000",
    //     description:
    //         "Learn Machine Learning, Data Analysis, and AI techniques to solve real-world problems.",
    //     rating: 4.9,
    //     students: 500,
    //     highlights: ["Live Projects", "Python & ML", "Placement Support"],
    //     curriculum: [
    //         {
    //             section: "Python Programming Fundamentals",
    //             topics: [
    //                 "Variables & Data Types",
    //                 "Control Flow (if, else, loops)",
    //                 "Functions & Modules",
    //                 "File Handling",
    //                 "Object-Oriented Programming (OOP)",
    //                 "Exception Handling",
    //                 "Python Libraries Overview"
    //             ],
    //         },
    //         {
    //             section: "Python for Data Science",
    //             topics: [
    //                 "NumPy - Arrays, Broadcasting, Vectorization",
    //                 "Pandas - DataFrames, Series, Data Cleaning",
    //                 "Matplotlib & Seaborn - Visualization",
    //                 "Data Wrangling & Preprocessing",
    //                 "Exploratory Data Analysis (EDA)"
    //             ],
    //         },
    //         {
    //             section: "Statistics & Probability",
    //             topics: [
    //                 "Descriptive Statistics",
    //                 "Probability Theory & Distributions",
    //                 "Inferential Statistics",
    //                 "Hypothesis Testing",
    //                 "Correlation & Covariance"
    //             ],
    //         },
    //         {
    //             section: "SQL for Data Science",
    //             topics: [
    //                 "SQL Basics",
    //                 "Joins & Subqueries",
    //                 "Aggregations & Window Functions",
    //                 "Data Manipulation with SQL"
    //             ],
    //         },
    //         {
    //             section: "Machine Learning",
    //             topics: [
    //                 "Supervised Learning (Regression, Classification)",
    //                 "Unsupervised Learning (Clustering, PCA)",
    //                 "Model Selection & Evaluation",
    //                 "Bias-Variance Tradeoff",
    //                 "Overfitting & Regularization",
    //                 "Scikit-learn Pipelines"
    //             ],
    //         },
    //         {
    //             section: "Advanced Machine Learning",
    //             topics: [
    //                 "Ensemble Methods (Random Forest, XGBoost)",
    //                 "Feature Engineering",
    //                 "Hyperparameter Tuning (GridSearch, RandomSearch)",
    //                 "Model Interpretability (SHAP, LIME)"
    //             ],
    //         },
    //         {
    //             section: "Deep Learning & Neural Networks",
    //             topics: [
    //                 "Introduction to Neural Networks",
    //                 "TensorFlow/Keras Basics",
    //                 "CNNs for Image Processing",
    //                 "RNNs & LSTM for Time Series/Text",
    //                 "Transfer Learning",
    //                 "Model Optimization"
    //             ],
    //         },
    //         {
    //             section: "Natural Language Processing (NLP)",
    //             topics: [
    //                 "Text Cleaning & Preprocessing",
    //                 "TF-IDF & Word Embeddings",
    //                 "Sentiment Analysis",
    //                 "Text Classification",
    //                 "NLP with Transformers"
    //             ],
    //         },
    //         {
    //             section: "Projects & Real-world Case Studies",
    //             topics: [
    //                 "House Price Prediction",
    //                 "Customer Segmentation",
    //                 "Sentiment Analysis on Tweets",
    //                 "Image Classification",
    //                 "Loan Default Prediction"
    //             ],
    //         },
    //         {
    //             section: "Deployment & MLOps Basics",
    //             topics: [
    //                 "Model Deployment with Flask",
    //                 "Using Streamlit for ML Apps",
    //                 "Introduction to Docker",
    //                 "Version Control (Git & GitHub)",
    //                 "Cloud Deployment (Render, Heroku, AWS basics)"
    //             ],
    //         },
    //         {
    //             section: "Soft Skills & Placement Training",
    //             topics: [
    //                 "Resume Building",
    //                 "Mock Interviews",
    //                 "Aptitude & Reasoning",
    //                 "Communication Skills"
    //             ],
    //         }
    //     ],
    //     image: datascienceimg,
    // },

   
];
