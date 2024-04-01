import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, Slider } from "../../components";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

export default function LandingpageOnePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <>
      <Helmet>
        <title>Social signal</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-900_01">
        <div className="flex flex-col items-start">
          <div className="self-stretch py-5 bg-gray-800_01">
            <div className="flex flex-col items-center mb-[65px]">
              <header className="flex md:flex-col self-stretch justify-between items-center gap-5 px-20 md:px-5">
                <div className="flex md:flex-col justify-between items-center w-[65%] md:w-full gap-5">
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
                <div className="flex justify-center w-[13%] md:w-full gap-4">
                  <Button color="white_A700_33" size="3xl" className="capitalize min-w-[111px] rounded-[20px]">
                    join group
                  </Button>
                  <Img
                    src="images/img_rectangle_40x40.png"
                    alt="circleimage"
                    className="h-[40px] w-[40px] rounded-[50%]"
                  />
                </div>
              </header>
              <div className="flex md:flex-col items-center w-full mt-[105px] mx-auto md:p-5 max-w-[1226px]">
                <div className="flex flex-col items-start w-[48%] md:w-full gap-10">
                  <div className="flex flex-col self-stretch items-start gap-4">
                    <div className="flex w-[94%] md:w-full pt-[13px]">
                      <Heading size="5xl" as="h1" className="leading-[72px]">
                        Unlocking The New SocialFi Frontier{" "}
                      </Heading>
                    </div>
                    <div className="flex self-center pr-[7px] py-[7px]">
                      <Heading size="2xl" as="h2" className="self-end !text-blue_gray-300 !font-bold">
                        Preferred Private Social Keys to Web3 Powered By SFTs{" "}
                      </Heading>
                    </div>
                  </div>
                  <Button
                    color="white_A700_33"
                    size="7xl"
                    rightIcon={<Img src="images/img_frame_1000002923.svg" alt="Frame 1000002923" />}
                    className="ml-[3px] gap-[11px] md:ml-0 sm:px-5 min-w-[260px] rounded-[30px]"
                  >
                    Join Now！
                  </Button>
                </div>
                <div className="md:self-stretch h-[300px] md:w-full flex-1 relative md:flex-none">
                  <div className="flex sm:flex-col items-center w-[89%] h-max left-[0.00px] bottom-0 top-0 my-auto absolute sm:relative">
                    <div className="h-[239px] w-[40%] bg-gray-500" />
                    <div className="w-full ml-[-234px] sm:ml-0">
                      <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
                        renderDotsItem={(props: DotsItem) => {
                          return props?.isActive ? (
                            <div className="h-[13px] w-[13px] mr-4 border-white-A700 border border-solid bg-gray_700" />
                          ) : (
                            <div className="h-[13px] w-[13px] mr-4 bg-blue_gray-100" />
                          );
                        }}
                        activeIndex={sliderState}
                        onSlideChanged={(e: EventObject) => {
                          setSliderState(e?.item);
                        }}
                        ref={sliderRef}
                        className="sm:self-stretch relative bg-gray-500 flex-1"
                        items={[...Array(3)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <Img src="images/img_subtract.svg" alt="subtractone_one" className="h-[300px] mx-auto" />
                          </React.Fragment>
                        ))}
                      />
                    </div>
                  </div>
                  <div className="h-[239px] w-[50%] right-[0.00px] bottom-0 top-0 my-auto bg-gray-500 absolute" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start mt-[92px] ml-[45px] gap-3.5 md:ml-0">
            <Img src="images/img_icons_settings.svg" alt="iconssettings" className="h-[24px] w-[24px]" />
            <Text size="8xl" as="p" className="mt-[7px] tracking-[0.60px] !font-lexendgiga text-shadow-ts">
              Weekly Selects 
            </Text>
          </div>
          <div className="flex md:flex-col self-center w-full mt-[29px] gap-[38px] mx-auto md:p-5 max-w-[1278px]">
            <div className="h-[239px] w-full bg-gray-500" />
            <div className="h-[239px] w-full bg-gray-500" />
            <div className="h-[239px] w-full bg-gray-500" />
          </div>
          <Text
            size="8xl"
            as="p"
            className="mt-[113px] ml-20 md:ml-0 tracking-[0.60px] !font-alfaslabone text-shadow-ts"
          >
            <span className="text-white-A700">Group&nbsp;</span>
            <span className="text-white-A700">Navigation</span>
          </Text>
          <div className="flex justify-between items-center w-[13%] md:w-full mt-7 ml-20 gap-5 md:p-5 md:ml-0 flex-wrap">
            <Heading size="3xl" as="h2" className="h-[30px] !text-gray-100 capitalize">
              All
            </Heading>
            <Text size="4xl" as="p" className="self-end !text-gray-100 capitalize">
              Following
            </Text>
          </div>
          <div className="flex justify-between w-[11%] md:w-full mt-3.5 ml-[78px] gap-5 md:p-5 md:ml-0 flex-wrap">
            <Text size="4xl" as="p" className="!text-gray-100 capitalize">
              Games
            </Text>
            <Text size="4xl" as="p" className="!text-gray-100 capitalize">
              News
            </Text>
          </div>
          <div className="self-stretch h-[797px] mt-8 relative">
            <Img
              src="images/img_.png"
              alt="imageone_one"
              className="h-[232px] w-[37%] bottom-[0.00px] left-[0.00px] m-auto object-cover absolute"
            />
            <div className="w-full top-[0.00px] right-0 left-0 m-auto absolute">
              <div className="justify-center w-full gap-8 grid-cols-[repeat(auto-fill,_minmax(270px_,_1fr))] md:p-5 z-[1] grid max-w-7xl">
                <div className="flex flex-col w-full gap-[25px] p-[13px] bg-gray-800 rounded-[10px]">
                  <div className="flex justify-between items-start mt-[5px] gap-5">
                    <div className="h-[67px] w-[67px] bg-blue_gray-100 rounded-[33px]" />
                    <div className="flex flex-col items-start">
                      <Heading as="h2" className="!text-gray-100 capitalize !font-bold">
                        Owner’s name
                      </Heading>
                      <Text size="xs" as="p" className="mt-6">
                        99 joined / 200 max
                      </Text>
                      <Text
                        size="xs"
                        as="p"
                        className="flex justify-center items-center h-[17px] mt-2 px-[11px] py-0.5 !text-gray-100 capitalize text-center bg-gray-600 rounded-[3px]"
                      >
                        I’m a tag
                      </Text>
                    </div>
                  </div>
                  <Button
                    color="blue_gray_100"
                    size="sm"
                    variant="fill"
                    className="w-full sm:px-5 capitalize font-bold rounded-[5px]"
                  >
                    + Join
                  </Button>
                </div>
                <div className="flex flex-col items-center w-full p-[13px] bg-gray-800 rounded-[10px]">
                  <div className="flex self-stretch justify-between items-start mt-[5px] gap-5">
                    <div className="h-[67px] w-[67px] bg-blue_gray-100 rounded-[33px]" />
                    <div className="flex flex-col items-start gap-6">
                      <Heading as="h3" className="!text-gray-100 capitalize !font-bold">
                        Owner’s name
                      </Heading>
                      <Text size="xs" as="p">
                        99 joined / 200 max
                      </Text>
                    </div>
                  </div>
                  <Text
                    size="xs"
                    as="p"
                    className="flex self-end justify-center items-center h-[17px] mt-[-2px] mr-[51px] px-[11px] py-0.5 md:mr-0 !text-gray-100 capitalize text-center relative bg-gray-600 rounded-[3px]"
                  >
                    I’m a tag
                  </Text>
                  <Button
                    color="blue_gray_100"
                    size="sm"
                    variant="fill"
                    className="w-full mt-[25px] sm:px-5 capitalize font-bold rounded-[5px]"
                  >
                    + Join
                  </Button>
                </div>
                <div className="flex flex-col items-center w-full p-[13px] bg-gray-800 rounded-[10px]">
                  <div className="flex self-stretch justify-between items-start mt-[5px] gap-5">
                    <div className="h-[67px] w-[67px] bg-blue_gray-100 rounded-[33px]" />
                    <div className="flex flex-col items-start gap-6">
                      <Heading as="h4" className="!text-gray-100 capitalize !font-bold">
                        Owner’s name
                      </Heading>
                      <Text size="xs" as="p">
                        99 joined / 200 max
                      </Text>
                    </div>
                  </div>
                  <Text
                    size="xs"
                    as="p"
                    className="flex self-end justify-center items-center h-[17px] mt-[-2px] mr-[51px] px-[11px] py-0.5 md:mr-0 !text-gray-100 capitalize text-center relative bg-gray-600 rounded-[3px]"
                  >
                    I’m a tag
                  </Text>
                  <Button
                    color="blue_gray_100"
                    size="sm"
                    variant="fill"
                    className="w-full mt-[25px] sm:px-5 capitalize font-bold rounded-[5px]"
                  >
                    + Join
                  </Button>
                </div>
                <div className="flex flex-col items-center w-full p-[13px] bg-gray-800 rounded-[10px]">
                  <div className="flex self-stretch justify-between items-start mt-[5px] gap-5">
                    <div className="h-[67px] w-[67px] bg-blue_gray-100 rounded-[33px]" />
                    <div className="flex flex-col items-start gap-6">
                      <Heading as="h5" className="!text-gray-100 capitalize !font-bold">
                        Owner’s name
                      </Heading>
                      <Text size="xs" as="p">
                        99 joined / 200 max
                      </Text>
                    </div>
                  </div>
                  <Text
                    size="xs"
                    as="p"
                    className="flex self-end justify-center items-center h-[17px] mt-[-2px] mr-[51px] px-[11px] py-0.5 md:mr-0 !text-gray-100 capitalize text-center relative bg-gray-600 rounded-[3px]"
                  >
                    I’m a tag
                  </Text>
                  <Button
                    color="blue_gray_100"
                    size="sm"
                    variant="fill"
                    className="w-full mt-[25px] sm:px-5 capitalize font-bold rounded-[5px]"
                  >
                    + Join
                  </Button>
                </div>
                <div className="flex flex-col items-center w-full p-[13px] bg-gray-800 rounded-[10px]">
                  <div className="flex self-stretch justify-between items-start mt-[5px] gap-5">
                    <div className="h-[67px] w-[67px] bg-blue_gray-100 rounded-[33px]" />
                    <div className="flex flex-col items-start gap-6">
                      <Heading as="h6" className="!text-gray-100 capitalize !font-bold">
                        Owner’s name
                      </Heading>
                      <Text size="xs" as="p">
                        99 joined / 200 max
                      </Text>
                    </div>
                  </div>
                  <Text
                    size="xs"
                    as="p"
                    className="flex self-end justify-center items-center h-[17px] mt-[-2px] mr-[51px] px-[11px] py-0.5 md:mr-0 !text-gray-100 capitalize text-center relative bg-gray-600 rounded-[3px]"
                  >
                    I’m a tag
                  </Text>
                  <Button
                    color="blue_gray_100"
                    size="sm"
                    variant="fill"
                    className="w-full mt-[25px] sm:px-5 capitalize font-bold rounded-[5px]"
                  >
                    + Join
                  </Button>
                </div>
                <div className="flex flex-col items-center w-full p-[13px] bg-gray-800 rounded-[10px]">
                  <div className="flex self-stretch justify-between items-start mt-[5px] gap-5">
                    <div className="h-[67px] w-[67px] bg-blue_gray-100 rounded-[33px]" />
                    <div className="flex flex-col items-start gap-6">
                      <Heading as="h6" className="!text-gray-100 capitalize !font-bold">
                        Owner’s name
                      </Heading>
                      <Text size="xs" as="p">
                        99 joined / 200 max
                      </Text>
                    </div>
                  </div>
                  <Text
                    size="xs"
                    as="p"
                    className="flex self-end justify-center items-center h-[17px] mt-[-2px] mr-[51px] px-[11px] py-0.5 md:mr-0 !text-gray-100 capitalize text-center relative bg-gray-600 rounded-[3px]"
                  >
                    I’m a tag
                  </Text>
                  <Button
                    color="blue_gray_100"
                    size="sm"
                    variant="fill"
                    className="w-full mt-[25px] sm:px-5 capitalize font-bold rounded-[5px]"
                  >
                    + Join
                  </Button>
                </div>
                <div className="flex flex-col items-center w-full p-[13px] bg-gray-800 rounded-[10px]">
                  <div className="flex self-stretch justify-between items-start mt-[5px] gap-5">
                    <div className="h-[67px] w-[67px] bg-blue_gray-100 rounded-[33px]" />
                    <div className="flex flex-col items-start gap-6">
                      <Heading as="h6" className="!text-gray-100 capitalize !font-bold">
                        Owner’s name
                      </Heading>
                      <Text size="xs" as="p">
                        99 joined / 200 max
                      </Text>
                    </div>
                  </div>
                  <Text
                    size="xs"
                    as="p"
                    className="flex self-end justify-center items-center h-[17px] mt-[-2px] mr-[51px] px-[11px] py-0.5 md:mr-0 !text-gray-100 capitalize text-center relative bg-gray-600 rounded-[3px]"
                  >
                    I’m a tag
                  </Text>
                  <Button
                    color="blue_gray_100"
                    size="sm"
                    variant="fill"
                    className="w-full mt-[25px] sm:px-5 capitalize font-bold rounded-[5px]"
                  >
                    + Join
                  </Button>
                </div>
                <div className="flex flex-col items-center w-full p-[13px] bg-gray-800 rounded-[10px]">
                  <div className="flex self-stretch justify-between items-start mt-[5px] gap-5">
                    <div className="h-[67px] w-[67px] bg-blue_gray-100 rounded-[33px]" />
                    <div className="flex flex-col items-start gap-6">
                      <Heading as="h6" className="!text-gray-100 capitalize !font-bold">
                        Owner’s name
                      </Heading>
                      <Text size="xs" as="p">
                        99 joined / 200 max
                      </Text>
                    </div>
                  </div>
                  <Text
                    size="xs"
                    as="p"
                    className="flex self-end justify-center items-center h-[17px] mt-[-2px] mr-[51px] px-[11px] py-0.5 md:mr-0 !text-gray-100 capitalize text-center relative bg-gray-600 rounded-[3px]"
                  >
                    I’m a tag
                  </Text>
                  <Button
                    color="blue_gray_100"
                    size="sm"
                    variant="fill"
                    className="w-full mt-[25px] sm:px-5 capitalize font-bold rounded-[5px]"
                  >
                    + Join
                  </Button>
                </div>
              </div>
              <div className="flex flex-col mt-[-44px] gap-[60px] py-[13px] sm:gap-[30px] relative">
                <div className="flex md:flex-col justify-between w-full mt-[150px] gap-5 mx-auto md:p-5 max-w-7xl">
                  <Img src="images/img_1.svg" alt="oneone_one" className="h-[150px] md:w-full" />
                  <div className="flex justify-center w-[62%] md:w-full pr-7 sm:pr-5">
                    <div className="flex md:flex-col justify-between items-start w-full gap-5">
                      <div className="flex flex-col items-start w-[19%] md:w-full gap-6">
                        <div className="flex items-center gap-2">
                          <Img src="images/img_link.svg" alt="linkone_one" className="h-[24px] w-[24px]" />
                          <Heading size="lg" as="h6" className="self-start">
                            links
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start gap-6">
                          <Text as="p" className="self-center !text-white-A700_99_01 capitalize">
                            telegram bot
                          </Text>
                          <a href="#" className="ml-[26px] md:ml-0">
                            <Text as="p" className="!text-white-A700_99_01">
                              Buy $SS
                            </Text>
                          </a>
                        </div>
                      </div>
                      <div className="flex md:flex-row w-[59%] md:w-full gap-[171px]">
                        <div className="flex flex-col items-start gap-6 flex-1">
                          <div className="flex items-center gap-2">
                            <Img src="images/img_youtube.svg" alt="social_one" className="h-[24px] w-[24px]" />
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
                            <div className="flex ml-[27px] py-px md:ml-0">
                              <Text as="p" className="!text-white-A700_99_01">
                                Twitter
                              </Text>
                            </div>
                            <a href="#" className="ml-[27px] md:ml-0">
                              <Text as="p" className="!text-white-A700_99_01 capitalize">
                                Contact us
                              </Text>
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col items-start w-[26%] gap-6">
                          <div className="flex items-center gap-2">
                            <Img src="images/img_thumbs_up.svg" alt="thumbsupone_one" className="h-[24px] w-[24px]" />
                            <Heading size="lg" as="h6" className="self-start">
                              Resources
                            </Heading>
                          </div>
                          <div className="flex flex-col items-start gap-6">
                            <div className="flex ml-[27px] py-px md:ml-0">
                              <Text as="p" className="!text-white-A700_99_01">
                                Doc
                              </Text>
                            </div>
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
                </div>
                <div className="p-5 border-white-A700_0f border-t border-solid">
                  <div className="flex sm:flex-col justify-between items-center w-full gap-5 mx-auto max-w-7xl">
                    <Text as="p" className="self-end mb-[3px] !text-white-A700_99_01">
                      <span className="text-white-A700_99_01">@</span>
                      <span className="text-white-A700_99_01 capitalize">Social Signal 2023</span>
                    </Text>
                    <div className="flex gap-6 flex-wrap">
                      <a href="#">
                        <Text as="p" className="!text-white-A700_99_01 text-right">
                          Terms of Service
                        </Text>
                      </a>
                      <a href="#" className="self-end">
                        <Text as="p" className="!text-white-A700_99_01 text-right">
                          Privacy Policy
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_vector.png"
            alt="vectorone_one"
            className="self-center w-full md:h-auto mt-[1192px] mx-auto md:p-5 object-cover max-w-[1292px]"
          />
        </div>
      </div>
    </>
  );
}
