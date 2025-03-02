import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "조민석 포트폴리오",
    description: "프론트엔드 개발자 조민석의 포트폴리오 사이트 입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
