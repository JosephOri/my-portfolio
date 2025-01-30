import { ScrollContext } from "../ScrollContext";
import { useAbstractContext } from "./useAbstractContext";

export const useScroll = () => {
  return useAbstractContext(ScrollContext);
};
