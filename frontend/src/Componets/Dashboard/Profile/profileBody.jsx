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
                    className={`text-3xl font-semibold mb-4 ${
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
          
            </div>
        </div>
    </main>
);
}
