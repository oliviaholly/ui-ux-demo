interface IconProps {
    className?: string;
}

export default function VoiceAssistantIcon({ className = "" }: IconProps) {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className={`text-purple-600 ${className}`}
        >
            <circle cx="16" cy="16" r="14" fill="currentColor" />
            <path d="M12 12 Q16 8 20 12 Q16 20 12 12" fill="white" />
        </svg>
    );
}
