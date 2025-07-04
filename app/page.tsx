"use client";
import React, { useState, useEffect } from "react";
import { pages, totalPages } from "@/components/pages";
import TableOfContents, { DesktopSidebar } from "@/components/TableOfContents";

function Navigation({
    onBack,
    onNext,
    showBack,
    showNext,
}: {
    onBack: () => void;
    onNext: () => void;
    showBack?: boolean;
    showNext?: boolean;
}) {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white/80 dark:bg-black/80 border-t border-gray-200 dark:border-gray-700 z-50">
            <div className="flex justify-between max-w-2xl mx-auto p-4 lg:ml-80">
                {showBack ? (
                    <button
                        className="px-6 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={onBack}
                    >
                        Back
                    </button>
                ) : (
                    <div />
                )}
                {showNext ? (
                    <button
                        className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={onNext}
                    >
                        Next
                    </button>
                ) : (
                    <div />
                )}
            </div>
        </footer>
    );
}

export default function Home() {
    const [step, setStep] = useState(0);
    const [displayStep, setDisplayStep] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [scrollPositions, setScrollPositions] = useState<
        Record<number, number>
    >({});

    useEffect(() => {
        if (step !== displayStep) {
            // Save current scroll position before changing pages
            setScrollPositions((prev) => ({
                ...prev,
                [displayStep]: window.scrollY,
            }));

            setIsVisible(false);
            const timeout = setTimeout(() => {
                setDisplayStep(step);
                setIsVisible(true);
            }, 200);
            return () => clearTimeout(timeout);
        }
    }, [step, displayStep]);

    // Restore scroll position when page changes, or scroll to top for unvisited pages
    useEffect(() => {
        const savedPosition = scrollPositions[displayStep];
        if (savedPosition !== undefined) {
            // Restore saved scroll position
            window.scrollTo(0, savedPosition);
        } else {
            // Default to top for unvisited pages
            window.scrollTo(0, 0);
        }
    }, [displayStep, scrollPositions]);

    // Prevent accidental navigation away from the demo
    // useEffect(() => {
    //     const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    //         if (step > 0) {
    //             // Only show warning if user has progressed
    //             e.preventDefault();
    //             e.returnValue =
    //                 "Are you sure you want to leave? Your progress will be lost.";
    //             return "Are you sure you want to leave? Your progress will be lost.";
    //         }
    //     };

    //     window.addEventListener("beforeunload", handleBeforeUnload);
    //     return () =>
    //         window.removeEventListener("beforeunload", handleBeforeUnload);
    // }, [step]);

    // Get the current page component
    const CurrentPage = pages[displayStep];

    const handleNavigate = (newStep: number) => {
        setStep(newStep);
    };

    return (
        <div className="min-h-screen flex">
            {/* Mobile Table of Contents */}
            <TableOfContents currentStep={step} onNavigate={handleNavigate} />

            {/* Desktop Sidebar */}
            <DesktopSidebar currentStep={step} onNavigate={handleNavigate} />

            {/* Main Content */}
            <div className="flex-1 min-h-screen flex flex-col items-center justify-center pb-24 px-8 pt-16 lg:pt-8">
                <div
                    className={`flex flex-col gap-8 items-center w-full max-w-2xl transition-opacity duration-200 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <CurrentPage />
                </div>
            </div>

            {/* Navigation */}
            <Navigation
                onBack={() => setStep(step - 1)}
                onNext={() => setStep(step + 1)}
                showBack={step > 0}
                showNext={step < totalPages - 1}
            />
        </div>
    );
}
