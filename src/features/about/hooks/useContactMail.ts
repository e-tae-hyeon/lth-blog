import { EMAIL } from "@/common/constant";

function useContactMail() {
  return () => {
    if (typeof window === "undefined") return;

    window.open(`mailto:${EMAIL}?subject=&body=`);
  };
}

export default useContactMail;
