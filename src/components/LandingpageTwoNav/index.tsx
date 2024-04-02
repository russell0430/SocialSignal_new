import React from "react";
import { Img, Button, Text, Heading } from "./..";

interface Props {
  className?: string;
  tutorials?: string;
  points?: string;
  twitter?: string;
  telegram?: string;
  joinGroup?: string;
}

export default function LandingpageTwoNav({
  tutorials = "Tutorials",
  points = "points",
  twitter = "twitter",
  telegram = "telegram",
  joinGroup = "join group",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex md:flex-col justify-between items-center w-[65%] md:w-full gap-5">
        <div className="flex justify-center w-[36%] md:w-full gap-3.5">
          <Img src="images/img_settings_blue_200.svg" alt="settingsone_one" className="h-[40px]" />
          <Img src="images/img_group_1000002854_gray_50.png" alt="image_one" className="w-[88%] object-cover" />
        </div>
        <ul className="flex self-end mb-1.5 gap-10 flex-wrap">
          <li>
            <a href="#" className="self-start">
              <Heading size="xl" as="h1" className="tracking-[0.72px] capitalize">
                {tutorials}
              </Heading>
            </a>
          </li>
          <li>
            <a href="#" className="self-start">
              <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                {points}
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="self-start">
              <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                {twitter}
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="self-end">
              <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                {telegram}
              </Text>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center w-[13%] md:w-full gap-4">
        <Button
          size="3xl"
          variant="fill"
          shape="round"
          className="!text-white-A700 capitalize border-white-A700_33 border border-solid bg-gradient min-w-[111px] !rounded-[20px]"
        >
          {joinGroup}
        </Button>
        <Img src="images/img_rectangle_40x40.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
      </div>
    </div>
  );
}
