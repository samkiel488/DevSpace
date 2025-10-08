export default function MemberCard() {
  return (
    <div className="flex justify-center">
      <div className="flex bg-slate-300 gap-2 rounded-xl flex-col">
        <div className="flex flex-col">
          <img
            src="/images/blank-profile-picture-973460_960_720.webp"
            alt=""
            className="h-[200px] w-full object-cover rounded-t-xl"
          />
        </div>
        <div className="flex flex-col gap-y-2 px-3 pb-2">
          <div className="flex flex-col md:flex-row justify-between gap-y-3 items-center">
            <div className="flex flex-col ">
              <h1 className="font-semibold text-[20px]">Areo Ayomide Philip</h1>
              <span className="text-sm font-[350] text-center md:text-left">
                Anonymous
              </span>
            </div>
          </div>
          <p className=" font-[350]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            velit, nulla nobis veritatis doloribus commodi illum sapiente
            asperiores ad temporibus cum, illo, non deleniti saepe iusto
            mollitia. Cupiditate incidunt autem, eligendi ipsum saepe aspernatur
            alias consequatur cum, et eius provident quasi suscipit quibusdam
            nisi dicta necessitatibus fuga! Ab, adipisci quam.
          </p>
          <div className="flex justify-between items-center">
            <span className="bg-green-800 px-2 py-1 text-sm rounded-xl text-white text-center">
              Full-Stack Developer
            </span>
            <button className="dark-button cursor-pointer">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}
