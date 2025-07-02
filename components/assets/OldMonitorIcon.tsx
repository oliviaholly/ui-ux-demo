interface IconProps {
    className?: string;
}

export default function OldMonitorIcon({ className = "" }: IconProps) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
        >
            <path
                fill="#CFD8DC"
                d="M42,41c0,0.553-0.447,1-1,1H7c-0.552,0-1-0.447-1-1v-9h36V41z"
            ></path>
            <path fill="#546E7A" d="M6 6H42V32H6z"></path>
            <path fill="#BBDEFB" d="M8 8H40V29H8z"></path>
            <path
                fill="#FF1744"
                d="M37 35A2 2 0 1 0 37 39A2 2 0 1 0 37 35Z"
            ></path>
            <path fill="#78909C" d="M9 36H27V38H9z"></path>
        </svg>
    );
}
