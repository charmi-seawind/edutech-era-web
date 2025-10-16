import * as React from "react";
import Container from "../components/Container";

const VideoPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
       Our Video
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md ">
            <video
              controls
              className="w-full object-cover cursor-pointer rounded-2xl transition-opacity duration-300 opacity-100"
            >
              <source
                src="https://www.edutecheraapi.virtualfilaments.com/uploads/video/1742297476251-v2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="bg-white rounded-2xl shadow-md ">
            <video controls className="w-full h-auto rounded-2xl  object-cover">
              <source
                src="https://www.edutecheraapi.virtualfilaments.com/uploads//video/1742297413105-v1.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          
        </div>
      </Container>
    </div>
  );
};

export default VideoPage;
