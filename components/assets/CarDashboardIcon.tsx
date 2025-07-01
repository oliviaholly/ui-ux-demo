interface IconProps {
    className?: string;
}

export default function CarDashboardIcon({ className = "" }: IconProps) {
    return (
        <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            className={`text-green-600 ${className}`}
        >
            <rect
                x="2"
                y="8"
                width="36"
                height="20"
                rx="4"
                fill="currentColor"
            />
            <circle cx="12" cy="18" r="6" fill="white" />
            <circle cx="28" cy="18" r="6" fill="white" />
            <rect x="18" y="12" width="4" height="12" fill="white" />
        </svg>
    );
}
