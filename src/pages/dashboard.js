import { useEffect } from "react";
import Header from "../components/header";
import TimeLine from "../components/timeline";
import SideBar from "../components/sidebar";

export default function DashBoard() {
    useEffect(() => {
        document.title = 'DashBoard - Instagram';
    }, [])

    return (
        <div className="bg-bray-background">
            <Header />
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                <TimeLine />
                <SideBar />
            </div>
        </div>
    );
}