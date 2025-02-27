import Letter from "../atoms/Letter";

export default function LoadingText() {
    const text = "Cho Min Seok";

    return (
        <div className="text-[64px] md:text-[128px] text-white font-bold">
            {text.split("").map((letter, idx) => (
                <Letter key={idx} letter={letter} delay={idx * 0.1} />
            ))}
        </div>
    );
}
