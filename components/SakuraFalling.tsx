import React, { useEffect, useState } from 'react';

interface SakuraPetal {
    id: number;
    left: number;
    animationDuration: number;
    animationDelay: number;
    size: number;
    swayDistance: number;
    imageUrl: string;
}

interface SakuraFallingProps {
    count?: number; // Number of petals (default: 20)
    speed?: 'slow' | 'medium' | 'fast'; // Animation speed (default: 'medium')
    images?: string[]; // Custom sakura images (optional)
}

const SakuraFalling: React.FC<SakuraFallingProps> = ({
    count = 20,
    speed = 'slow',
    images
}) => {
    const [petals, setPetals] = useState<SakuraPetal[]>([]);

    const base = import.meta.env.BASE_URL;

    // Default sakura images - you can replace these with your custom images
    const defaultImages = [
        `${base}images/sakura-1.png`,
        `${base}images/sakura-2.png`,
        `${base}images/sakura-3.png`,
        `${base}images/sakura-4.png`,
        `${base}images/sakura-5.png`,
        `${base}images/sakura-6.png`,
        `${base}images/sakura-7.png`,
        `${base}images/sakura-8.png`,
    ];

    const sakuraImages = images || defaultImages;

    // Speed configurations (in seconds)
    const speedConfig = {
        slow: { min: 15, max: 25 },
        medium: { min: 10, max: 18 },
        fast: { min: 6, max: 12 }
    };

    useEffect(() => {
        const generatedPetals: SakuraPetal[] = [];
        const { min, max } = speedConfig[speed];

        for (let i = 0; i < count; i++) {
            generatedPetals.push({
                id: i,
                left: Math.random() * 100, // Random horizontal position (0-100%)
                animationDuration: min + Math.random() * (max - min), // Random duration within speed range
                animationDelay: Math.random() * 5, // Random delay (0-5s)
                size: 0.5 + Math.random() * 1, // Random size (0.5-1.5)
                swayDistance: 30 + Math.random() * 70, // Random sway distance (30-100px)
                imageUrl: sakuraImages[Math.floor(Math.random() * sakuraImages.length)] // Random image
            });
        }

        setPetals(generatedPetals);
    }, [count, speed, images]);

    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className="absolute -top-10 sakura-petal"
                    style={{
                        left: `${petal.left}%`,
                        animationDuration: `${petal.animationDuration}s`,
                        animationDelay: `${petal.animationDelay}s`,
                        '--sway-distance': `${petal.swayDistance}px`,
                        transform: `scale(${petal.size})`
                    } as React.CSSProperties}
                >
                    {/* Custom sakura image */}
                    <img
                        src={petal.imageUrl}
                        alt="sakura"
                        className="w-8 h-8 object-contain opacity-80"
                        onError={(e) => {
                            // Fallback to emoji if image fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl">🌸</span>';
                        }}
                    />
                </div>
            ))}

            <style jsx>{`
                @keyframes sakura-fall {
                    0% {
                        transform: translateY(0) translateX(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    15% {
                        transform: translateY(15vh) translateX(20px) rotate(54deg);
                    }
                    25% {
                        transform: translateY(22vh) translateX(-15px) rotate(90deg);
                    }
                    30% {
                        transform: translateY(28vh) translateX(-25px) rotate(126deg);
                    }
                    40% {
                        transform: translateY(35vh) translateX(10px) rotate(180deg);
                    }
                    50% {
                        transform: translateY(48vh) translateX(var(--sway-distance)) rotate(234deg);
                    }
                    55% {
                        transform: translateY(52vh) translateX(calc(var(--sway-distance) - 20px)) rotate(252deg);
                    }
                    65% {
                        transform: translateY(62vh) translateX(calc(var(--sway-distance) + 15px)) rotate(288deg);
                    }
                    70% {
                        transform: translateY(66vh) translateX(calc(var(--sway-distance) - 10px)) rotate(306deg);
                    }
                    80% {
                        transform: translateY(78vh) translateX(var(--sway-distance)) rotate(342deg);
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) translateX(calc(var(--sway-distance) + 30px)) rotate(360deg);
                        opacity: 0;
                    }
                }

                .sakura-petal {
                    animation: sakura-fall linear infinite;
                }
            `}</style>
        </div>
    );
};

export default SakuraFalling;
