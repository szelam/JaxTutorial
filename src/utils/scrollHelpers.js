export function getScrollContainer() {
  const scrollContainer = document.getElementById("scrollContainer");
  if (!scrollContainer) {
    return { scrollContainer: null, breakpoints: null };
  }

  const totalWidth = scrollContainer.scrollWidth;
  const breakpoint1 = totalWidth / 3;
  const breakpoint2 = (totalWidth / 3) * 2;
  return { scrollContainer, breakpoints: [breakpoint1, breakpoint2] };
}

export function scrollToToday(date) {
  const { scrollContainer, breakpoints } = getScrollContainer();
  const targetScrollLeft = breakpoints[0] + 8 + (59 + 16) * (date - 2);

  scrollContainer.scrollTo({
    left: targetScrollLeft,
    behavior: "smooth",
  });
}
