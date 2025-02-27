interface RectangleProps {
    delay: number;
}

export default function Ractangle({ delay }: RectangleProps) {
    return (
        <div
            className="w-full flex-1 bg-[#0064FF] animate-slideOut"
            style={{ animationDelay: `${delay}s` }}
        />
    );
}
