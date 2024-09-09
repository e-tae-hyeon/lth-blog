"use client";

import { URI_GITHUB } from "@/common/constant";
import Icon from "@/components/Icon";
import React from "react";
import useContactMail from "../../hooks/useContactMail";

function Contacts() {
  const contactMail = useContactMail();

  return (
    <div className="flex justify-center items-center gap-[28px] p-5">
      <a
        href={URI_GITHUB}
        target="_blank"
        className="flex justify-center items-center w-[40px] rounded-full bg-text4 aspect-square hover:-translate-y-1 hover:bg-text20 duration-200"
      >
        <Icon name="github" size={28} />
      </a>

      <button
        onClick={contactMail}
        className="flex justify-center items-center w-[40px] rounded-full bg-text4 aspect-square hover:-translate-y-1 hover:bg-text20 duration-200"
      >
        <Icon name="mail" size={28} />
      </button>
    </div>
  );
}

export default Contacts;
