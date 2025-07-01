import WelcomePage from "./WelcomePage";
import IntroPage from "./IntroPage";
import ResponsiveUIPage from "./ResponsiveUIPage";
import AccessibilityPage from "./AccessibilityPage";
import ExamplesPage from "./ExamplesPage";
import ConsequencesPage from "./ConsequencesPage";
import HCIPage from "./HCIPage";
import UWaterlooPage from "./UWaterlooPage";
import ConclusionPage from "./ConclusionPage";
import SourcesPage from "./SourcesPage";

// Array of all page components - 10 pages total
export const pages = [
    WelcomePage, // 0 - Original welcome
    IntroPage, // 1 - Introduction
    ResponsiveUIPage, // 2 - What is responsive UI
    AccessibilityPage, // 3 - What is accessibility on the web
    ExamplesPage, // 4 - What they look like (with interactive elements)
    ConsequencesPage, // 5 - Consequences of its absence
    HCIPage, // 6 - Human-Computer Interaction
    UWaterlooPage, // 7 - UWaterloo specific links
    ConclusionPage, // 8 - Conclusion
    SourcesPage, // 9 - Sources cited
];

export const totalPages = pages.length;
