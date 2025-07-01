interface IconProps {
    className?: string;
}

export default function ArrowIcon({ className = "" }: IconProps) {
    return (
        <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            className={`text-gray-400 ${className}`}
        >
            <path
                d="M0 10 L30 10 M25 5 L30 10 L25 15"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    );
}
