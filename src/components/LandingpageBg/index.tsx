import React from "react";
import { Text, Img, Button, Heading } from "./..";

interface Props {
  className?: string;
  tutorials?: string;
  points?: string;
  twitter?: string;
  telegram?: string;
  connectWallet?: string;
}

export default function LandingpageBg({
  tutorials = "Tutorials",
  points = "points",
  twitter = "twitter",
  telegram = "telegram",
  connectWallet = "Connect Wallet",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch items-end mb-[57px] gap-[38px]">
        <header className="flex md:flex-col self-stretch justify-between items-center gap-5 px-20 md:px-5">
          <div className="flex md:flex-col justify-between items-center w-[65%] md:w-full gap-5">
            <div className="flex justify-center w-[36%] md:w-full gap-3.5">
              <Img src="images/img_settings.svg" alt="settings_one" className="h-[40px]" />
              <Img src="images/img_group_1000002854.png" alt="image" className="w-[88%] object-cover" />
            </div>
            <ul className="flex self-end mb-1.5 gap-10 flex-wrap">
              <li>
                <a href="Tutorials" target="_blank" rel="noreferrer" className="self-start">
                  <Heading size="xl" as="h6" className="tracking-[0.72px] capitalize">
                    {tutorials}
                  </Heading>
                </a>
              </li>
              <li>
                <a
                  href="points"
                  target="_blank"
                  rel="noreferrer"
                  className="self-start cursor-pointer hover:font-extrabold"
                >
                  <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                    {points}
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="self-start cursor-pointer hover:font-extrabold"
                >
                  <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                    {twitter}
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="telegram"
                  target="_blank"
                  rel="noreferrer"
                  className="self-end cursor-pointer hover:font-extrabold"
                >
                  <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                    {telegram}
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center w-[16%] md:w-full gap-4">
            <Button className="h-[40px] px-[11px] text-white-A700 capitalize text-base border-white-A700_33 border border-solid bg-gradient min-w-[143px] rounded-[20px]">
              {connectWallet}
            </Button>
            <Img src="images/img_rectangle.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
          </div>
        </header>
        <div className="h-[415px] w-[82%] mr-[86px] md:mr-0 relative">
          <div className="flex md:flex-col items-center w-full bottom-[0.00px] left-[0.00px] m-auto md:p-5 absolute max-w-[949px] md:relative">
            <div className="flex flex-col items-start md:self-stretch gap-[35px] flex-1">
              <div className="flex flex-col self-stretch gap-4">
                <Heading size="5xl" as="h1" className="w-[84%] md:w-full leading-[72px]">
                  <>
                    The key to <br />
                    an on-chain ecology.
                  </>
                </Heading>
                <Heading size="s" as="h2" className="!text-blue_gray-300 !text-[15.38px] leading-6">
                  Use our free-to-use Telegram bots and aggregators to quickly locate the communities you want to go to
                  for the latest signals and value growth.
                </Heading>
              </div>
              <Button className="h-[60px] px-[34px] sm:px-5 text-white-A700 text-xl border-white-A700_33 border border-solid bg-gradient min-w-[260px] rounded-[30px]">
                Start Navigation
              </Button>
            </div>
            <Img
              src="images/img_frame.svg"
              alt="image_one"
              className="h-[347px] md:w-full ml-[-67px] md:ml-0 relative"
            />
          </div>
          <div className="flex flex-col items-center w-[23%] gap-[7px] right-[-0.50px] top-[0.00px] p-2 m-auto border border-solid purple_800_03_purple_200_01_border bg-black-900_7f_01 absolute rounded-[20px]">
            <div className="flex items-center w-[82%] md:w-full mt-[22px] gap-2">
              <Img src="images/img_ellipse_14.png" alt="circleimage_one" className="h-[40px] w-[40px] rounded-[50%]" />
              <div className="flex flex-col items-start">
                <div className="flex">
                  <Text size="2xl" as="p" className="tracking-[0.24px] capitalize !font-medium">
                    Wade Warren
                  </Text>
                </div>
                <Text size="s" as="p" className="!text-white-A700_99_01 capitalize">
                  @Ralph Edwards
                </Text>
              </div>
            </div>
            <Button className="h-[28px] px-[34px] sm:px-5 text-white-A700 capitalize text-sm border-white-A700_33 border border-solid bg-gradient min-w-[200px] rounded-[14px]">
              join group
            </Button>
            <Img src="images/img_div_styles_lin.svg" alt="divstyleslin" className="h-[4px]" />
            <div className="flex justify-between w-[82%] md:w-full gap-5">
              <div className="flex self-start gap-[15px]">
                <Img src="images/img_icon.svg" alt="icon_one" className="h-[16px] w-[16px]" />
                <Text as="p" className="!text-white-A700_cc_01 capitalize">
                  SS :
                </Text>
              </div>
              <Text as="p" className="self-end !font-medium">
                3,123
              </Text>
            </div>
            <div className="flex items-center gap-[26px]">
              <div className="flex gap-4">
                <Img src="images/img_icon_white_a700.svg" alt="icon_three" className="self-start h-[16px] w-[16px]" />
                <Text as="p" className="self-end !text-white-A700_cc_01 capitalize">
                  number of groups :
                </Text>
              </div>
              <Text as="p" className="!font-medium">
                3
              </Text>
            </div>
            <div className="flex items-center gap-1 py-[11px]">
              <Img src="images/img_icon_purple_200.svg" alt="icon_five" className="h-[16px] w-[16px]" />
              <a href="logout" target="_blank" rel="noreferrer" className="self-end">
                <Text size="s" as="p" className="!text-purple-200_01 tracking-[0.18px] capitalize text-center">
                  logout
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
