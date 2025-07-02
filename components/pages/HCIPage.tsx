export default function HCIPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">
                Human-Computer Interaction (HCI)
            </h1>
            <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
                <p>
                    Designing for responsiveness, accessibility, and aesthetics
                    is a complex issue. Human-Computer Interaction (HCI) is a
                    cross-disciplinary field drawing upon Computer Science,
                    Cognitive Science, and Human Factors Engineering.
                </p>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border-l-4 border-indigo-500">
                    <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                        HCI Goals
                    </h3>
                    <p className="text-indigo-700 dark:text-indigo-300">
                        To reimagine how to make our digital experiences smooth,
                        intuitive, and enjoyable - through gestures, real-world
                        immersion, and gamification.{" "}
                        <strong>Empathy is at the heart of HCI</strong>.
                    </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 sm:p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                        HCI in Daily Life
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-700 dark:text-green-300">
                        <div>
                            <h4 className="font-semibold mb-2">
                                Desktop Innovations:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Graphical User Interfaces (GUIs)</li>
                                <li>Computer mice</li>
                                <li>Touchpads</li>
                                <li>Keyboards</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">
                                Mobile Innovations:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Touch-based interfaces</li>
                                <li>Multi-finger gestures</li>
                                <li>Haptic feedback</li>
                                <li>Voice commands</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        Beyond Screens
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">
                        HCI innovations appear in ATMs, car dashboards,
                        smartphones, smart appliances, and more. Tactile
                        responses make virtual actions feel more real, closing
                        the gap between user intent and execution.
                    </p>
                    <div className="bg-white dark:bg-purple-950/50 p-4 rounded border">
                        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                            Real-World Example: IKEA
                        </p>
                        <p className="text-sm text-purple-600 dark:text-purple-400">
                            Uses augmented reality (AR) and virtual reality (VR)
                            to let customers visualize how furniture would look
                            in their homes before purchase.
                        </p>
                    </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        HCI & Accessibility Connection
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300">
                        HCI principles reflect empathy in action. By
                        prioritizing responsiveness and accessible design,
                        technology works for everyone. Figma describes HCI as an
                        avenue to &quot;transform static designs into memorable
                        interactions.&quot;
                    </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        The Future of HCI
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300">
                        HCI continues to bridge the interaction between humans
                        and technology, making it more fun, intuitive, and
                        accessible. This improves user experiences and creates
                        better accessibility for all users.
                    </p>
                </div>
            </div>
        </>
    );
}
