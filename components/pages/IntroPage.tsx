import OldMonitorIcon from "../assets/OldMonitorIcon";
import MobilePhoneIcon from "../assets/MobilePhoneIcon";
import AppleWatchIcon from "../assets/AppleWatchIcon";
import ArrowIcon from "../assets/ArrowIcon";
import ATMIcon from "../assets/ATMIcon";
import CarDashboardIcon from "../assets/CarDashboardIcon";
import VoiceAssistantIcon from "../assets/VoiceAssistantIcon";
import SmartTVIcon from "../assets/SmartTVIcon";

export default function IntroPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mb-6">
                Introduction
            </h1>
            <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-6 rounded-lg">
                    <p className="mb-4">
                        Since the invention of the World Wide Web, the
                        interfaces we use to access webpages and run apps have
                        evolved from bulky desktop monitors to devices that fit
                        comfortably in our pockets, or even on wrists.
                    </p>

                    {/* Evolution Timeline */}
                    <div className="flex items-center justify-center gap-4 my-6">
                        {/* Old Monitor */}
                        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                            <OldMonitorIcon className="mb-2" />
                            <span className="text-xs text-center">2000s</span>
                        </div>

                        {/* Arrow */}
                        <div className="hidden sm:block">
                            <ArrowIcon />
                        </div>

                        {/* Mobile Phone */}
                        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                            <MobilePhoneIcon className="mb-2" />
                            <span className="text-xs text-center">2010s</span>
                        </div>

                        {/* Arrow */}
                        <div className="hidden sm:block">
                            <ArrowIcon />
                        </div>

                        {/* Apple Watch */}
                        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                            <AppleWatchIcon className="mb-2" />
                            <span className="text-xs text-center">Today</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <p className="mb-4">
                        Aside from just websites, we engage with dozens of
                        interfaces every day: phone and smartwatch apps, ATMs,
                        vehicle dashboards, and more. For some interfaces,
                        it&apos;s even become possible to engage purely through
                        alternative means like speech, such as using
                        voice-controlled screen reader software.
                    </p>

                    {/* Interface Examples Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        {/* ATM */}
                        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                            <ATMIcon className="mb-2" />
                            <span className="text-xs text-center">ATM</span>
                        </div>

                        {/* Car Dashboard */}
                        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                            <CarDashboardIcon className="mb-2" />
                            <span className="text-xs text-center">
                                Dashboard
                            </span>
                        </div>

                        {/* Voice Assistant */}
                        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                            <VoiceAssistantIcon className="mb-2" />
                            <span className="text-xs text-center">Voice</span>
                        </div>

                        {/* Smart TV */}
                        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                            <SmartTVIcon className="mb-2" />
                            <span className="text-xs text-center">
                                Smart TV
                            </span>
                        </div>
                    </div>
                </div>

                <p>
                    Most of the time, users don&apos;t notice (or take for
                    granted) how these interfaces adapt to different screens,
                    until something breaks - like text cutting off on small
                    screens, forms that don&apos;t submit on tablets, or pop-ups
                    that require zooming out to close them on phones.
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="font-semibold text-purple-800 dark:text-purple-200">
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
