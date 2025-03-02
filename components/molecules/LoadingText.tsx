import Letter from "../atoms/Letter";

export default function LoadingText() {
    const text = "CHO MIN SEOK";

    return (
        <div className="text-[50px] md:text-[110px] text-white font-bold">
            {text.split("").map((letter, idx) => (
                <Letter key={idx} letter={letter} delay={idx * 0.1} />
            ))}
        </div>
    );
}
