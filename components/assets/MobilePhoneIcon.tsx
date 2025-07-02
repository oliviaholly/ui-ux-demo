interface IconProps {
    className?: string;
}

export default function MobilePhoneIcon({ className = "" }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className={className}
        >
            <path
                fill="#37474F"
                d="M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"
            ></path>
            <path
                fill="#BBDEFB"
                d="M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z"
            ></path>
            <path fill="#78909C" d="M21 40H27V42H21z"></path>
        </svg>
    );
}
