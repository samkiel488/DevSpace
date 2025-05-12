export default function HomeMain({ post }) {
    return (
        <main className="lg:col-span-7 xl:col-span-10">
            <div className="mt-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
                    Recent Posts
                </h1>
                <ul role="list" className="space-y-4">
                    {post.map((item) => {
                        return (
                            <li className="bg-white dark:bg-gray-800 px-4 py-6 m-5 shadow sm:rounded-lg sm:px-6">
                                <article aria-labelledby="question-title-81614">
                                    <div>
                                        <div className="flex space-x-3">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    <a href="#" className="hover:underline">
                                                        {item.name}
                                                    </a>
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    <a href="#" className="hover:underline">
                                                        <time dateTime="2020-12-09T11:43:00">
                                                            {item.date}
                                                        </time>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <h2
                                            id="question-title-81614"
                                            className="mt-4 text-base font-medium text-gray-900 dark:text-gray-100"
                                        >
                                            {item.postHeadline}
                                        </h2>
                                    </div>
                                    <div className="mt-2 space-y-4 text-sm text-gray-700 dark:text-gray-300">
                                        <p>{item.postText}</p>
                                    </div>
                                    <div className="mt-6 flex justify-between space-x-8"></div>
                                </article>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}
