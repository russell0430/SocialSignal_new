import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import Footer from "../../components/Footer";
import LandingpageBg from "../../components/LandingpageBg";
import LandingpageCard from "../../components/LandingpageCard";
import LandingpageColumnpurchaser from "../../components/LandingpageColumnpurchaser";
import LandingpageFeatures from "../../components/LandingpageFeatures";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const table1Data = [
  { group: "images/img_unsplash_fyzoy0hif9a.png", rowvalueone: "name" },
  { group: "20", rowvalueone: "20" },
  { group: "name", rowvalueone: "name" },
  { group: "1878.3", rowvalueone: "1878.3" },
  { group: "#metaverse #GameFi", rowvalueone: "#metaverse #GameFi" },
  { group: "images/img_unsplash_fyzoy0hif9a.png", rowvalueone: "name" },
  { group: "images/img_unsplash_fyzoy0hif9a.png", rowvalueone: "name" },
  { group: "images/img_unsplash_fyzoy0hif9a.png", rowvalueone: "name" },
];

type Table1RowType = { group: string; rowvalueone: string };

export default function LandingpagePage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();
    return [
      table1ColumnHelper.accessor("group", {
        cell: (info) => (
          <Img src={info?.getValue?.() as string} alt="unsplash_one" className="object-cover rounded-lg" />
        ),
        header: (info) => (
          <Button
            color="white_A700_14_01"
            size="lg"
            variant="fill"
            shape="round"
            className="tracking-[0.15px] capitalize font-semibold min-w-[53px]"
          >
            group
          </Button>
        ),
        meta: { width: "53px" },
      }),
      table1ColumnHelper.accessor("rowvalueone", {
        cell: (info) => (
          <Heading as="h6" className="tracking-[0.32px] capitalize">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex">
            <div className="flex justify-between w-[33%] gap-5">
              <Button
                color="white_A700_14_01"
                size="lg"
                variant="fill"
                shape="round"
                className="tracking-[0.15px] capitalize font-semibold min-w-[72px]"
              >
                members
              </Button>
              <div className="flex p-2 bg-white-A700_14_01 rounded-lg">
                <Heading size="xs" as="h5" className="self-start tracking-[0.15px]">
                  KOL
                </Heading>
              </div>
            </div>
            <div className="flex p-[7px] bg-white-A700_14_01 rounded-lg">
              <Heading size="xs" as="h6" className="self-end tracking-[0.15px] capitalize">
                key price
              </Heading>
            </div>
            <div className="flex p-[7px] bg-white-A700_14_01 rounded-lg">
              <Heading size="xs" as="p" className="self-end tracking-[0.15px] capitalize">
                topic
              </Heading>
            </div>
          </div>
        ),
        meta: { width: "646px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Social signal</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-900_01">
        <div className="flex flex-col gap-[94px] md:gap-[70px] sm:gap-[47px]">
          <LandingpageBg className="opacity-0.6 rotate-[90deg] bg-gradient1" />
          <div className="h-[4155px] relative">
            <div className="flex flex-col items-start w-[43%] left-[0.00px] top-[2%] m-auto absolute">
              <Img
                src="images/img_vector.png"
                alt="vector_one"
                className="h-[1527px] w-full md:h-auto z-[1] object-cover"
              />
              <Img src="images/img_.png" alt="image_two" className="w-[86%] mt-[-395px] relative object-cover" />
            </div>
            <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="flex flex-col z-[1]">
                <Img
                  src="images/img_icons_settings.svg"
                  alt="iconssettings"
                  className="h-[24px] w-[24px] ml-[45px] md:ml-0"
                />
                <div className="flex flex-col mt-[-17px] gap-[150px] md:gap-28 sm:gap-[75px] relative">
                  <div className="flex flex-col w-full gap-10 mx-auto md:p-5 max-w-[1008px]">
                    <div className="flex px-[367px] md:px-5">
                      <Text size="8xl" as="p" className="tracking-[0.60px] !font-peacesans text-shadow-ts">
                        Key Features
                      </Text>
                    </div>
                    <LandingpageFeatures className="flex flex-col items-center gap-10" />
                  </div>
                  <div className="flex flex-col gap-[150px] md:gap-28 sm:gap-[75px]">
                    <div className="flex flex-col items-center gap-[25px]">
                      <Text size="8xl" as="p" className="tracking-[0.60px] !font-peacesans text-shadow-ts">
                        Roadmap
                      </Text>
                      <div className="flex flex-col self-stretch gap-[15px]">
                        <div className="flex md:flex-col w-full gap-[67px] mx-auto md:p-5 max-w-[1296px]">
                          <div className="flex items-start w-full mt-[120px] md:mt-0">
                            <div className="flex flex-col items-start w-[20%]">
                              <Img src="images/img_vector_8.png" alt="2024_qone_one" className="w-[82%] object-cover" />
                              <Img
                                src="images/img_explore.png"
                                alt="explore_one"
                                className="self-end w-[34px] mt-[-4px] relative object-cover"
                              />
                            </div>
                            <div className="ml-[-68px] p-[18px] relative border-2 border-solid black_900_1a_01_purple_A200_00_border bg-gradient2 flex-1 rounded-lg">
                              <div className="flex flex-col gap-1">
                                <div className="flex pr-1">
                                  <Heading size="2xl" as="h1">
                                    2024 Q1
                                  </Heading>
                                </div>
                                <Text size="xl" as="p" className="tracking-[0.22px] leading-[150%]">
                                  <>
                                    Creator economy incentives
                                    <br />
                                    Enriched community engagement tools
                                    <br />
                                    Start marketing initiatives
                                  </>
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start w-full">
                            <div className="flex flex-col items-start w-[20%]">
                              <Img
                                src="images/img_vector_8.png"
                                alt="vectoreight_one"
                                className="w-[82%] object-cover"
                              />
                              <Img
                                src="images/img_explore.png"
                                alt="explore_one"
                                className="self-end w-[34px] mt-[-4px] relative object-cover"
                              />
                            </div>
                            <div className="ml-[-68px] p-[18px] relative border-2 border-solid black_900_1a_01_purple_A200_00_border bg-gradient2 flex-1 rounded-lg">
                              <div className="flex flex-col items-start gap-1">
                                <Heading size="2xl" as="h2">
                                  2024 Q2
                                </Heading>
                                <Text size="xl" as="p" className="tracking-[0.22px] leading-[150%]">
                                  <>
                                    Token generation event
                                    <br />
                                    Market making strategies
                                    <br />
                                    Token airdrop
                                    <br />
                                    Expand partnerships
                                    <br />
                                    Amplify influencer signals
                                  </>
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start w-full">
                            <div className="flex flex-col items-start w-[20%]">
                              <Img
                                src="images/img_vector_8.png"
                                alt="vectoreight_one"
                                className="w-[82%] object-cover"
                              />
                              <Img
                                src="images/img_explore.png"
                                alt="explore_one"
                                className="self-end w-[34px] mt-[-4px] relative object-cover"
                              />
                            </div>
                            <div className="ml-[-68px] p-[18px] relative border-2 border-solid black_900_1a_01_purple_A200_00_border bg-gradient2 flex-1 rounded-lg">
                              <div className="flex flex-col items-start gap-1">
                                <Heading size="2xl" as="h3">
                                  2024 Q3
                                </Heading>
                                <Text size="xl" as="p" className="tracking-[0.22px] leading-[150%]">
                                  <>
                                    Support seamless multi-device use
                                    <br />
                                    Launch integrated cryptocurrency exchange
                                    <br />
                                    Broad token admission system
                                  </>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img src="images/img_separator.png" alt="separator_one" className="h-[4px] object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-[39px] mx-auto md:p-5 max-w-[1126px]">
                      <div className="flex flex-col gap-1">
                        <div className="flex pb-1.5">
                          <div className="flex items-center gap-11 flex-wrap">
                            <Heading size="3xl" as="h4" className="!text-gray-100 capitalize">
                              hot topic
                            </Heading>
                            <Text size="4xl" as="p" className="!text-gray-100 capitalize">
                              private group
                            </Text>
                          </div>
                        </div>
                        <div className="p-10 sm:p-5 rounded-tr-[30px] border border-solid black_900_1a_01_purple_A200_00_border bg-black-900_33_01">
                          <ReactTable
                            bodyProps={{ className: "" }}
                            headerProps={{ className: "md:flex-col" }}
                            rowDataProps={{ className: "" }}
                            columns={table1Columns}
                            data={table1Data}
                          />
                        </div>
                      </div>
                      <LandingpageColumnpurchaser className="flex flex-col gap-1" />
                    </div>
                    <div className="flex flex-col items-center gap-12">
                      <Text size="8xl" as="p" className="tracking-[0.60px] !font-peacesans capitalize text-shadow-ts">
                        what our user say
                      </Text>
                      <div className="flex md:flex-col self-stretch gap-12 py-[26px] sm:py-5 overflow-auto">
                        <LandingpageCard
                          description='<>"Social Signal is truly an innovative platform! With seamless integration with the Telegram Bot, I can easily access race and investment recommendations, eliminating the tedious search steps and making my trading more intelligent and convenient."<br /></>'
                          className="flex sm:flex-col justify-center items-start w-[41%] md:w-full gap-6 p-10 md:p-5 border border-solid black_900_1a_01_purple_A200_00_border bg-black-900_33_01 rounded-[19px]"
                        />
                        <LandingpageCard className="flex sm:flex-col justify-center items-start w-[41%] md:w-full gap-6 p-[39px] md:p-5 border border-solid black_900_1a_01_purple_A200_00_border bg-black-900_33_01 rounded-[19px]" />
                        <LandingpageCard className="flex sm:flex-col justify-center items-start w-[41%] md:w-full gap-6 p-[39px] md:p-5 border border-solid black_900_1a_01_purple_A200_00_border bg-black-900_33_01 rounded-[19px]" />
                        <LandingpageCard
                          description='<>"Social Signal is truly an innovative platform! With seamless integration with the Telegram Bot, I can easily access race and investment recommendations, eliminating the tedious search steps and making my trading more intelligent and convenient."<br /></>'
                          className="flex sm:flex-col justify-center items-start w-[41%] md:w-full gap-6 p-10 md:p-5 border border-solid black_900_1a_01_purple_A200_00_border bg-black-900_33_01 rounded-[19px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_vector.png"
                alt="vector_three"
                className="w-full md:h-auto mt-[-219px] md:p-5 relative object-cover max-w-[1292px]"
              />
            </div>
            <Footer className="flex flex-col w-full gap-[60px] bottom-[20%] right-0 left-0 m-auto sm:gap-[30px] absolute" />
            <Img
              src="images/img_vector_1305x755.png"
              alt="vector_five"
              className="h-[1305px] w-[52%] right-[0.00px] top-[10%] m-auto object-cover absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
}
