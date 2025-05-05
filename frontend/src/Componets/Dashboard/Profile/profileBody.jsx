export default function DashboardProfileBody({ isDarkMode }) {
return (
    <main
        className={`flex-1 p-6 overflow-y-auto ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
        }`}
    >
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
                <img
                    src="https://i.pravatar.cc/300"
                    alt="Profile Picture"
                    className={`rounded-full w-48 h-48 mx-auto mb-4 border-4 ${
                        isDarkMode
                            ? "border-blue-900 hover:scale-105"
                            : "border-indigo-800 hover:scale-105"
                    } transition-transform duration-300`}
                />
                <h1
                    className={`text-2xl font-bold mb-2 ${
                        isDarkMode ? "text-white" : "text-indigo-800"
                    }`}
                >
                    John Doe
                </h1>
                <p
                    className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    Software Developer
                </p>
                <button
                    className={`mt-4 px-4 py-2 rounded-lg transition-colors duration-300 ${
                        isDarkMode
                            ? "bg-blue-900 text-white hover:bg-indigo-800"
                            : "bg-indigo-800 text-white hover:bg-blue-900"
                    }`}
                >
                    Edit Profile
                </button>
            </div>
            <div className="md:w-2/3 md:pl-8">
                <h2
                    className={`text-xl font-semibold mb-4 ${
                        isDarkMode ? "text-white" : "text-indigo-800"
                    }`}
                >
                    About Me
                </h2>
                <p
                    className={`mb-6 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    Passionate software developer with 5 years of experience in web
                    technologies. I love creating user-friendly applications and solving
                    complex problems.
                </p>
                <h2
                    className={`text-xl font-semibold mb-4 ${
                        isDarkMode ? "text-white" : "text-indigo-800"
                    }`}
                >
                    Skills
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                    {["JavaScript", "React", "Node.js", "Python", "SQL"].map((skill) => (
                        <span
                            key={skill}
                            className={`px-3 py-1 rounded-full text-sm ${
                                isDarkMode
                                    ? "bg-gray-800 text-gray-300"
                                    : "bg-indigo-100 text-indigo-800"
                            }`}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                <h2
                    className={`text-xl font-semibold mb-4 ${
                        isDarkMode ? "text-white" : "text-indigo-800"
                    }`}
                >
                    Contact Information
                </h2>
                <ul
                    className={`space-y-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    <li className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 mr-2 ${
                                isDarkMode ? "text-blue-900" : "text-indigo-800"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        john.doe@example.com
                    </li>
                    <li className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 mr-2 ${
                                isDarkMode ? "text-blue-900" : "text-indigo-800"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        +1 (555) 123-4567
                    </li>
                    <li className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 mr-2 ${
                                isDarkMode ? "text-blue-900" : "text-indigo-800"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        San Francisco, CA
                    </li>
                </ul>
            </div>
        </div>
    </main>
);
}
