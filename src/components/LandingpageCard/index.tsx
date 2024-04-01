import React from "react";
import { Text, Img } from "./..";

interface Props {
  className?: string;
  description?: string;
  wadewarren?: string;
  ralphedwards?: string;
}

export default function LandingpageCard({
  description = "&quot;Social Signal is truly an innovative platform! With seamless integration with the Telegram Bot, I can easily access race and investment recommendations, eliminating the tedious search steps and making my trading more intelligent and convenient.&quot;",
  wadewarren = "Wade Warren",
  ralphedwards = "@Ralph Edwards",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Img src="images/img_user.svg" alt="user_one" className="h-[30px] sm:w-full" />
      <div className="flex flex-col items-start sm:self-stretch gap-[63px] flex-1">
        <Text size="2xl" as="p" className="leading-8">
          {description}
        </Text>
        <div className="flex items-center w-[54%] md:w-full gap-2">
          <Img src="images/img_ellipse_14_40x40.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
          <div className="flex flex-col items-start">
            <div className="flex">
              <Text size="2xl" as="p" className="tracking-[0.24px] capitalize !font-medium">
                {wadewarren}
              </Text>
            </div>
            <Text size="s" as="p" className="!text-white-A700_99_01 capitalize">
              {ralphedwards}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
