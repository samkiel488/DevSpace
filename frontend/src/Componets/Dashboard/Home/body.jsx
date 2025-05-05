export default function DashboardHomeBody({ isDarkMode }) {
  return (
    <main
      className={`flex-1 p-6 overflow-y-auto ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-3xl font-bold">Welcome Back!</h1>
      <p className="mt-2">
        Explore your dashboard and manage your content efficiently.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Card 1", "Card 2", "Card 3"].map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2 className="text-xl font-semibold">{card}</h2>
            <p className="mt-2">Some description here.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
