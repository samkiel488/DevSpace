import React, { useState } from "react";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // Accessing form data
    const form = e.target;
    console.log("Form submitted!");
    console.log("Name:", form.name.value); // Accessing name value
    console.log("Email:", form.email.value); // Accessing email value
    console.log("Phone:", form.phone.value); // Accessing phone value
    console.log("Message:", form.message.value); // Accessing message value
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white p-4 flex flex-col items-center pb-8">
      <div className="w-full max-w-6xl mt-8">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
          Let's Connect
        </h1>
        <p className="text-center text-white dark:text-white text-xl mb-12">
          Choose your preferred way to reach out
        </p>

        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Contact Info */}
          <div className="bg-gray-800 p-8 rounded-3xl shadow-xl w-full md:w-1/2 space-y-8">
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            {[
              {
                label: "Name:",
                value: name ? name : "John Doe",
                iconBg: "bg-red-900",
                iconColor: "text-red-400",
                iconPath:
                  "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                label: "Email:",
                value: email ? email : "example@gmail.com",
                iconBg: "bg-blue-900",
                iconColor: "text-blue-400",
                iconPath:
                  "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              },
              {
                label: "Phone:",
                value: phone ? phone : "+1 234 567 890",
                iconBg: "bg-green-900",
                iconColor: "text-green-400",
                iconPath:
                  "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
              },
              {
                label: "Join Us:",
                value: (
                  <a href="#" className="text-blue-400 hover:underline">
                    Join Our Whatsapp Group
                  </a>
                ),
                iconBg: "bg-purple-900",
                iconColor: "text-purple-400",
                iconPath:
                  "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              },
            ].map(({ label, value, iconBg, iconColor, iconPath }, idx) => (
              <div className="flex items-center gap-4 group" key={idx}>
                <div
                  className={`${iconBg} p-4 rounded-xl transform transition-transform duration-300 group-hover:translate-y-2`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${iconColor}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={iconPath}
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">{label}</p>
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Multi-step Form */}
          <form className="bg-gray-800 p-8 rounded-3xl shadow-xl w-full md:w-1/2">
            {currentStep === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-6">What's your name?</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </>
            )}
            {currentStep === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-6">What's your email?</h2>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </>
            )}
            {currentStep === 3 && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Enter your phone number
                </h2>
                <input
                  type="text"
                  maxLength="14"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </>
            )}
            {currentStep === 4 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Your message</h2>
                <textarea
                  placeholder="Type your message here..."
                  className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  rows="4"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Characters: {message.length}/1000
                </p>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition duration-300"
                >
                  Back
                </button>
              )}

              {currentStep < 4 ? (
                ((currentStep === 1 && name) ||
                  (currentStep === 2 && email) ||
                  (currentStep === 3 && phone)) && (
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition duration-300 ml-auto"
                  >
                    Next
                  </button>
                )
              ) : (
                <input
                  type="submit"
                  value="Submit"
                  onSubmit={handleSubmit}
                  className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl transition duration-300 flex items-center gap-2 ml-auto cursor-pointer"
                />
              )}
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-2 ${
                    currentStep === step ? "w-8 bg-blue-500" : "w-2 bg-gray-600"
                  } rounded-full transition-all`}
                />
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
