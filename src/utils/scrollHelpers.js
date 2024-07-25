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

export function scrollToToday(date, month, monthsList) {
  const { scrollContainer, breakpoints } = getScrollContainer();
  scrollContainer.scrollLeft = breakpoints[0] + 8 + (59 + 16) * (date - 2);
}
