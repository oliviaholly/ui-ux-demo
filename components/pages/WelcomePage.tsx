import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";

export default function WelcomePage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-center">Welcome!</h1>
            <p className="text-lg text-center max-w-md">
                This simple demo will talk about{" "}
                <span className="font-semibold text-purple-700 dark:text-purple-300">
                    responsive UI
                </span>
                ,{" "}
                <span className="font-semibold text-purple-700 dark:text-purple-300">
                    accessibility
                </span>
                , and things you may not notice on websites as a user.
            </p>
            <p className="text-lg text-center max-w-md">
                Begin by using the &quot;Next&quot; button at the bottom!
            </p>
            <div className="space-y-1">
                <p className="text-sm text-center max-w-md text-gray-600 dark:text-gray-400">
                    <strong>Note:</strong> This demo is best viewed on a{" "}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <u>desktop</u>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>You can&apos;t hover over this on a phone!</p>
                        </TooltipContent>
                    </Tooltip>
                    !
                </p>
                <p className="text-sm text-center max-w-md text-gray-600 dark:text-gray-400">
                    <strong>Note:</strong> This is{" "}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <u>not</u>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>I made this for fun :-)</p>
                        </TooltipContent>
                    </Tooltip>{" "}
                    a comprehensive guide!
                </p>
                <p className="text-sm text-center max-w-md text-gray-600 dark:text-gray-400 py-2 italic">
                    Made with ♥ by{" "}
                    <a
                        href="https://github.com/oliviaholly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-purple-700 dark:hover:text-purple-300"
                    >
                        me
                    </a>
                </p>
            </div>
        </>
    );
}
