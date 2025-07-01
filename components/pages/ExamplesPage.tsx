"use client";
import { useState } from "react";

export default function ExamplesPage() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [buttonPressed, setButtonPressed] = useState(false);

    const handlePressStart = () => {
        setButtonPressed(true);
        // Add haptic feedback for mobile devices
        if (navigator.vibrate) {
            navigator.vibrate(50); // 50ms vibration
        }
    };

    const handlePressEnd = () => {
        setButtonPressed(false);
    };

    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">
                What Responsive UI & Accessibility Looks Like
            </h1>
            <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
                <p>
                    Responsiveness and accessibility extends past just scaling
                    UI up and down – it's about rethinking hierarchy, flow, and
                    interaction patterns.
                </p>

                {/* Interactive Responsive Example */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border">
                    <h3 className="font-semibold mb-4">
                        Try This: Responsive Navigation
                    </h3>
                    <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded border">
                        <div className="font-semibold">My Website</div>

                        {/* Desktop Navigation - hidden on small screens */}
                        <nav className="hidden md:flex space-x-4">
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Contact
                            </a>
                        </nav>

                        {/* Mobile Hamburger - shown on small screens */}
                        <button
                            onClick={() => setShowSidebar(!showSidebar)}
                            className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle navigation menu"
                        >
                            <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"></div>
                            <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"></div>
                            <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {showSidebar && (
                        <div className="md:hidden mt-2 bg-white dark:bg-gray-900 border rounded p-4">
                            <nav className="flex flex-col space-y-2">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:text-blue-800 py-2"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:text-blue-800 py-2"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:text-blue-800 py-2"
                                >
                                    Contact
                                </a>
                            </nav>
                        </div>
                    )}

                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Try resizing your browser window to see how the
                        navigation adapts!
                    </p>
                </div>

                {/* Interactive Accessibility Example */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border">
                    <h3 className="font-semibold mb-4">
                        Try This: Accessible Button
                    </h3>
                    <button
                        // Mouse events
                        onMouseDown={handlePressStart}
                        onMouseUp={handlePressEnd}
                        onMouseLeave={handlePressEnd}
                        // Touch events for mobile
                        onTouchStart={handlePressStart}
                        onTouchEnd={handlePressEnd}
                        onTouchCancel={handlePressEnd}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-150 active:scale-95 
              ${
                  buttonPressed
                      ? "bg-blue-700 text-white transform scale-95 shadow-inner"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
              }`}
                        aria-label="Example accessible button with visual and haptic feedback"
                    >
                        Press Me!
                    </button>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Notice the hover effects, press feedback, and proper
                        labeling for screen readers.
                        <br />
                        <span className="text-xs">
                            On mobile: Should provide haptic feedback
                            (vibration) when pressed!
                        </span>
                    </p>
                </div>

                {/* Testing Guidelines */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                        Quick Responsiveness Tests:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-700 dark:text-yellow-300">
                        <li>
                            Resize your browser window. Does content readjust
                            and remain usable?
                        </li>
                        <li>
                            Open the site on your phone. Is text readable? Are
                            menus accessible?
                        </li>
                        <li>
                            Set your zoom to 200%. Can the site still be
                            navigated at high zoom?
                        </li>
                        <li>
                            Try navigating with only your keyboard (Tab, Enter,
                            Space)
                        </li>
                    </ul>
                </div>

                <p>
                    Well-designed responsive interfaces prioritize readability,
                    tap targets, and intuitive navigation across contexts. Even
                    subtle UI tricks like skeleton elements help users with slow
                    internet connections.
                </p>
            </div>
        </>
    );
}
