export default function ConsequencesPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">
                Consequences of Its Absence
            </h1>
            <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        Good Design Should Feel Invisible
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                        If a user moves from one device to another, they
                        shouldn't have to relearn how to interact with your
                        product. <strong>Spotify</strong> offers a consistent
                        experience across web, desktop, and mobile: swipeable
                        queues on mobile, keyboard shortcuts on desktop.
                    </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">
                        The Curb-Cut Effect
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-2">
                        Accessibility benefits more than just disabled users.
                        Accommodations made for one group end up benefiting
                        many.
                    </p>
                    <div className="bg-white dark:bg-blue-950/50 p-4 rounded border">
                        <p className="font-semibold text-blue-600 dark:text-blue-400">
                            Example: Subtitles
                        </p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                            Help deaf/hard-of-hearing users, but also benefit
                            people in noisy environments, language learners, and
                            anyone watching with volume down.
                        </p>
                    </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-4">
                        Poor Design is Noticeable & Frustrating
                    </h3>
                    <div className="space-y-3 text-red-700 dark:text-red-300">
                        <div className="bg-white dark:bg-red-950/50 p-3 rounded border">
                            <p className="font-semibold">
                                ❌ Websites that zoom out the whole page to fit
                                mobile screens
                            </p>
                        </div>
                        <div className="bg-white dark:bg-red-950/50 p-3 rounded border">
                            <p className="font-semibold">
                                ❌ Touch elements too small (popup close buttons
                                you can't tap)
                            </p>
                        </div>
                        <div className="bg-white dark:bg-red-950/50 p-3 rounded border">
                            <p className="font-semibold">
                                ❌ Government/university sites that break on
                                mobile
                            </p>
                        </div>
                        <div className="bg-white dark:bg-red-950/50 p-3 rounded border">
                            <p className="font-semibold">
                                ❌ Hidden navigation or required horizontal
                                scrolling
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        Design = Trust & Credibility
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-2">
                        We associate comfortable, polished interfaces with
                        professionalism and trustworthiness.
                    </p>
                    <div className="bg-white dark:bg-purple-950/50 p-4 rounded border">
                        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                            Research Finding (Selejan et al., 2016):
                        </p>
                        <p className="text-sm text-purple-600 dark:text-purple-400">
                            Webpages with more pleasing aesthetics were judged
                            as having "higher credibility" despite serving the
                            same content – and these impressions form in under a
                            second.
                        </p>
                    </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                        It's About Equity, Not Just Convenience
                    </h3>
                    <p className="text-orange-700 dark:text-orange-300">
                        For those with disabilities, poor interface design can
                        be a barrier to access. Responsive design that
                        automatically adjusts text size or contrast based on
                        user preferences isn't just comfortable – it's compliant
                        with accessibility standards and promotes digital
                        equity.
                    </p>
                </div>
            </div>
        </>
    );
}
