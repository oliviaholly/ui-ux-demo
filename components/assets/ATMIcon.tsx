interface IconProps {
    className?: string;
}

export default function ATMIcon({ className = "" }: IconProps) {
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
                fill="#cfd8dc"
                d="M44,35V8c0-1.656-1.344-3-3-3H7C5.343,5,4,6.344,4,8v27H44z"
            ></path>
            <path fill="#b0bec5" d="M9 5H39V35H9z"></path>
            <path
                fill="#546e7a"
                d="M9 10H13V13H9zM9 15H13V18H9zM9 20H13V23H9zM35 10H39V13H35zM35 15H39V18H35zM35 20H39V23H35z"
            ></path>
            <path fill="#37474f" d="M15 10H33V23H15z"></path>
            <path fill="#d4e157" d="M17 12H31V14H17zM17 16H24V18H17z"></path>
            <path fill="#263238" d="M9 27H39V31H9z"></path>
            <path fill="#a5d6a7" d="M13 27H35V43H13z"></path>
            <path fill="#388e3c" d="M35,43V27h-2v14H15V27h-2v16H35z"></path>
            <path
                fill="#388e3c"
                d="M24 35A2 2 0 1 0 24 39 2 2 0 1 0 24 35zM30 27c0 3.314-2.686 6-6 6s-6-2.686-6-6H30z"
            ></path>
            <path
                fill="#43a047"
                d="M33 29v-2h-3c0 .702-.127 1.374-.349 2H33zM18.349 29C18.127 28.374 18 27.702 18 27h-3v2H18.349z"
            ></path>
            <path
                fill="#1b5e20"
                d="M33 27H35V29H33z"
                transform="rotate(-180 34 28)"
            ></path>
            <path
                fill="#1b5e20"
                d="M13 27H15V29H13z"
                transform="rotate(-180 14 28)"
            ></path>
            <path
                fill="#1b5e20"
                d="M29.651,29C29.873,28.374,30,27.702,30,27H18c0,0.702,0.127,1.374,0.349,2H29.651z"
            ></path>
            <path
                fill="#388e3c"
                d="M34 42v-3.377C33.575 38.24 33.017 38 32.4 38c-1.325 0-2.4 1.075-2.4 2.4 0 .617.24 1.175.623 1.6H34zM14 42h3.377C17.76 41.575 18 41.017 18 40.4c0-1.325-1.075-2.4-2.4-2.4-.617 0-1.175.24-1.6.623V42z"
            ></path>
        </svg>
    );
}
