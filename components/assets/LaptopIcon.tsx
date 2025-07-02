interface IconProps {
    className?: string;
}

export default function LaptopIcon({ className = "" }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
            className={className}
        >
            <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
            >
                <g transform="scale(5.33333,5.33333)">
                    <path
                        d="M6,9h36c1.1,0 2,0.9 2,2v23c0,1.1 -0.9,2 -2,2h-36c-1.1,0 -2,-0.9 -2,-2v-23c0,-1.1 0.9,-2 2,-2z"
                        fill="#455a64"
                    ></path>
                    <path d="M6,11h36v23h-36z" fill="#80c5fc"></path>
                    <path
                        d="M43,39h-38c-1.7,0 -3,-1.3 -3,-3v-1h44v1c0,1.7 -1.3,3 -3,3z"
                        fill="#607d8b"
                    ></path>
                    <path
                        d="M12,31v3h24v-3zM14.2,33.2h-1.5v-1.5h1.5zM17.2,33.2h-1.5v-1.5h1.5zM20.2,33.2h-1.5v-1.5h1.5zM23.2,33.2h-1.5v-1.5h1.5zM26.2,33.2h-1.5v-1.5h1.5zM29.2,33.2h-1.5v-1.5h1.5zM32.2,33.2h-1.5v-1.5h1.5zM35.2,33.2h-1.5v-1.5h1.5z"
                        fill="#a5e1f1"
                    ></path>
                </g>
            </g>
        </svg>
    );
}
