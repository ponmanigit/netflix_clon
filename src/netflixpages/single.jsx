import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useAuth } from "../context/netflixcontext";

export const Single = () => {
  const { path } = useAuth();
  console.log(path);

  return (
    <>
      <div className="h-fit w-full">
        <YouTube
          videoId={`${path}`}
          opts={{
            width: 1078,
            height: 500,
            playerVars: { autoplay: 1, controls: 0 },
          }}
        />
      </div>
    </>
  );
};
export default Single;
