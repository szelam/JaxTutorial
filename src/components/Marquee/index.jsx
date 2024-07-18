import React, { useEffect, useRef, useState } from "react";

import { MarqueeContainer, MarqueeContent } from "./styles";

export default function Marquee({ direction = "left", speed = 50, children }) {
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, [children]);

  const duration = contentWidth / speed;

  return (
    <MarqueeContainer>
      <MarqueeContent
        ref={contentRef}
        direction={direction}
        speed={speed}
        duration={duration}
      >
        {children}
      </MarqueeContent>
      <MarqueeContent direction={direction} speed={speed} duration={duration}>
        {children}
      </MarqueeContent>
    </MarqueeContainer>
  );
}
