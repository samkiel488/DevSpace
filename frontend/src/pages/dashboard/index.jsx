export default function DashboardHome() {
  return (
    <section>
      <div className="flex w-full h-20 bg-black justify-between items-center p-2 pr-4">
        <div className="flex justify-center items-center gap-1">
          <img src="/images/logo-bg.png" className="h-17 w-17" />
          <p className="text-white font-bold">D3V++</p>
        </div>
        <div className="text-white flex gap-6 items-center">
          <ul className="flex flex-row gap-5 justify-center items-center font-semibold">
            <li>
              <a href="/dashboard">Home</a>
            </li>
            <li>
              <a href="#">Create</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
          </ul>
          <div className="flex relative justify-center items-center">
            <img
              src="/images/blank-profile-picture-973460_960_720.webp"
              alt="profile"
              className="h-10 w-10 rounded-full"
            />
            <div className="absolute flex flex-col gap-3 bg-gray-100 text-black font-sans w-60 right-4 top-12 p-4">
              <p>Profile</p>
              <p>Settings</p>
              <p>Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
