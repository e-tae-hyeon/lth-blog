import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

type ModalPosition = "top" | "center" | "bottom";

type ModalProps = React.PropsWithChildren<{
  isVisible: boolean;
  onBackdropClick?: () => void;
  position?: ModalPosition;
}>;

function Modal({
  isVisible,
  onBackdropClick,
  position = "center",
  children,
}: ModalProps) {
  const positionClassMap: Record<ModalPosition, string> = {
    top: "justify-start",
    center: "justify-center",
    bottom: "justify-end",
  };

  const className = positionClassMap[position];

  const portal = document.getElementById("portal");

  if (!portal) return <></>;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          onClick={onBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"overlay"}
          className={`absolute inset-0 bg-neutral-950 bg-opacity-60 flex flex-col items-center ${className}`}
        >
          <motion.div
            initial={{ y: position === "top" ? -150 : 150 }}
            animate={{ y: 0 }}
            exit={{ y: position === "top" ? -150 : 150 }}
            transition={{ bounce: false, type: "just" }}
            key={"modal"}
            className="w-fit h-fit"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portal
  );
}

export default Modal;
