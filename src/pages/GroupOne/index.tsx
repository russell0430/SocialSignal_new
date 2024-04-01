import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, SelectBox } from "../../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function GroupOnePage() {
  return (
    <>
      <Helmet>
        <title>Social signal</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-900_01">
        <div>
          <div className="h-[410px] relative">
            <div className="h-[340px] w-full md:h-auto top-[0.00px] right-0 left-0 m-auto absolute">
              <Img
                src="images/img_1d2b7b62b9e27af_340x1727.png"
                alt="1d2b7b62b9e27af"
                className="h-[340px] w-full object-cover"
              />
              <div className="w-full h-max pb-[250px] left-0 bottom-0 right-0 top-0 m-auto md:pb-5 bg-black-900_7f_01 absolute">
                <div>
                  <header className="flex md:flex-col justify-between items-center gap-5 p-[25px] sm:p-5 bg-gray-900_01">
                    <div className="flex md:flex-col justify-between items-center w-[53%] md:w-full ml-[55px] gap-5 md:ml-0">
                      <div className="flex justify-center w-[36%] md:w-full gap-3.5">
                        <Img src="images/img_settings_blue_200.svg" alt="settingsone_one" className="h-[40px]" />
                        <Img
                          src="images/img_group_1000002854_gray_50.png"
                          alt="image_one"
                          className="w-[88%] object-cover"
                        />
                      </div>
                      <ul className="flex self-end mb-1.5 gap-10 flex-wrap">
                        <li>
                          <a href="#" className="self-start">
                            <Heading size="xl" as="h6" className="tracking-[0.72px] capitalize">
                              Tutorials
                            </Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="self-start cursor-pointer hover:font-extrabold">
                            <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                              points
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="self-start cursor-pointer hover:font-extrabold">
                            <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                              twitter
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="self-end cursor-pointer hover:font-extrabold">
                            <Text size="3xl" as="p" className="tracking-[0.72px] capitalize">
                              telegram
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center w-[13%] md:w-full mr-[55px] gap-4 md:mr-0">
                      <Button color="white_A700_33" size="3xl" className="capitalize min-w-[143px] rounded-[20px]">
                        Connect Wallet
                      </Button>
                      <Img
                        src="images/img_rectangle_40x40.png"
                        alt="circleimage"
                        className="h-[40px] w-[40px] rounded-[50%]"
                      />
                    </div>
                  </header>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col justify-between items-center w-[31%] bottom-[0.00px] left-[18%] gap-5 m-auto absolute sm:relative">
              <Img
                src="images/img_1d2b7b62b9e27af.png"
                alt="1d2b7b62b9e27af"
                className="w-[206px] sm:w-full object-cover"
              />
              <div className="flex self-end gap-5 sm:p-5">
                <Button color="white_A700_33" size="6xl" shape="round" className="sm:px-5 min-w-[156px] !rounded-md">
                  + Join
                </Button>
                <Button size="5xl" shape="square" className="w-[42px]">
                  <Img src="images/img_frame_white_a700.svg" />
                </Button>
                <Button color="white_A700_7f" size="5xl" shape="round" className="w-[42px] !rounded-md">
                  <Img src="images/img_info.svg" />
                </Button>
              </div>
            </div>
            <div className="flex sm:flex-col justify-end items-center w-[11%] gap-[22px] bottom-[0.00px] right-[18%] m-auto absolute sm:relative">
              <Img
                src="images/img_moonb01_1_1_59x59.png"
                alt="moonb011oneone"
                className="w-[59px] sm:w-full object-cover rounded-md"
              />
              <div className="flex flex-col self-end items-start gap-[3px] sm:p-5">
                <Heading size="2xl" as="h1">
                  Owner
                </Heading>
                <Text size="2xl" as="p" className="!text-gray-100 capitalize">
                  @S030912
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col self-start justify-between items-end w-full mt-12 gap-5 mx-auto md:p-5 max-w-[1187px]">
            <Heading as="h2" className="!text-black-900 capitalize !font-bold">
              + Join
            </Heading>
            <div className="flex flex-col items-start w-[41%] md:w-full pt-[15px] gap-[23px]">
              <Heading size="4xl" as="h3">
                Group name
              </Heading>
              <Text size="4xl" as="p" className="w-[93%] md:w-full">
                Our Slogan is to make the world better. Our Slogan is to make the world better.{" "}
              </Text>
            </div>
            <div className="flex sm:flex-col items-start mb-[9px]">
              <div className="flex flex-col items-start gap-[13px]">
                <Heading size="2xl" as="h4">
                  Topic
                </Heading>
                <div className="flex flex-col items-start gap-2">
                  <Text
                    size="4xl"
                    as="p"
                    className="flex justify-center items-center h-[32px] px-2 py-[3px] !text-gray-100 capitalize border-white-A700_66 border border-solid bg-blue-700_19 rounded-[7px]"
                  >
                    Trading Analysis
                  </Text>
                  <Button
                    size="md"
                    variant="fill"
                    shape="round"
                    className="capitalize border-white-A700_66 border border-solid min-w-[59px] !rounded-[7px]"
                  >
                    DeFi
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start ml-[25px] gap-3.5 sm:ml-0">
                <Heading size="2xl" as="h5">
                  Members
                </Heading>
                <div className="flex items-center gap-[5px]">
                  <Img src="images/img_frame_teal_a700.svg" alt="imageone_one" className="h-[18px] w-[18px]" />
                  <Text size="2xl" as="p" className="self-end !text-teal-A700 tracking-[0.24px]">
                    99/200
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center ml-[55px] gap-3 sm:ml-0">
                <Heading size="2xl" as="h6" className="text-center">
                  My Token
                </Heading>
                <Heading as="h6" className="mb-0.5 !font-bold">
                  <span className="text-white-A700">888&nbsp;</span>
                  <span className="text-white-A700">$SS</span>
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col self-start justify-between items-start w-full mt-[123px] gap-5 mx-auto md:p-5 max-w-[1359px]">
            <Img
              src="images/img_icons_settings.svg"
              alt="iconssettings"
              className="h-[24px] w-[24px] md:w-full mt-10"
            />
            <div className="flex flex-col items-center w-[90%] md:w-full gap-[133px] md:gap-[99px] sm:gap-[66px]">
              <div className="flex flex-col self-stretch items-center gap-12 px-[105px] md:px-5">
                <Text size="8xl" as="p" className="tracking-[0.60px] !font-peacesans text-shadow-ts">
                  Dashboard
                </Text>
                <div className="flex flex-col self-stretch items-center gap-8 p-8 sm:p-5 border-white-A700_66 border border-solid shadow-sm rounded-[30px]">
                  <div className="flex md:flex-col w-[96%] md:w-full gap-8">
                    <div className="flex flex-col items-start justify-center w-[21%] md:w-full gap-[11px] bg-gray-900 rounded-[34px]">
                      <Heading as="h2" className="mt-[29px] ml-[29px] md:ml-0 tracking-[-0.18px]">
                        SS Token
                      </Heading>
                      <div className="flex flex-col self-end items-start justify-center mb-[27px] gap-[5px]">
                        <Text size="5xl" as="p" className="mt-0.5 tracking-[0.36px] !font-geomgraphic">
                          0.0
                        </Text>
                        <Text size="md" as="p" className="tracking-[0.20px] !font-geomgraphic">
                          ≈$0.0
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-[21%] md:w-full gap-[11px] bg-gray-900 rounded-[34px]">
                      <Heading as="h3" className="mt-[29px] ml-[29px] md:ml-0 tracking-[-0.18px]">
                        KSFT Token
                      </Heading>
                      <div className="flex flex-col self-end items-start justify-center mb-[27px] gap-[5px]">
                        <Text size="5xl" as="p" className="mt-0.5 tracking-[0.36px] !font-geomgraphic">
                          0.0
                        </Text>
                        <Text size="md" as="p" className="tracking-[0.20px] !font-geomgraphic">
                          ≈$0.0
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[11px] p-[19px] bg-gray-900 flex-1 rounded-[34px]">
                      <Heading as="h4" className="mt-[11px] ml-[11px] md:ml-0 tracking-[-0.18px]">
                        Staked KSFT
                      </Heading>
                      <div className="flex mb-[9px]">
                        <Text size="5xl" as="p" className="mb-8 tracking-[0.36px] !font-geomgraphic">
                          $4.550
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-3 p-5 bg-gray-900 flex-1 rounded-[34px]">
                      <Heading as="h5" className="mt-[9px] ml-2.5 md:ml-0 tracking-[-0.18px]">
                        KSFT Market Price
                      </Heading>
                      <div className="flex mb-2">
                        <Text size="5xl" as="p" className="mb-[33px] tracking-[0.36px] !font-geomgraphic">
                          $2.175
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col w-[95%] md:w-full gap-px">
                    <div className="flex p-[31px] sm:p-5 bg-gray-900 flex-1 rounded-[34px]">
                      <Heading as="h6" className="mb-[55px] ml-7 md:ml-0 tracking-[-0.18px]">
                        KSFT Circulate Market Cap
                      </Heading>
                    </div>
                    <div className="flex mb-7 md:mb-0">
                      <Text size="5xl" as="p" className="self-end tracking-[0.36px] !font-geomgraphic">
                        $ 4,984,675.722
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center pl-7 gap-[23px] py-7 sm:pl-5 sm:py-5 bg-gray-900 flex-1 rounded-[34px]">
                      <Heading as="h6" className="mt-[3px] ml-8 md:ml-0 tracking-[-0.18px]">
                        KSFT Circulate Supply
                      </Heading>
                      <div className="flex self-end">
                        <Text size="5xl" as="p" className="self-end tracking-[0.36px] !font-geomgraphic">
                          2,060,428.925
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-[82%] md:w-full gap-12">
                <Text size="8xl" as="p" className="tracking-[0.60px] !font-peacesans text-shadow-ts">
                  Swap
                </Text>
                <div className="flex flex-col self-stretch gap-[29px]">
                  <div className="flex justify-between items-center w-[28%] md:w-full gap-5 flex-wrap">
                    <Heading size="3xl" as="h4" className="!text-gray-100 capitalize">
                      Buy KSFT
                    </Heading>
                    <Text size="4xl" as="p" className="self-start !text-gray-100 capitalize">
                      Stake KSFT
                    </Text>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col justify-center pl-16 pr-14 gap-[31px] py-16 md:p-5 bg-blue_gray-900 rounded-[30px]">
                      <div className="flex md:flex-col justify-between items-center gap-5">
                        <div className="flex justify-between items-start w-[53%] md:w-full gap-5 p-8 sm:p-5 border-white-A700_4c border border-solid bg-gray-900 rounded-[24px]">
                          <div className="flex flex-col items-start justify-center gap-5">
                            <Text size="7xl" as="p" className="mt-[3px] tracking-[0.54px] !font-geomgraphic">
                              0.0
                            </Text>
                            <Text size="xl" as="p" className="tracking-[0.22px] !font-geomgraphic">
                              $0.0
                            </Text>
                          </div>
                          <Button
                            color="blue_gray_900"
                            size="4xl"
                            variant="fill"
                            shape="round"
                            className="mr-1.5 md:mr-0 capitalize min-w-[87px]"
                          >
                            Max
                          </Button>
                        </div>
                        <div className="flex flex-col w-[37%] md:w-full pb-4 gap-[27px]">
                          <SelectBox
                            shape="round"
                            indicator={<Img src="images/img_frame_gray_300_24x24.svg" alt="Frame" />}
                            name="ss"
                            placeholder={`SS`}
                            options={dropDownOptions}
                            className="gap-px sm:p-5 capitalize border-white-A700_4c border border-solid"
                          />
                          <div className="flex justify-between gap-5 px-3 flex-wrap">
                            <Text size="4xl" as="p" className="!text-gray-100_66 capitalize">
                              Balance:
                            </Text>
                            <Text size="4xl" as="p" className="mr-[11px] md:mr-0 !text-gray-100_66 capitalize">
                              0.0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[23px]">
                        <Img src="images/img_frame_gray_300.svg" alt="imagetwo_one" className="h-[43px] w-[43px]" />
                        <div className="flex flex-col items-start gap-2">
                          <Text size="2xl" as="p" className="!text-deep_purple-A200 capitalize">
                            Market Price
                          </Text>
                          <Text size="2xl" as="p" className="!text-gray-100 capitalize">
                            1 SS = 4.55 KSFT
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-col justify-between items-center gap-5">
                        <div className="flex flex-col items-start justify-center w-[53%] md:w-full gap-5 p-[33px] sm:p-5 border-white-A700_4c border border-solid bg-gray-900 rounded-[24px]">
                          <Text size="7xl" as="p" className="mt-[3px] tracking-[0.54px] !font-geomgraphic">
                            0.0
                          </Text>
                          <Text size="xl" as="p" className="tracking-[0.22px] !font-geomgraphic">
                            $0.0
                          </Text>
                        </div>
                        <div className="flex flex-col w-[37%] md:w-full pb-[18px] gap-[27px]">
                          <SelectBox
                            shape="round"
                            name="ksft"
                            placeholder={`KSFT`}
                            options={dropDownOptions}
                            className="sm:p-5 capitalize border-white-A700_4c border border-solid"
                          />
                          <div className="flex justify-between gap-5 px-3 flex-wrap">
                            <Text size="4xl" as="p" className="!text-gray-100_66 capitalize">
                              Balance:
                            </Text>
                            <Text size="4xl" as="p" className="mr-[11px] md:mr-0 !text-gray-100_66 capitalize">
                              0.0
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      color="blue_gray_900"
                      size="8xl"
                      variant="fill"
                      className="w-full sm:px-5 capitalize font-semibold rounded-[30px]"
                    >
                      Connect Wallet
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex flex-col mt-[319px] gap-[60px] sm:gap-[30px]">
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
            className="w-full md:h-auto mt-[802px] mx-auto md:p-5 object-cover max-w-[1292px]"
          />
        </div>
      </div>
    </>
  );
}
