import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrollPercent = (scrollTop / docHeight) * 100;
            setScroll(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "4px",
                width: `${scroll}%`,
                backgroundColor: "#0d6efd", // bootstrap primary
                zIndex: 9999,
                transition: "width 0.1s ease-out",
            }}
        />
    );
}
