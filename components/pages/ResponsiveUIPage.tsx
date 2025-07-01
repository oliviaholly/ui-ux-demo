"use client";

import LaptopIcon from "../assets/LaptopIcon";
import MobilePhoneIcon from "../assets/MobilePhoneIcon";

export default function ResponsiveUIPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">
                What Responsive UI Means
            </h1>
            <div className="space-y-4 text-lg leading-relaxed max-w-4xl">
                <p>
                    At its core, responsive UI means that the interface detects
                    the environment it&apos;s being accessed from - including
                    screen size, resolution, touch capabilities, and more - and
                    adjusts layout and interaction accordingly.
                </p>

                {/* Device Indicator */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border">
                    <h3 className="font-semibold text-center mb-4">
                        Responsive UI infers your device type
                    </h3>
                    <div className="flex justify-center items-center gap-8">
                        {/* Mobile Phone */}
                        <div
                            className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 md:opacity-50 md:scale-90 ${"opacity-100 scale-100 bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500 md:bg-transparent md:border-transparent"}`}
                        >
                            <div className="mb-2 w-[100px] h-[100px] flex items-center justify-center">
                                <MobilePhoneIcon className="w-full h-full" />
                            </div>
                            <span className="text-sm font-medium">Mobile</span>
                            <span className="text-xs text-purple-600 dark:text-purple-400 md:hidden">
                                (You are here, I think!)
                            </span>
                        </div>

                        {/* Old Desktop Monitor */}
                        <div
                            className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 opacity-50 scale-90 md:opacity-100 md:scale-100 md:bg-purple-100 md:dark:bg-purple-900/30 md:border-2 md:border-purple-500`}
                        >
                            <div className="mb-2 w-[100px] h-[100px] flex items-center justify-center">
                                <LaptopIcon className="w-full h-full" />
                            </div>
                            <span className="text-sm font-medium">Desktop</span>
                            <span className="text-xs text-purple-600 dark:text-purple-400 hidden md:block">
                                (You are here, I think!)
                            </span>
                        </div>
                    </div>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                        Try resizing your browser window to see this change!
                    </p>
                </div>

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
                        &quot;Responsive UI&quot; was coined by{" "}
                        <strong>Ethan Marcotte in 2010</strong>, originally
                        referring to making websites adapt to different screen
                        sizes using fluid grids, flexible images, and media
                        queries.
                    </p>
                    <p className="mt-2">
                        <strong>Luke Wroblewski</strong> (Google) introduced
                        &quot;mobile-first&quot; development in 2011,
                        emphasizing designing for the smallest screen and
                        scaling up - now the current standard.
                    </p>
                </div>

                <p>
                    Tools like{" "}
                    <span className="font-semibold text-purple-600">
                        Tailwind CSS
                    </span>
                    ,{" "}
                    <span className="font-semibold text-purple-600">
                        Material UI
                    </span>
                    ,{" "}
                    <span className="font-semibold text-purple-600">
                        shadcn
                    </span>
                    , and{" "}
                    <span className="font-semibold text-purple-600">
                        Bootstrap
                    </span>{" "}
                    include responsive utilities by default, making interfaces
                    more accessible based on user settings.
                </p>
            </div>
        </>
    );
}
