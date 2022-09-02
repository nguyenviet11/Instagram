import { useEffect } from "react";



export default function NotFound() {
    useEffect(() => {
        document.title = 'Not Found!';
    }, []);

    return (
        <div className="bg-gray-background">
            <div className="max-auth max-w-screen-lg">
                <p className="text-center text-2xl">Not Found!</p>
            </div>
        </div>
    );
}