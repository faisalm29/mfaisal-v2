import Image from "next/image";
import motionImg from "../../../public/motion-logo.png";

const Motion = () => {
  return (
    <div className="flex flex-col">
      <Image
        src={motionImg}
        alt="content-collections"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        className="grayscale"
      />
    </div>
  );
};

export { Motion };
