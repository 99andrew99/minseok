import Image from "next/image";
import SelfPrText from "../atoms/SelfPrText";
import Contact from "../molecules/Contact";

export default function SelfPr() {
    return (
        <div className="w-full h-screen px-[20px] pt-[70px] flex flex-col gap-[50px] items-center">
            <div className="flex flex-col items-center gap-[20px] md:flex-row  md:gap-[100px]">
                <div className="w-[250px] h-[320px] md:min-w-[300px] md:h-[390px] rounded-[16px] overflow-hidden relative ">
                    <Image
                        src={"/images/ChoMinSeok.jpg"}
                        fill
                        alt="조민석 사진"
                        className="object-cover"
                    />
                </div>

                <div className="md:min-w-[550px]">
                    <SelfPrText
                        prTexts={[
                            "{프론트엔드 개발자}",
                            "{사용자 편의성을 생각하는}",
                        ]}
                    />
                </div>
            </div>

            <Contact />
        </div>
    );
}
