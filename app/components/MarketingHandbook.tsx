"use client";

import React from "react";
import Image from "next/image";
import MarketingStarters from "@/app/assests/images/marketing-starters.png";
import { generalSemiBold, helvetica } from "../font";
import { useTheme } from "./theme-provider";
import CustomButton from "./ui/buttons";

export default function MarketingHandbook() {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col lg:flex-row gap-[1.5rem] w-full max-w-[1263px] mt-[2.5rem] lg:mt-[10rem]">
        <Image src={MarketingStarters} alt="Marketing Handbook" width={521} height={347} />
        <div>
          <div className="flex flex-col">
            <h1
              className={`${generalSemiBold.className} ${
                theme === "light" ? "text-black" : "text-white"
              } text-[clamp(1.25rem,2.5vw,2.5rem)]`}
            >
              The Marker’s Starters Handbook
            </h1>
            <p
              className={`mt-[1.2rem] text-[clamp(0.75rem,1.2vw,1.25rem)] ${helvetica.className} ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              If you’re trying to get into marketing, don’t waste your early years guessing.
              Marketing looks simple from the outside. If you want to start strong instead of
              navigating blindly, this was written for you.
            </p>
            <span
              className={`mt-[1.2rem] text-[clamp(0.75rem,1.2vw,1.25rem)] ${helvetica.className} ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              Preorder is now live with a limited discount before release on the 24th.
            </span>
          </div>
          <CustomButton
            variant="primary"
            size="default"
            className="mt-[1.25rem] md:mt-[12px] lg:mt-[2.5rem]"
            onClick={() => window.open("https://selar.com/150240c155", "_blank")}
          >
            Download Book
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
