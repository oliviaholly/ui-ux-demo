export default function UWaterlooPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">
                UWaterloo & HCI
            </h1>
            <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
                <p className="text-center text-xl">
                    For software developers at UWaterloo wanting to learn how to
                    develop empathetically, the HCI specialization is an
                    excellent learning path.
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-4 text-xl">
                        🎓 HCI Specialization
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">
                        The specialization mandates courses on user interfaces
                        and user experiences, which help developers learn the
                        importance and methods of improving UI/UX,
                        accessibility, and responsiveness.
                    </p>
                    <a
                        href="https://ugradcalendar.uwaterloo.ca/page/ENG-Computer-Engineering-Specializations"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:shadow-lg"
                    >
                        Learn About HCI Specialization →
                    </a>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-4 text-xl">
                        🔬 HCI Research Lab
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">
                        UWaterloo's Human-Computer Interaction lab conducts
                        cutting-edge research in accessibility, user experience
                        design, and innovative interaction methods.
                    </p>
                    <a
                        href="https://hci.uwaterloo.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:shadow-lg"
                    >
                        Visit HCI Lab →
                    </a>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-4 text-xl">
                        📚 Related Courses
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-purple-700 dark:text-purple-300">
                        <div>
                            <h4 className="font-semibold mb-2">
                                Core HCI Courses:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>CS 349 - User Interfaces</li>
                                <li>CS 466 - Algorithm Design</li>
                                <li>CS 486 - Artificial Intelligence</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Design & UX:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>FINE 112 - Visual Culture</li>
                                <li>PSYCH 207 - Cognitive Psychology</li>
                                <li>
                                    SYDE 543 - Design of Interactive Systems
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        Why Study HCI at UWaterloo?
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                        Learn to bridge the gap between technical implementation
                        and human needs. Develop empathy-driven design skills
                        that make technology accessible and enjoyable for
                        everyone.
                    </p>
                </div>

                <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400 italic">
                        "Human-Computer Interaction principles reflect empathy
                        in action, and by prioritizing responsiveness and
                        accessible design, technology works for everyone."
                    </p>
                </div>
            </div>
        </>
    );
}
