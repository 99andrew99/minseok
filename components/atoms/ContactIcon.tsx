"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";
import Swal from "sweetalert2";

interface contactIconProps {
    contactInfo: string[];
}

export default function ContactIcon({ contactInfo }: contactIconProps) {
    const [showAnnotation, setShowAnnotation] = useState(false);
    const [isMdScreen, setIsMdScreen] = useState(false);

    useEffect(() => {
        // 화면 크기 확인하는 함수
        const checkScreenSize = () => {
            setIsMdScreen(window.innerWidth >= 768);
        };

        // 초기 화면 크기 확인
        checkScreenSize();

        // 화면 크기 변경 감지
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        // md 크기 이상일 때만 애니메이션 표시
        if (isMdScreen) {
            const timer = setTimeout(() => {
                setShowAnnotation(true);
            }, 5000);

            return () => clearTimeout(timer);
        } else {
            setShowAnnotation(false);
        }
    }, [isMdScreen]);

    const handleClick = () => {
        const link = contactInfo[2];

        // 이메일 주소인지 확인 (@ 포함)
        if (link.includes("@")) {
            // 이메일 주소 복사
            navigator.clipboard.writeText(link);
            // SweetAlert2로 알림 표시
            Swal.fire({
                title: "이메일 주소가 복사되었습니다!",
                text: link,
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
            });
        } else {
            // URL인 경우 새 탭으로 열기
            window.open(link, "_blank");
        }
    };

    return (
        <div
            className="flex gap-[20px] items-center hover:text-[#0064FF] text-[26px] cursor-pointer"
            onClick={handleClick}
        >
            <div className="w-[70px] h-[70px] rounded-[99px] bg-white flex items-center justify-center">
                <Image
                    src={contactInfo[0]}
                    alt={contactInfo[1]}
                    width={50}
                    height={50}
                />
            </div>
            <RoughNotation
                type="box"
                show={showAnnotation}
                color="#0064FF"
                animationDuration={800}
            >
                <span className="font-bold hidden md:block">
                    {contactInfo[2]}
                </span>
            </RoughNotation>
        </div>
    );
}
