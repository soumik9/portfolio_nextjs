import React, { useEffect } from "react";

const useHideBodyScroll = (dipendency: boolean) => {
    useEffect(() => {
        dipendency
            ? document.querySelector("body")?.classList.add("overflow-hidden")
            : document.querySelector("body")?.classList.remove("overflow-hidden");
    }, [dipendency]);
};

export default useHideBodyScroll;