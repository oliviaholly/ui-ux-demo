export default function AccessibilityPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">
                What Web Accessibility Means
            </h1>
            <div className="space-y-4 text-lg leading-relaxed max-w-4xl">
                <p>
                    Accessibility includes designing for people with visual
                    impairments, hearing loss, motor disabilities, cognitive
                    limitations, and more. Someone who is blind may use a screen
                    reader, while someone with arthritis might rely on keyboard
                    or voice commands rather than mice.
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-4">
                        WCAG Principles (W3C Standards):
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="font-semibold text-purple-700 dark:text-purple-300">
                                1. Perceivable
                            </div>
                            <p className="text-sm text-purple-600 dark:text-purple-400">
                                Information is presented in ways users can sense
                            </p>

                            <div className="font-semibold text-purple-700 dark:text-purple-300">
                                2. Operable
                            </div>
                            <p className="text-sm text-purple-600 dark:text-purple-400">
                                Users can navigate regardless of input method
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold text-purple-700 dark:text-purple-300">
                                3. Understandable
                            </div>
                            <p className="text-sm text-purple-600 dark:text-purple-400">
                                Clear language, predictable layout
                            </p>

                            <div className="font-semibold text-purple-700 dark:text-purple-300">
                                4. Robust
                            </div>
                            <p className="text-sm text-purple-600 dark:text-purple-400">
                                Compatible with assistive technologies
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                        Specific Accessibility Guidelines:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-orange-700 dark:text-orange-300">
                        <li>
                            Adding alt text for images (screen reader support)
                        </li>
                        <li>
                            Ensuring strong color contrast for low vision users
                        </li>
                        <li>Using semantic HTML for assistive tech</li>
                        <li>
                            Avoiding hover-only menus (excludes touch users)
                        </li>
                        <li>
                            Making tap targets large enough for motor
                            limitations
                        </li>
                        <li>Providing captions/transcripts for audio/video</li>
                    </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-800 dark:text-blue-200">
                        Accessibility overlaps heavily with responsive UI. A
                        responsive design that adjusts to zoom levels, works
                        with screen readers, and maintains clarity across screen
                        sizes is more likely to be accessible to a wider
                        audience.
                    </p>
                </div>
            </div>
        </>
    );
}
