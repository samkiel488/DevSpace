import { useState } from "react";

export default function DashboardProfileBody({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: "Lorem Ipsum",
    role: "Software Developer",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores doloremque sit quo soluta dolore similique ducimus enim omnis laboriosam assumenda, facere libero, molestias, odio necessitatibus! Cumque, sed beatae! Nihil.",
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleAddSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ""] });
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log("Updated Profile Data:", formData);
  };

  return (
    <main
      className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {isEditing ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-8 animate-fadeIn"
        >
          <div className="md:w-1/3 text-center">
            <img
              src="https://i.pravatar.cc/300"
              alt="Profile Picture"
              className={`rounded-full w-48 h-48 mx-auto mb-4 border-4 shadow-lg ${
                isDarkMode
                  ? "border-blue-900 hover:scale-105"
                  : "border-indigo-800 hover:scale-105"
              } transition-transform duration-300`}
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`text-2xl font-bold mb-2 text-center w-full ${
                isDarkMode
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-white text-indigo-800 border-gray-300"
              } border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-indigo-500`}
            />
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className={`text-center w-full ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300 border-gray-700"
                  : "bg-white text-gray-600 border-gray-300"
              } border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          <div className="md:w-2/3">
            <h2
              className={`text-3xl font-semibold mb-4 ${
                isDarkMode ? "text-white" : "text-indigo-800"
              }`}
            >
              About Me
            </h2>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleInputChange}
              className={`w-full h-40 mb-6 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300 border-gray-700"
                  : "bg-white text-gray-700 border-gray-300"
              } border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-indigo-500`}
            />
            <h2
              className={`text-xl font-semibold mb-4 ${
                isDarkMode ? "text-white" : "text-indigo-800"
              }`}
            >
              Skills
            </h2>
            <div className="flex flex-col gap-4 mb-6">
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className={`flex-1 ${
                      isDarkMode
                        ? "bg-gray-800 text-gray-300 border-gray-700"
                        : "bg-white text-gray-700 border-gray-300"
                    } border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-indigo-500`}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(index)}
                    className={`px-3 py-1 rounded-lg shadow-md ${
                      isDarkMode
                        ? "bg-red-700 text-white hover:bg-red-800"
                        : "bg-red-500 text-white hover:bg-red-600"
                    }`}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddSkill}
                className={`px-4 py-2 rounded-lg shadow-md ${
                  isDarkMode
                    ? "bg-blue-900 text-white hover:bg-indigo-800"
                    : "bg-indigo-800 text-white hover:bg-blue-900"
                }`}
              >
                Add Skill
              </button>
            </div>
            <button
              type="submit"
              className={`mt-4 px-6 py-3 rounded-lg shadow-md transition-colors duration-300 ${
                isDarkMode
                  ? "bg-blue-900 text-white hover:bg-indigo-800"
                  : "bg-indigo-800 text-white hover:bg-blue-900"
              }`}
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col md:flex-row gap-8 animate-fadeIn">
          <div className="md:w-1/3 text-center">
            <img
              src="https://i.pravatar.cc/300"
              alt="Profile Picture"
              className="rounded-full w-48 h-48 mx-auto mb-4 border-4 shadow-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{formData.name}</h2>
            <p className="text-gray-600">{formData.role}</p>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="mb-6">{formData.about}</p>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm shadow-md hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className={`mt-4 px-6 py-3 rounded-lg shadow-md transition-colors duration-300 ${
                isDarkMode
                  ? "bg-blue-900 text-white hover:bg-indigo-800"
                  : "bg-indigo-800 text-white hover:bg-blue-900"
              }`}
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
