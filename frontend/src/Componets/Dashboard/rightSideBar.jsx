export default function RightSideBar() {
  return (
    <aside className="hidden xl:col-span-4 xl:block">
      <div className="sticky top-4 space-y-4">
        <section aria-labelledby="who-to-follow-heading">
          <div className="rounded-lg bg-white shadow">
            <div className="p-6">
              <h2
                id="who-to-follow-heading"
                className="text-base font-medium text-gray-900"
              >
                Who to follow
              </h2>
              <div className="mt-6 flow-root">
                <ul role="list" className="-my-4 divide-y divide-gray-200">
                  <li className="flex items-center space-x-3 py-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Leonard Krasner"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        <a href="#">Leonard Krasner</a>
                      </p>
                      <p className="text-sm text-gray-500">
                        <a href="#">@leonardkrasner</a>
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-full bg-rose-50 px-3 py-0.5 text-sm font-medium text-rose-700 hover:bg-rose-100"
                      >
                        <svg
                          className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <span>Follow</span>
                      </button>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3 py-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Floyd Miles"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        <a href="#">Floyd Miles</a>
                      </p>
                      <p className="text-sm text-gray-500">
                        <a href="#">@floydmiles</a>
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-full bg-rose-50 px-3 py-0.5 text-sm font-medium text-rose-700 hover:bg-rose-100"
                      >
                        <svg
                          className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <span>Follow</span>
                      </button>
                    </div>
                  </li>
                  {/* More "Who to follow" suggestions... */}
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="trending-heading">
          <div className="rounded-lg bg-white shadow">
            <div className="p-6">
              <h2
                id="trending-heading"
                className="text-base font-medium text-gray-900"
              >
                Trending
              </h2>
              <div className="mt-6 flow-root">
                <ul role="list" className="-my-4 divide-y divide-gray-200">
                  <li className="flex space-x-3 py-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Floyd Miles"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-800">
                        What books do you have on your bookshelf just to look
                        smarter than you actually are?
                      </p>
                      <div className="mt-2 flex">
                        <span className="inline-flex items-center text-sm">
                          <button
                            type="button"
                            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                          >
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902zM10 9a1 1 0 110-2 1 1 0 010 2zm-2 0a1 1 0 11-2 0 1 1 0 012 0zm5-1a1 1 0 100 2 1 1 0 000-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="font-medium text-gray-900">
                              291
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </li>
                  {/* More trending topics... */}
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}
