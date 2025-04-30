import Image from "next/image";
import profilePic from "@/public/me.png";

function HeroImage() {
  return (
    <div className="img-holder relative mx-auto flex h-[500px] w-[500px] max-w-full justify-center lg:mx-0 lg:ml-auto">
      <div className="img-parent absolute bottom-4 -z-20 flex h-[800px] w-[350px] max-w-full items-end justify-center overflow-hidden rounded-full">
        <Image
          src={profilePic}
          priority
          alt="profile"
          className="hero-img relative -mb-18 h-[500px] w-[500px] max-w-full -translate-y-16 object-cover object-center"
        />
      </div>
      <div className="absolute bottom-4 -z-21 aspect-square w-[350px] max-w-full rounded-full outline-8 outline-green-400"></div>
    </div>
  );
}

export default HeroImage;
