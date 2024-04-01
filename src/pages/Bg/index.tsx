import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../components";

export default function BgPage() {
  return (
    <>
      <Helmet>
        <title>Social signal</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full opacity-0.6 rotate-[90deg] bg-gradient1">
        <Img src="images/img_group.png" alt="image_one" className="h-[590px] w-full md:h-auto object-cover" />
      </div>
    </>
  );
}
