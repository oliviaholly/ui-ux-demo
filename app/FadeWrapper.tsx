"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FadeWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(false);
        const timeout = setTimeout(() => setShow(true), 10);
        return () => clearTimeout(timeout);
    }, [pathname]);
    return (
        <div className={show ? "fade-animate" : "opacity-0"} key={pathname}>
            {children}
        </div>
    );
}
