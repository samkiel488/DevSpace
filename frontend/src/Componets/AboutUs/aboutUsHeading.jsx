export default function AboutUsHeading() {
  return (
    <div class="sm:flex items-center max-w-screen-xl bg-white  dark:bg-slate-800 text-black dark:text-white">
      <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" className="w-300" />
        </div>
      </div>
      <div class="sm:w-1/2 p-5">
        <div class="text">
          <span class="text-black dark:text-white border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span class="text-blue-500">Our Company</span>
          </h2>
          <p class="text-black dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
}
