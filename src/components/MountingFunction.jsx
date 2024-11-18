import { useEffect } from "react";

export function MountingFunction() {
    useEffect(() => {
        // This is equivalent to componentDidMount
        alert('componentDidMount');
    }, []); // Empty dependency array means this runs once on mount

    return <div>MountingClass</div>;
}
