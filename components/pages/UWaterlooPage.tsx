export default function UWaterlooPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">
                UWaterloo & Accessible Design
            </h1>
            <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
                <p>
                    The University of Waterloo continues to prioritize
                    accessible and responsive design across its digital
                    platforms. As a research-focused institution, accessibility
                    is both an educational mission and a practical commitment.
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        Committed to Excellence
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300">
                        UWaterloo adheres to <strong>WCAG 2.1 standards</strong>{" "}
                        across its websites, ensuring compatibility with screen
                        readers and keyboard navigation. Their{" "}
                        <a
                            href="https://uwaterloo.ca/web-resources/accessibility/"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            Web Accessibility guidelines
                        </a>{" "}
                        provide resources for faculty and staff.
                    </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                    <h3 className="font-semibold mb-4">
                        University Tools & Resources:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="font-semibold text-purple-700 dark:text-purple-300">
                                Student Success Services
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                AccessAbility Services for alternative testing,
                                note-taking, and more
                            </p>

                            <div className="font-semibold text-purple-700 dark:text-purple-300">
                                Campus Technology
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                LEARN (D2L) with accessibility features and
                                mobile-optimized interfaces
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold text-purple-700 dark:text-purple-300">
                                Digital Infrastructure
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Responsive design across Quest, UWaterloo
                                websites, and campus apps
                            </p>

                            <div className="font-semibold text-purple-700 dark:text-purple-300">
                                Research & Development
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Programs like the HCI Lab and CS research into
                                inclusive design
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                        Academic Programs
                    </h3>
                    <p className="text-indigo-700 dark:text-indigo-300 mb-4">
                        UWaterloo offers courses and research opportunities in
                        HCI, accessibility, and user experience design across
                        multiple faculties.
                    </p>
                    <div className="bg-white dark:bg-indigo-950/50 p-4 rounded border">
                        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                            Example Course: CS 446 (Software Architecture)
                        </p>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400">
                            Covers responsive design patterns, user interface
                            principles, and accessibility considerations in
                            software development.
                        </p>
                    </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        Leading by Example
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300">
                        As a top Canadian research university, UWaterloo sets
                        standards for how educational institutions should
                        approach digital accessibility. By investing in
                        responsive design and inclusive technology, the
                        university demonstrates that accessibility isn&apos;t an
                        afterthought - it&apos;s fundamental to good design.
                    </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        Student Impact
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300">
                        These efforts directly benefit thousands of students,
                        faculty, and staff who rely on digital tools daily.
                        Whether accessing course materials on mobile devices or
                        using assistive technologies, UWaterloo&apos;s
                        commitment to accessible design ensures everyone can
                        participate fully in university life.
                    </p>
                </div>
            </div>
        </>
    );
}
