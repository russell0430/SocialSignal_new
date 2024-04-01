import React from "react";
import { Img, Heading, Button } from "./..";

interface Props {
  className?: string;
  socialfi?: string;
  cain?: string;
  telegramBot?: string;
  cryptosocial?: React.ReactNode | string;
  description?: string;
}

export default function LandingpageFeatures({
  socialfi = "SocialFi",
  cain = "C.A.I.N",
  telegramBot = "telegram bot",
  cryptosocial = (
    <>
      Crypto-Social
      <br />
      Investing Platform
    </>
  ),
  description = "To seamlessly facilitate trusted crypto communities where members can collectively discover opportunities, powered by expertise-led social channels with tailored insights for every investing goal.",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex md:flex-col gap-10">
        <Button color="white_A700_33_01" size="7xl" className="w-full sm:px-5 min-w-[260px] rounded-[16px]">
          {socialfi}
        </Button>
        <Button color="purple_800_02" size="7xl" className="w-full sm:px-5 min-w-[260px] rounded-[16px]">
          {cain}
        </Button>
        <Button color="purple_800_02" size="7xl" className="w-full sm:px-5 capitalize min-w-[260px] rounded-[16px]">
          {telegramBot}
        </Button>
      </div>
      <div className="flex md:flex-col self-stretch items-start gap-6">
        <div className="flex flex-col w-[42%] md:w-full gap-4">
          <Heading size="4xl" as="h1" className="w-[86%] md:w-full leading-[48px]">
            {cryptosocial}
          </Heading>
          <Heading size="s" as="h2" className="!text-blue_gray-300 !text-[15.38px] leading-6">
            {description}
          </Heading>
        </div>
        <Img src="images/img_group_1000002853.png" alt="image_three" className="w-[58%] md:w-full object-cover" />
      </div>
    </div>
  );
}
