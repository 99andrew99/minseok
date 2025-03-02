import LoadingScreen from "@/components/organisms/LoadingScreen";
import SelfPr from "@/components/organisms/SelfPr";
import React from "react";

export default function Home() {
    return (
        <>
            <div className="w-screen overflow-x-hidden bg-[#202632] text-white">
                <SelfPr />
            </div>
            <LoadingScreen />
        </>
    );
}
