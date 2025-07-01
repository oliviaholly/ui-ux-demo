export default function ResponsiveUIPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">
                What Responsive UI Means
            </h1>
            <div className="space-y-4 text-lg leading-relaxed max-w-4xl">
                <p>
                    At its core, responsive UI means that the interface detects
                    the environment it's being accessed from – including screen
                    size, resolution, touch capabilities, and more – and adjusts
                    layout and interaction accordingly.
                </p>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        Key Components:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
                        <li>CSS properties and media queries</li>
                        <li>Scalable vector graphics (SVGs)</li>
                        <li>Flexible containers</li>
                        <li>Adaptive typography</li>
                        <li>Loading states and skeleton elements</li>
                    </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-r-lg">
                    <p className="font-semibold mb-2">Historical Context:</p>
                    <p>
                        "Responsive UI" was coined by{" "}
                        <strong>Ethan Marcotte in 2010</strong>, originally
                        referring to making websites adapt to different screen
                        sizes using fluid grids, flexible images, and media
                        queries.
                    </p>
                    <p className="mt-2">
                        <strong>Luke Wroblewski</strong> (Google) introduced
                        "mobile-first" development in 2011, emphasizing
                        designing for the smallest screen and scaling up – now
                        the current standard.
                    </p>
                </div>

                <p>
                    Tools like{" "}
                    <span className="font-semibold text-blue-600">
                        Tailwind CSS
                    </span>
                    ,{" "}
                    <span className="font-semibold text-blue-600">
                        Material UI
                    </span>
                    ,{" "}
                    <span className="font-semibold text-blue-600">shadcn</span>,
                    and{" "}
                    <span className="font-semibold text-blue-600">
                        Bootstrap
                    </span>{" "}
                    include responsive utilities by default, making interfaces
                    more accessible based on user settings.
                </p>
            </div>
        </>
    );
}
