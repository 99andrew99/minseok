import ContactIcon from "../atoms/ContactIcon";

export default function Contact() {
    const contactInfo = [
        [
            "/images/github_icon.svg",
            "github icon",
            "https://github.com/99andrew99 ",
        ],
        [
            "/images/notion_icon.svg",
            "notion icon",
            "https://jumbled-corleggy-e88.notion.site/7e7778d41dd8476fb64819e0f4b04178",
        ],
        ["/images/gmail_icon.svg", "gmail icon", "whalstjr199927@gmail.com"],
    ];
    return (
        <div className="flex flex-col cursor-pointer gap-[20px]">
            <span className="text-center md:text-start font-bold text-[32px] md:text-[36px]">
                Contact
            </span>
            <div className="flex  md:flex-col gap-[20px] w-full ">
                {contactInfo.map((contact, idx) => (
                    <ContactIcon contactInfo={contact} key={idx} />
                ))}
            </div>
        </div>
    );
}
