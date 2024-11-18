import { useEffect } from "react";
import Swal from "sweetalert2";

export function UnmountingClass() {
    useEffect(() => {
        // Cleanup function that runs when component unmounts
        return () => {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return <div>UnmountingClass</div>;
}
