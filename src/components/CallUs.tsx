import { useEffect } from "react";

const CallUs = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="w-100 h-auto">
        <img
          src="/images/wong-solo.jpeg"
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default CallUs;
