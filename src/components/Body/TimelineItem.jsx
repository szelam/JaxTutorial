import { useEffect, useRef, useState } from "react";
import { TimelineStamp, TimelineText } from "./styles";

export default function TimelineItem({ date, content, islast }) {
  const [lineHeight, setLineHeight] = useState(0);
  const stampRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (islast) return;
      if (stampRef.current && textRef.current) {
        const stampRect = stampRef.current.getBoundingClientRect();
        const textRect = textRef.current.getBoundingClientRect();
        const height = textRect.height + stampRect.height + 2;
        setLineHeight(height);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      if (islast) return;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <TimelineStamp ref={stampRef} length={`${lineHeight}px`}>
        {date}
      </TimelineStamp>
      <TimelineText ref={textRef}>
        {content.map((item, index) => (
          <div key={index}>- {item}</div>
        ))}
      </TimelineText>
    </>
  );
}
