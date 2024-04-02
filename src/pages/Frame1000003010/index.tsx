import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";

export default function Frame1000003010Page() {
  return (
    <>
      <Helmet>
        <title>Social signal</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full gap-8 grid-cols-[repeat(auto-fill,_minmax(204px_,_1fr))] p-8 sm:p-5 grid">
        <div className="flex flex-col items-start justify-center w-full gap-3 p-[18px] bg-gray-900 rounded-[34px]">
          <Heading size="3xl" as="h1" className="mt-[13px] ml-[42px] md:ml-0 tracking-[-0.26px]">
            SS Token
          </Heading>
          <div className="flex flex-col self-end items-start justify-center mb-2.5 gap-[5px]">
            <Text size="6xl" as="p" className="mt-[3px] tracking-[0.48px] !font-geomgraphic">
              0.0
            </Text>
            <Text size="xl" as="p" className="tracking-[0.22px] !font-geomgraphic">
              ≈$0.0
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-3 p-[26px] sm:p-5 bg-gray-900 rounded-[34px]">
          <Heading size="3xl" as="h2" className="mt-[5px] tracking-[-0.26px]">
            Staked KSFT-KSFT
          </Heading>
          <div className="flex pr-[5px] py-[5px]">
            <Text size="6xl" as="p" className="mb-5 tracking-[0.48px] !font-geomgraphic">
              $4.550
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start w-full gap-[23px] p-7 sm:p-5 bg-gray-900 rounded-[34px]">
          <Heading size="3xl" as="h2" className="mt-[5px] ml-8 md:ml-0 tracking-[-0.26px]">
            KSFT Circulate Market Cap
          </Heading>
          <div className="flex self-center">
            <Text size="6xl" as="p" className="self-end tracking-[0.48px] !font-geomgraphic">
              $ 4,984,675.722
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center w-full gap-3 p-[18px] bg-gray-900 rounded-[34px]">
          <Heading size="3xl" as="h2" className="mt-[13px] mr-[26px] md:mr-0 tracking-[-0.26px]">
            KSFT Token
          </Heading>
          <div className="flex flex-col items-start justify-center mb-2.5 gap-[5px]">
            <Text size="6xl" as="p" className="mt-[3px] tracking-[0.48px] !font-geomgraphic">
              0.0
            </Text>
            <Text size="xl" as="p" className="tracking-[0.22px] !font-geomgraphic">
              ≈$0.0
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-[13px] p-[26px] sm:p-5 bg-gray-900 rounded-[34px]">
          <Heading size="3xl" as="h2" className="mt-1 tracking-[-0.26px]">
            KSFT Market Price
          </Heading>
          <div className="flex pr-[5px] py-[5px]">
            <Text size="6xl" as="p" className="mb-[21px] tracking-[0.48px] !font-geomgraphic">
              $2.175
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start w-full gap-[23px] p-7 sm:p-5 bg-gray-900 rounded-[34px]">
          <Heading size="3xl" as="h2" className="mt-[5px] ml-8 md:ml-0 tracking-[-0.26px]">
            KSFT Circulate Supply
          </Heading>
          <div className="flex ml-8 md:ml-0">
            <Text size="6xl" as="p" className="mt-1.5 tracking-[0.48px] !font-geomgraphic">
              2,060,428.925
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
