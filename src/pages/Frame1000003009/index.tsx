import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";

export default function Frame1000003009Page() {
  return (
    <>
      <Helmet>
        <title>Social signal</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full p-8 sm:p-5">
        <div className="w-full gap-8 grid-cols-[repeat(auto-fill,_minmax(416px_,_1fr))] mx-auto grid max-w-[976px]">
          <div className="flex flex-col items-start justify-center w-full gap-[25px] p-7 sm:p-5 bg-gray-900 rounded-[34px]">
            <Heading size="3xl" as="h1" className="mt-[3px] ml-[92px] md:ml-0 tracking-[-0.26px]">
              SS Token
            </Heading>
            <div className="flex flex-col items-start justify-center ml-[92px] gap-[5px] md:ml-0">
              <Text size="6xl" as="p" className="mt-[3px] tracking-[0.48px] !font-geomgraphic">
                0.0
              </Text>
              <Text size="xl" as="p" className="tracking-[0.22px] !font-geomgraphic">
                ≈$0.0
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full gap-[25px] p-7 sm:p-5 bg-gray-900 rounded-[34px]">
            <Heading size="3xl" as="h2" className="mt-[3px] ml-[92px] md:ml-0 tracking-[-0.26px]">
              KSFT Token
            </Heading>
            <div className="flex flex-col items-start justify-center ml-[92px] gap-[5px] md:ml-0">
              <Text size="6xl" as="p" className="mt-[3px] tracking-[0.48px] !font-geomgraphic">
                0.0
              </Text>
              <Text size="xl" as="p" className="tracking-[0.22px] !font-geomgraphic">
                ≈$0.0
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full gap-[25px] p-7 sm:p-5 bg-gray-900 rounded-[34px]">
            <Heading size="3xl" as="h2" className="self-center mt-[3px] tracking-[-0.26px]">
              Staked KSFT-KSFT
            </Heading>
            <div className="flex ml-[92px] md:ml-0">
              <Text size="6xl" as="p" className="tracking-[0.48px] !font-geomgraphic">
                $4.550
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full gap-[26px] p-7 sm:p-5 bg-gray-900 rounded-[34px]">
            <Heading size="3xl" as="h2" className="mt-0.5 ml-[92px] md:ml-0 tracking-[-0.26px]">
              KSFT Market Price
            </Heading>
            <div className="flex ml-[92px] md:ml-0">
              <Text size="6xl" as="p" className="tracking-[0.48px] !font-geomgraphic">
                $2.175
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start w-full p-7 sm:p-5 bg-gray-900 rounded-[34px]">
            <div className="flex flex-col items-start mt-[5px] ml-[92px] gap-[23px] md:ml-0">
              <Heading size="3xl" as="h2" className="tracking-[-0.26px]">
                KSFT Circulate Market Cap
              </Heading>
              <div className="flex">
                <Text size="6xl" as="p" className="self-end tracking-[0.48px] !font-geomgraphic">
                  $ 4,984,675.722
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full p-7 sm:p-5 bg-gray-900 rounded-[34px]">
            <div className="flex flex-col items-start w-[44%] md:w-full mt-[5px] ml-[92px] gap-[23px] md:ml-0">
              <Heading size="3xl" as="h2" className="tracking-[-0.26px]">
                KSFT Circulate Supply
              </Heading>
              <div className="flex">
                <Text size="6xl" as="p" className="mt-1.5 tracking-[0.48px] !font-geomgraphic">
                  2,060,428.925
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
