"use client";
import { useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";

interface SelfPrTextProps {
    prTexts: string[];
}

export default function SelfPrText({ prTexts }: SelfPrTextProps) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [showAnnotation, setShowAnnotation] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const currentFullText = prTexts[currentTextIndex];

        if (!isDeleting && displayText === currentFullText) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1000);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % prTexts.length);
        } else {
            const delta = isDeleting ? 100 : 150;

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

    useEffect(() => {
        // 페이지 로드 후 5초 후에 애니메이션 표시
        const timer = setTimeout(() => {
            setShowAnnotation(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col gap-[20px] text-[32px] md:text-[48px] font-bold items-center">
            <span className="text-center">안녕하세요!</span>
            <div className="flex items-center text-[#0064FF]">
                <span className="mr-1 min-h-[1.5em] text-center">
                    {displayText}
                </span>
                <span className="w-[2px] h-[1.2em] bg-white animate-[blink_1s_infinite]" />
            </div>
            <span className="text-center">
                <RoughNotation
                    type="highlight"
                    show={showAnnotation}
                    color="rgba(1,100,255,0.6)"
                    strokeWidth={3}
                    padding={15}
                    animationDuration={800}
                >
                    조민석
                </RoughNotation>
                입니다.
            </span>
        </div>
    );
}
