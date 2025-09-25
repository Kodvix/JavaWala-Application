import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
    return (
        <div className=" border border-gray-300 shadow-md rounded-lg p-4 bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded " />
            <h3 className="text-xl font-semibold mt-[1.5rem]">{course.title}</h3>
            <p className="text-gray-600 mt-1">{course.duration}</p>
            <div className="flex items-center mt-2">
                <span className="text-blue-600 font-bold">{course.price}</span>
                <span className="line-through text-gray-400 ml-2">{course.oldPrice}</span>
                <span className="text-gray-400 font-normal ml-3">{course.batch}</span>
            </div>
            <Link
                to={`/course/${course.id}`}
                className="mt-4 inline-block bg-[#EF7722] text-white px-4 py-2 rounded hover:text-black"
            >
                Explore Now
            </Link>
        </div>
    );
}
