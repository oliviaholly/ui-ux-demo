export default function WelcomePage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-center">Welcome!</h1>
            <p className="text-lg text-center max-w-md">
                This simple demo will talk about{" "}
                <span className="font-semibold text-blue-700 dark:text-blue-300">
                    responsive UI
                </span>
                ,{" "}
                <span className="font-semibold text-blue-700 dark:text-blue-300">
                    accessibility
                </span>
                , and things you may not notice on websites as a user.
            </p>
            <p className="text-lg text-center max-w-md">Click next to begin!</p>
        </>
    );
}
