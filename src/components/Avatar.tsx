import Image from "next/image";

const Avatar = () => {
  return (
    <div>
      <div className="size-16 rounded-full">
        <Image
          src="https://github.com/faisalm29.png"
          alt="Picture of the authro"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export { Avatar };
