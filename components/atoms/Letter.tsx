interface LetterProps {
    letter: string;
    delay: number;
}

export default function Letter({ letter, delay }: LetterProps) {
    return (
        <span
            className="inline-block opacity-0 transform translate-y-full animate-rise"
            style={{ animationDelay: `${delay}s` }}
        >
            {letter === " " ? "\u00A0" : letter}
        </span>
    );
}
