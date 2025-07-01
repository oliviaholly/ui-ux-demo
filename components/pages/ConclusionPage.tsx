export default function ConclusionPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">Conclusion</h1>
            <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border-l-4 border-gradient-to-b from-blue-500 to-purple-500">
                    <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Designing for User Trust
                    </h2>
                    <p className="text-center text-xl mb-4">
                        Begins with responsive UI design and accessibility,
                        focusing on interfaces that adapt to different device
                        screens with emphasis on quality UI/UX.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                        <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">
                            ✓ Key Takeaways
                        </h3>
                        <ul className="space-y-2 text-green-700 dark:text-green-300">
                            <li>• Responsive design should feel invisible</li>
                            <li>
                                • Accessibility benefits everyone (curb-cut
                                effect)
                            </li>
                            <li>• Good design builds trust and credibility</li>
                            <li>• Poor design creates barriers to access</li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                        <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">
                            🎯 For Developers
                        </h3>
                        <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                            <li>• Study Human-Computer Interaction</li>
                            <li>• Learn user empathy principles</li>
                            <li>• Implement WCAG guidelines</li>
                            <li>• Test with diverse users</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                        The Bigger Picture
                    </h3>
                    <p className="text-orange-700 dark:text-orange-300">
                        This isn't just about technical implementation – it's
                        about <strong>social responsibility</strong>. Due to the
                        abundance of tools at developers' disposal, responsive
                        UI isn't necessarily a technical challenge – it's a
                        social one that requires developers to be empathetic and
                        consciously aware of who they develop applications for.
                    </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">
                        Moving Forward
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-3">
                        Human-Computer Interaction principles reflect empathy in
                        action. By prioritizing responsiveness and accessible
                        design, technology works for everyone.
                    </p>
                    <div className="bg-white dark:bg-blue-950/50 p-4 rounded border">
                        <p className="font-semibold text-blue-600 dark:text-blue-400 text-center">
                            "Technology should adapt to users, not the other way
                            around."
                        </p>
                    </div>
                </div>

                <div className="text-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        Thank you for exploring responsive UI and accessibility!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Remember: Every design decision you make can either
                        include or exclude someone from accessing information
                        and services.
                    </p>
                </div>
            </div>
        </>
    );
}
