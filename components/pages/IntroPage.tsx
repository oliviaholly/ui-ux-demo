export default function IntroPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">
                Introduction
            </h1>
            <div className="space-y-4 text-lg leading-relaxed max-w-4xl">
                <p>
                    Since the invention of the World Wide Web, the interfaces we
                    use to access webpages and run apps have evolved from bulky
                    desktop monitors to devices that fit comfortably in our
                    pockets, or even on wrists.
                </p>

                <p>
                    Aside from just websites, we engage with dozens of
                    interfaces every day: phone and smartwatch apps, ATMs,
                    vehicle dashboards, and more. For some interfaces, it's even
                    become possible to engage purely through alternative means
                    like speech, such as using voice-controlled screen reader
                    software.
                </p>

                <p>
                    Most of the time, users don't notice (or take for granted)
                    how these interfaces adapt to different screens, until
                    something breaks – like text cutting off on small screens,
                    forms that don't submit on tablets, or pop-ups that require
                    zooming out to close them on phones.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-800 dark:text-blue-200">
                        At the heart of resolving these issues is the concept of{" "}
                        <span className="font-bold">
                            responsive user interface (UI) design
                        </span>
                        .
                    </p>
                </div>
            </div>
        </>
    );
}
