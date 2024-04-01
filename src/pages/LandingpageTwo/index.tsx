import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import LandingpageTwoNav from "../../components/LandingpageTwoNav";

export default function LandingpageTwoPage() {
  return (
    <>
      <Helmet>
        <title>Social signal</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-900_01">
        <div>
          <div className="h-[433px] relative">
            <header className="w-full top-[0.00px] right-0 left-0 py-5 m-auto bg-gray-800_01 absolute">
              <LandingpageTwoNav className="flex md:flex-col justify-between items-center mb-[260px] gap-5 px-20 md:px-5" />
            </header>
            <div className="h-[175px] w-[175px] mb-[25px] ml-20 md:ml-0 bg-blue_gray-100 absolute rounded-[87px]" />
            <div className="flex sm:flex-col w-[18%] bottom-[22.00px] left-[22%] m-auto absolute sm:relative">
              <Button
                color="white_A700"
                size="2xl"
                variant="fill"
                className="sm:p-5 sm:px-5 capitalize font-medium min-w-[142px] rounded-[3px]"
              >
                + Join
              </Button>
              <div className="sm:self-stretch h-[35px] w-[37px] ml-[26px] sm:p-5 sm:ml-0 border-gray-400 border border-solid flex-1 rounded-[5px]" />
              <div className="sm:self-stretch h-[35px] w-[37px] ml-3.5 sm:p-5 sm:ml-0 border-gray-400 border border-solid flex-1 rounded-[5px]" />
            </div>
            <Img
              src="images/img_1d2b7b62b9e27af.png"
              alt="1d2b7b62b9e27af"
              className="h-[207px] w-[206px] bottom-[0.00px] left-[5%] m-auto object-cover absolute"
            />
          </div>
          <div className="flex md:flex-col self-start justify-between items-start w-full mt-[33px] gap-5 mx-auto md:p-5 max-w-[928px]">
            <div className="flex flex-col w-[79%] md:w-full gap-[163px] md:gap-[122px] sm:gap-[81px]">
              <div className="flex flex-col items-start ml-[34px] md:ml-0">
                <div className="flex self-stretch justify-between items-start gap-5">
                  <Heading size="5xl" as="h1" className="mb-4">
                    Group name
                  </Heading>
                  <Img src="images/img_moonb01_1_1.png" alt="moonb011oneone" className="w-[48px] object-cover" />
                </div>
                <div className="flex self-stretch justify-between items-center ml-[3px] gap-5 md:ml-0 flex-wrap">
                  <Text size="5xl" as="p">
                    Our Slogan is to make the world better.{" "}
                  </Text>
                  <Text size="2xl" as="p" className="!text-gray-100 capitalize text-center">
                    ID123
                  </Text>
                </div>
                <Heading as="h2" className="mt-[17px] ml-20 md:ml-0 !text-black-900 capitalize !font-bold">
                  + Join
                </Heading>
              </div>
              <div className="flex justify-between items-start w-[54%] md:w-full gap-5">
                <Img src="images/img_icons_settings.svg" alt="iconssettings" className="h-[24px] w-[24px]" />
                <Text size="8xl" as="p" className="mt-2.5 tracking-[0.60px] !font-alfaslabone text-shadow-ts">
                  Dashboard
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start mt-[30px] gap-[7px]">
              <Text
                size="2xl"
                as="p"
                className="flex justify-center items-center h-[24px] px-[15px] py-0.5 !text-gray-100 capitalize text-center bg-gray-600 rounded-[3px]"
              >
                GameFi
              </Text>
              <Text
                size="2xl"
                as="p"
                className="flex justify-center items-center h-[24px] px-[17px] py-0.5 !text-gray-100 capitalize text-center bg-gray-600 rounded-[3px]"
              >
                Lumiterra
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col self-end items-center w-full mt-[35px] gap-2 mx-auto md:p-5 max-w-[1225px]">
            <div className="flex flex-col md:self-stretch gap-8 flex-1">
              <div className="flex flex-col items-start ml-[17px] gap-[101px] md:gap-[75px] md:ml-0 sm:gap-[50px]">
                <Img
                  src="images/img_image_42.png"
                  alt="imagefortytwo"
                  className="h-[452px] w-full md:h-auto object-cover"
                />
                <Text size="8xl" as="p" className="tracking-[0.60px] !font-alfaslabone text-shadow-ts">
                  Swap
                </Text>
              </div>
              <div className="flex justify-between w-[30%] md:w-full gap-5 flex-wrap">
                <Heading size="3xl" as="h2" className="self-end !text-gray-100 capitalize">
                  Buy KSFT
                </Heading>
                <Heading size="3xl" as="h3" className="self-start !text-gray-100 capitalize">
                  Stake KSFT
                </Heading>
              </div>
              <Img src="images/img_image_43.png" alt="imagefortythree" className="ml-[17px] md:ml-0 object-cover" />
            </div>
            <div className="flex flex-col self-end w-[16%] md:w-full mb-[166px] gap-[247px] md:gap-[185px] sm:gap-[123px]">
              <div className="flex items-center gap-[22px]">
                <Img src="images/img_image_48.png" alt="imagefortyeight" className="w-[89px] object-cover" />
                <Img src="images/img_image_50.png" alt="imagefiftyone" className="self-start w-[84px] object-cover" />
              </div>
              <div className="flex items-center gap-[18px]">
                <Img src="images/img_image_49.png" alt="imagefortynine" className="w-[90px] object-cover" />
                <Img src="images/img_image_48.png" alt="imagefiftyone" className="w-[89px] object-cover" />
              </div>
            </div>
          </div>
          <footer className="flex flex-col mt-[137px] gap-[60px] sm:gap-[30px]">
            <div className="flex md:flex-col justify-between w-full gap-5 mx-auto md:p-5 max-w-7xl">
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
                      <a href="#">
                        <div className="flex ml-[27px] py-px md:ml-0">
                          <Text as="p" className="!text-white-A700_99_01">
                            Twitter
                          </Text>
                        </div>
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
                    <div className="flex flex-col items-start gap-6">
                      <a href="Doc" target="_blank" rel="noreferrer" className="ml-[27px] md:ml-0">
                        <Text as="p" className="!text-white-A700_99_01">
                          Doc
                        </Text>
                      </a>
                      <a href="#">
                        <div className="flex self-center py-px">
                          <Text as="p" className="!text-white-A700_99_01 capitalize">
                            news
                          </Text>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 border-white-A700_0f border-t border-solid">
              <div className="flex sm:flex-col justify-between items-center w-full gap-5 mx-auto max-w-7xl">
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
          <Img
            src="images/img_vector.png"
            alt="vectorone_one"
            className="w-full md:h-auto mt-[740px] mx-auto md:p-5 object-cover max-w-[1292px]"
          />
        </div>
      </div>
    </>
  );
}
