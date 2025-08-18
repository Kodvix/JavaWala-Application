import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
    return (
        <div className="bg-black shadow-md rounded-lg p-4 flex flex-col h-[380px]">
            <img
                src={course.image}
                alt={course.title}
                className="w-full h-35 object-contain sm:object-cover rounded bg-white"
            />

            <h3 className="text-lg font-semibold mt-2 line-clamp-2 text-white">{course.title}</h3>
            <p className="text-gray-600 mt-1 text-sm">{course.duration}</p>

            <div className="flex items-center mt-2">
                <span className="text-blue-600 font-bold">{course.price}</span>
                <span className="line-through text-gray-400 ml-2">{course.oldPrice}</span>
                <span className="text-blue-100 font-normal ml-3">{course.batch}</span>
            </div>

            {/* Spacer pushes button to bottom */}
            <div className="flex-grow"></div>

            <Link
                to={`/course/${course.id}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
            >
                Explore Now
            </Link>
        </div>
    );
}
