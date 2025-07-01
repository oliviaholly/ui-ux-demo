interface IconProps {
    className?: string;
}

export default function SmartTVIcon({ className = "" }: IconProps) {
    return (
        <svg
            width="40"
            height="28"
            viewBox="0 0 40 28"
            className={`text-red-600 ${className}`}
        >
            <rect
                x="2"
                y="2"
                width="36"
                height="22"
                rx="2"
                fill="currentColor"
            />
            <rect x="4" y="4" width="32" height="18" fill="white" />
            <rect x="17" y="24" width="6" height="2" fill="currentColor" />
        </svg>
    );
}
