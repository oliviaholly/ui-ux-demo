"use client";
import React, { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

interface TableOfContentsProps {
    currentStep: number;
    onNavigate: (step: number) => void;
}

const pageNames = [
    "Welcome",
    "Introduction",
    "Responsive UI: What is it?",
    "Accessibility: What is it?",
    "Examples",
    "Consequences",
    "HCI: What is it?",
    "UWaterloo & HCI",
    "Conclusion",
    "Sources",
];

export default function TableOfContents({
    currentStep,
    onNavigate,
}: TableOfContentsProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigate = (step: number) => {
        onNavigate(step);
        setIsMobileMenuOpen(false); // Close mobile menu after navigation
    };

    const NavigationContent = () => (
        <>
            <nav className="space-y-2">
                {pageNames.map((pageName, index) => (
                    <button
                        key={index}
                        onClick={() => handleNavigate(index)}
                        className={`
                            w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                            ${
                                currentStep === index
                                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium"
                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }
                        `}
                    >
                        <div className="flex items-center">
                            <span className="mr-3 text-xs font-mono text-gray-500 dark:text-gray-400">
                                {(index + 1).toString().padStart(2, "0")}
                            </span>
                            {pageName}
                        </div>
                    </button>
                ))}
            </nav>

            {/* Progress Indicator */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    Progress: {currentStep + 1} of {pageNames.length}
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{
                            width: `${
                                ((currentStep + 1) / pageNames.length) * 100
                            }%`,
                        }}
                    />
                </div>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile Sheet Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                    <button
                        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600"
                        aria-label="Toggle table of contents"
                    >
                        <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"></div>
                        <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"></div>
                        <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></div>
                    </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-6">
                    <SheetHeader>
                        <SheetTitle>Table of Contents</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                        <NavigationContent />
                    </div>
                </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <div className="hidden md:block fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-50">
                <div className="p-6">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            Table of Contents
                        </h2>
                    </div>
                    <NavigationContent />
                </div>
            </div>
        </>
    );
}
