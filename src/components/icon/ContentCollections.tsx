import Image from "next/image";
import contentCollectionsImg from "../../../public/content-collections-logo.png";

const ContentCollections = () => {
  return (
    <div className="flex flex-col">
      <Image
        src={contentCollectionsImg}
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

export { ContentCollections };
