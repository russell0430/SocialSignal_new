import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Landingpage from "pages/Landingpage";
import LandingpageOne from "pages/LandingpageOne";
import LandingpageTwo from "pages/LandingpageTwo";
import Bg from "pages/Bg";
import Group from "pages/Group";
import Navigation from "pages/Navigation";
import Frame1000003010 from "pages/Frame1000003010";
import Frame1000003009 from "pages/Frame1000003009";
import GroupOne from "pages/GroupOne";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "landingpage",
      element: <Landingpage />,
    },
    {
      path: "landingpageone",
      element: <LandingpageOne />,
    },
    {
      path: "landingpagetwo",
      element: <LandingpageTwo />,
    },
    {
      path: "bg",
      element: <Bg />,
    },
    {
      path: "group",
      element: <Group />,
    },
    {
      path: "navigation",
      element: <Navigation />,
    },
    {
      path: "frame1000003010",
      element: <Frame1000003010 />,
    },
    {
      path: "frame1000003009",
      element: <Frame1000003009 />,
    },
    {
      path: "groupone",
      element: <GroupOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
