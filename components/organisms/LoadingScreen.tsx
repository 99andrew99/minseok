import Ractangle from "../atoms/Ractangle";
import LoadingText from "../molecules/LoadingText";

export default function LoadingScreen() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center overflow-hidden z-999 animate-remove">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Ractangle key={idx} delay={2 + idx * 0.03} />
                ))}
            </div>

            <div
                className="relative z-10 opacity-100 animate-fadeOut"
                style={{ animationDelay: "2s" }}
            >
                <LoadingText />
            </div>
        </div>
    );
}
