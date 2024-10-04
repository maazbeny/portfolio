import React, { useEffect, useState } from 'react';
import './TypingEffect.css'; // Ensure you have the cursor CSS here

const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isTyping) {
                if (index < text.length) {
                    setDisplayedText((prev) => prev + text[index]);
                    setIndex((prev) => prev + 1);
                } else {
                    setIsTyping(false);
                }
            } else {
                if (index > 0) {
                    setDisplayedText((prev) => prev.slice(0, -1));
                    setIndex((prev) => prev - 1);
                } else {
                    setIsTyping(true);
                    setIndex(0); // Reset for the next cycle
                }
            }
        }, isTyping ? speed : speed); // Speed up erasing

        return () => clearInterval(interval);
    }, [text, speed, isTyping, index]);

    return (
        <span>
            {displayedText}
            <span className="cursor">|</span>
        </span>
    );
};

export default TypingEffect;
