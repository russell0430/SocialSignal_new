import React from "react";
import { ReactTable } from "../../components/ReactTable";
import { Text, Heading, Img, Button } from "./..";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  { group: "name", rowcategories: "name" },
  { group: "Private Group", rowcategories: "Private Group" },
  { group: "******asda", rowcategories: "******asda" },
  { group: "1878.3", rowcategories: "1878.3" },
];
interface Props {
  className?: string;
  purchasers?: string;
  group?: string;
  categories?: string;
  purchaser?: string;
  expense?: string;
  labeloneEight?: string;
  labeloneNine?: string;
  labeloneTen?: string;
  labeloneEleven?: string;
  quizzesEight?: string;
  quizzesNine?: string;
  quizzesTen?: string;
  quizzesEleven?: string;
  password?: string;
  password1?: string;
  password2?: string;
  password3?: string;
  quizzesTwelve?: string;
  quizzes?: string;
  quizzes1?: string;
  quizzesFifteen?: string;
}

type TableRowType = { group: string; rowcategories: string };

export default function LandingpageColumnpurchaser({
  purchasers,
  group = "group",
  categories = "Categories",
  purchaser = "Purchaser",
  expense = "Expense",
  labeloneEight = "name",
  labeloneNine = "name",
  labeloneTen = "name",
  labeloneEleven = "name",
  quizzesEight = "Private Group",
  quizzesNine = "Private Group",
  quizzesTen = "Private Group",
  quizzesEleven = "Private Group",
  password = "******asda",
  password1 = "******asda",
  password2 = "******asda",
  password3 = "******asda",
  quizzesTwelve = "1878.3",
  quizzes = "1878.3",
  quizzes1 = "1878.3",
  quizzesFifteen = "1878.3",
  ...props
}: Props) {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("group", {
        cell: (info) => (
          <Img src="images/img_unsplash_fyzoy0hif9a.png" alt="unsplash" className="w-[40px] object-cover rounded-lg" />
        ),
        header: (info) => (
          <Button className="h-[32px] px-2 text-white-A700 tracking-[0.15px] capitalize text-xs font-semibold bg-white-A700_14_01 min-w-[53px] rounded-lg">
            {group}
          </Button>
        ),
        meta: { width: "53px" },
      }),
      tableColumnHelper.accessor("rowcategories", {
        cell: (info) => (
          <Heading as="h2" className="tracking-[0.32px] capitalize">
            {labeloneEight}
          </Heading>
        ),
        header: (info) => (
          <div className="flex">
            <Button className="h-[32px] px-2 text-white-A700 tracking-[0.15px] capitalize text-xs font-semibold bg-white-A700_14_01 min-w-[82px] rounded-lg">
              {categories}
            </Button>
            <Button className="h-[32px] px-2 text-white-A700 tracking-[0.15px] capitalize text-xs font-semibold bg-white-A700_14_01 min-w-[77px] rounded-lg">
              {purchaser}
            </Button>
            <Button className="h-[32px] px-2 text-white-A700 tracking-[0.15px] capitalize text-xs font-semibold bg-white-A700_14_01 min-w-[67px] rounded-lg">
              {expense}
            </Button>
          </div>
        ),
        meta: { width: "663px" },
      }),
    ];
  }, []);

  return (
    <div {...props}>
      <div className="flex self-stretch pb-1.5">
        <div className="flex">
          <Heading size="3xl" as="h1" className="!text-gray-100 capitalize">
            <span className="text-gray-100">P</span>
            <span className="text-gray-100 lowercase">URCHASERS</span>
          </Heading>
        </div>
      </div>
      <div className="self-stretch p-10 sm:p-5 rounded-br-[30px] border border-solid black_900_1a_01_purple_A200_00_border bg-black-900_33_01">
        <ReactTable
          bodyProps={{ className: "" }}
          headerProps={{ className: "md:flex-col" }}
          rowDataProps={{ className: "" }}
          columns={tableColumns}
          data={tableData}
        />
      </div>
    </div>
  );
}
