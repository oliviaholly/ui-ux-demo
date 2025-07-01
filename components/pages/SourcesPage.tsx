export default function SourcesPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">Sources</h1>
            <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                    <p className="text-purple-700 dark:text-purple-300">
                        This demo was created to illustrate the principles of
                        responsive UI and accessibility design. The sources
                        below informed the content and examples presented.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold text-xl">Academic Sources</h3>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="font-semibold mb-2">
                            Marcotte, E. (2010). Responsive Web Design.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            A List Apart. The foundational article that
                            introduced the concept of responsive web design.
                        </p>
                        <a
                            href="https://alistapart.com/article/responsive-web-design/"
                            className="text-blue-600 hover:text-blue-800 underline text-sm"
                        >
                            View Article →
                        </a>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="font-semibold mb-2">
                            Web Content Accessibility Guidelines (WCAG) 2.1
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            W3C. International standards for web accessibility.
                        </p>
                        <a
                            href="https://www.w3.org/WAI/WCAG21/quickref/"
                            className="text-blue-600 hover:text-blue-800 underline text-sm"
                        >
                            View Standards →
                        </a>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="font-semibold mb-2">
                            University of Waterloo Web Resources
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Guidelines and resources for accessible web design
                            at UWaterloo.
                        </p>
                        <a
                            href="https://uwaterloo.ca/web-resources/accessibility/"
                            className="text-blue-600 hover:text-blue-800 underline text-sm"
                        >
                            View Guidelines →
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold text-xl">Design Resources</h3>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="font-semibold mb-2">Tailwind CSS</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Utility-first CSS framework used for responsive
                            design in this demo.
                        </p>
                        <a
                            href="https://tailwindcss.com/"
                            className="text-blue-600 hover:text-blue-800 underline text-sm"
                        >
                            View Framework →
                        </a>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="font-semibold mb-2">shadcn/ui</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Accessible component library used for interactive
                            elements.
                        </p>
                        <a
                            href="https://ui.shadcn.com/"
                            className="text-blue-600 hover:text-blue-800 underline text-sm"
                        >
                            View Components →
                        </a>
                    </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        Note on Sources
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300">
                        This demo was created for educational purposes to
                        illustrate responsive design and accessibility
                        principles. While the content draws from established
                        guidelines and best practices, it&apos;s not intended as
                        a comprehensive academic resource.
                    </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        Built With
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300">
                        This demo was built using Next.js, TypeScript, Tailwind
                        CSS, and shadcn/ui components. The animations and
                        interactions demonstrate responsive design principles in
                        practice.
                    </p>
                </div>
            </div>
        </>
    );
}
