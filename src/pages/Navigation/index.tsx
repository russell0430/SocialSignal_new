import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import Header from "../../components/Header";
import NavigationColumndbbb from "../../components/NavigationColumndbbb";
import NavigationColumnjoin from "../../components/NavigationColumnjoin";
import NavigationFilter from "../../components/NavigationFilter";
import NavigationPromotedcard from "../../components/NavigationPromotedcard";
import NavigationPromotedcard1 from "../../components/NavigationPromotedcard1";

export default function NavigationPage() {
  return (
    <>
      <Helmet>
        <title>Social signal</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-900_01">
        <div>
          <Header className="flex md:flex-col justify-between items-center gap-5 p-[25px] sm:p-5 bg-gray-900_01" />
          <div className="flex md:flex-col items-center w-full mt-[75px] mx-auto md:p-5 max-w-[1281px]">
            <div className="flex flex-col items-start w-[44%] md:w-full gap-[35px]">
              <div className="flex flex-col self-stretch gap-4">
                <div className="flex w-[94%] md:w-full pt-[13px]">
                  <Heading size="5xl" as="h1" className="leading-[72px]">
                    Unlocking The New SocialFi Frontier{" "}
                  </Heading>
                </div>
                <div className="flex ml-[3px] pt-[7px] md:ml-0">
                  <Heading size="2xl" as="h2" className="w-[82%] !text-blue_gray-300 !font-bold leading-6">
                    Preferred Private Social Keys to Web3 Powered By SFTs{" "}
                  </Heading>
                </div>
              </div>
              <Button
                color="white_A700_33"
                size="7xl"
                rightIcon={<Img src="images/img_frame_1000002923.svg" alt="Frame 1000002923" />}
                className="ml-[3px] gap-1 md:ml-0 sm:px-5 min-w-[260px] rounded-[30px]"
              >
                Follow Us
              </Button>
            </div>
            <div className="md:self-stretch h-[272px] md:w-full ml-[-51px] md:ml-0 relative flex-1 md:flex-none">
              <div className="flex md:flex-col w-full bottom-[0.00px] right-0 left-0 m-auto absolute md:relative">
                <div className="w-full p-3 bg-gray-900_02 shadow-lg rounded-[24px]">
                  <Img
                    src="images/img_2_4x_1.png"
                    alt="24xoneone_one"
                    className="h-[206px] w-full md:h-auto object-cover rounded-[20px]"
                  />
                </div>
                <div className="w-full ml-[-84px] p-3 md:ml-0 relative bg-gray-900_02 shadow-lg rounded-[24px]">
                  <Img
                    src="images/img_2_4x_1_206x389.png"
                    alt="24xonethree_one"
                    className="h-[206px] w-full md:h-auto object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <div className="flex justify-center w-[70%] h-max left-0 bottom-0 right-0 top-0 p-3 m-auto bg-gray-900_02 shadow-lg absolute rounded-[24px]">
                <Img
                  src="images/img_5573e13f36be2bc.png"
                  alt="5573e13f36be2bc"
                  className="h-[248px] w-full md:h-auto object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-[216px]">
            <Img
              src="images/img_icons_settings.svg"
              alt="iconssettings"
              className="h-[24px] w-[24px] ml-[45px] md:ml-0"
            />
            <div className="flex flex-col self-stretch mt-[-17px] gap-[150px] px-20 md:gap-28 md:px-5 sm:gap-[75px] relative shadow-md">
              <div className="flex flex-col items-center w-full gap-12 mx-auto max-w-[1279px]">
                <Text size="8xl" as="p" className="tracking-[0.60px] !font-peacesans text-center text-shadow-ts">
                  Weekly Selects 
                </Text>
                <div className="flex md:flex-col self-stretch gap-[38px]">
                  <NavigationPromotedcard className="flex flex-col w-full gap-[11px] p-4 bg-gradient3 shadow-xs rounded-[19px]" />
                  <NavigationPromotedcard1 className="flex flex-col w-full gap-[11px] p-4 border border-solid black_900_1a_01_purple_A200_00_border bg-gradient4 shadow-xs rounded-[19px]" />
                  <NavigationPromotedcard className="flex flex-col w-full gap-[11px] p-4 border border-solid black_900_1a_01_purple_A200_00_border bg-black-900_33_01 shadow-xs rounded-[19px]" />
                </div>
              </div>
              <div className="flex flex-col items-center w-full gap-[47px] mx-auto max-w-[1278px]">
                <Text size="8xl" as="p" className="tracking-[0.60px] !font-alfaslabone text-shadow-ts">
                  <span className="text-white-A700 font-peacesans">Group&nbsp;</span>
                  <span className="text-white-A700 font-peacesans">Navigation</span>
                </Text>
                <div className="flex flex-col self-stretch gap-[30px]">
                  <NavigationFilter className="flex flex-col w-[14%] md:w-full gap-[11px]" />
                  <div>
                    <div className="justify-center gap-7 grid-cols-[repeat(auto-fill,_minmax(266px_,_1fr))] grid">
                      <NavigationColumnjoin className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px]" />
                      <NavigationColumndbbb className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px]" />
                      <NavigationColumndbbb className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px]" />
                      <NavigationColumnjoin className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px]" />
                      <NavigationColumndbbb className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px]" />
                      <NavigationColumnjoin className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px]" />
                      <NavigationColumnjoin className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px]" />
                      <NavigationColumnjoin className="flex flex-col w-full gap-[18px] p-4 bg-gray-900_99 rounded-[10px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col items-center mt-[134px]">
            <Img src="images/img_.png" alt="imageone_one" className="w-[27%] md:w-full object-cover" />
            <footer className="flex flex-col self-end items-center justify-center md:self-stretch mb-3.5 ml-[-538px] gap-[60px] md:p-5 md:ml-0 sm:gap-[30px] relative flex-1">
              <div className="flex md:flex-col justify-between w-[89%] md:w-full gap-5">
                <Img src="images/img_1.svg" alt="oneone_one" className="h-[150px] md:w-full" />
                <div className="flex justify-center w-[62%] md:w-full pr-7 sm:pr-5">
                  <div className="flex sm:flex-col justify-between items-start w-full gap-5">
                    <div className="flex flex-col items-start w-[19%] sm:w-full gap-6">
                      <div className="flex items-center gap-2">
                        <Img src="images/img_link.svg" alt="linkone_one" className="h-[24px] w-[24px]" />
                        <Heading size="lg" as="h6" className="self-start">
                          links
                        </Heading>
                      </div>
                      <div className="flex flex-col items-start gap-6">
                        <a href="#" className="self-center">
                          <Text as="p" className="!text-white-A700_99_01 capitalize">
                            telegram bot
                          </Text>
                        </a>
                        <a href="#" className="ml-[26px] md:ml-0">
                          <Text as="p" className="!text-white-A700_99_01">
                            Buy $SS
                          </Text>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[21%] sm:w-full gap-6">
                      <div className="flex items-center gap-2">
                        <Img src="images/img_youtube.svg" alt="youtubeone_one" className="h-[24px] w-[24px]" />
                        <Heading size="lg" as="h6" className="self-start capitalize">
                          social
                        </Heading>
                      </div>
                      <div className="flex flex-col items-start justify-center gap-6">
                        <a href="#" className="self-center">
                          <Text as="p" className="!text-white-A700_99_01 capitalize">
                            Telegram group
                          </Text>
                        </a>
                        <a href="Twitter" target="_blank" rel="noreferrer" className="ml-[27px] md:ml-0">
                          <Text as="p" className="!text-white-A700_99_01">
                            Twitter
                          </Text>
                        </a>
                        <a href="#" className="ml-[27px] md:ml-0">
                          <Text as="p" className="!text-white-A700_99_01 capitalize">
                            Contact us
                          </Text>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[16%] sm:w-full gap-6">
                      <div className="flex items-center gap-2">
                        <Img src="images/img_thumbs_up.svg" alt="thumbsupone_one" className="h-[24px] w-[24px]" />
                        <Heading size="lg" as="h6" className="self-start">
                          Resources
                        </Heading>
                      </div>
                      <div className="flex flex-col items-start gap-[25px]">
                        <a href="Doc" target="_blank" rel="noreferrer" className="ml-[27px] md:ml-0">
                          <Text as="p" className="!text-white-A700_99_01">
                            Doc
                          </Text>
                        </a>
                        <a href="news" target="_blank" rel="noreferrer" className="self-center">
                          <Text as="p" className="!text-white-A700_99_01 capitalize">
                            news
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex self-stretch justify-center p-5 border-white-A700_0f border-t border-solid">
                <div className="flex sm:flex-col justify-between items-center w-[91%] md:w-full gap-5">
                  <a href="#" className="self-end mb-[3px]">
                    <Text as="p" className="!text-white-A700_99_01">
                      <span className="text-white-A700_99_01">@</span>
                      <span className="text-white-A700_99_01 capitalize">Social Signal 2023</span>
                    </Text>
                  </a>
                  <ul className="flex gap-6 flex-wrap">
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-white-A700_99_01 text-right">
                          Terms of Service
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="self-end">
                        <Text as="p" className="!text-white-A700_99_01 text-right">
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
          <Img
            src="images/img_vector.png"
            alt="vectorone_one"
            className="w-full md:h-auto mt-[1264px] mx-auto md:p-5 object-cover max-w-[1292px]"
          />
        </div>
      </div>
    </>
  );
}
