import Image from "next/image";

interface contactIconProps {
    contactInfo: string[];
}

export default function ContactIcon({ contactInfo }: contactIconProps) {
    return (
        <div className="flex gap-[20px] items-center">
            <div className="w-[70px] h-[70px] rounded-[999] bg-white flex items-center justify-center">
                <Image
                    src={contactInfo[0]}
                    alt={contactInfo[1]}
                    width={50}
                    height={50}
                />
            </div>
            <span className="hidden md:block font-bold text-[26px]">
                {contactInfo[2]}
            </span>
        </div>
    );
}
