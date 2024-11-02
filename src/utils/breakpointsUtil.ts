import { useMediaQuery } from "@mantine/hooks";

const MOBILE_BREAKPOINT = 600;
const LARGE_SCREEN_BREAKPOINT = 1200;
export function useIsMobile() {
  const isMobile = useMediaQuery(`( max-width:${MOBILE_BREAKPOINT}px )`);
  return isMobile;
}

export function useIsLargeScreen() {
  const isLargeScreen = useMediaQuery(`( min-width:${LARGE_SCREEN_BREAKPOINT}px )`);
  return isLargeScreen;
}
