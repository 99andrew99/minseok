"use client";
import { useState, useEffect } from "react";

interface SelfPrTextProps {
    prTexts: string[];
}

export default function SelfPrText({ prTexts }: SelfPrTextProps) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const currentFullText = prTexts[currentTextIndex];

        if (!isDeleting && displayText === currentFullText) {
            // 완성된 텍스트 1초 대기
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1000);
        } else if (isDeleting && displayText === "") {
            // 다음 텍스트로 이동
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % prTexts.length);
        } else {
            const delta = isDeleting ? 50 : 100; // 타이핑/삭제 속도

            timeout = setTimeout(() => {
                setDisplayText((prev) => {
                    if (isDeleting) {
                        return prev.slice(0, -1);
                    }
                    return currentFullText.slice(0, prev.length + 1);
                });
            }, delta);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTextIndex, prTexts]);

    return (
        <div className="flex flex-col gap-[20px] text-[32px] md:text-[48px] font-bold items-center">
            <span className="text-center">안녕하세요!</span>
            <div className="flex items-center text-[#0064FF]">
                <span className="mr-1 min-h-[1.5em] text-center">
                    {displayText}
                </span>
                <span className="w-[2px] h-[1.2em] bg-white animate-[blink_1s_infinite]" />
            </div>
            <span className="text-center">조민석입니다.</span>
        </div>
    );
}
