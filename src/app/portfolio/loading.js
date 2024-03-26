import Lines from "@/components/Common/Lines";
import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import LoadingScreen from "@/components/Common/loader";
import React from "react";

export default function Loading() {
  return (
    <div>
      <Lines />
      <LoadingScreen />
      <ProgressScroll />
    </div>
  );
}
