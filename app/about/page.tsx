import OurTeamSection from "@/components/OurTeamSection";
import Image from "next/image";
import React from "react";
import pokheraImage from "../../assets/pokhera.jpg";

export default function Page() {
  return (
    <div className="px-4 md:px-8">
      <h1>What Is Nomad?</h1>
      <div className="w-full h-80 rounded-2xl overflow-hidden">
        <Image
          src={pokheraImage}
          alt="pokheraImage"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-end">
        <p className="max-w-xl">
          Nomad is a travel startup providing travel programs and group work for
          digital nomads. Traveling solo can be daunting, so why not work
          remotely and explore the world with other like-minded members. Bring
          your self and your work. We'll take care of everything else.
        </p>
      </div>
      <div>
        What to expect after <br /> booking...
      </div>
      <div className="py-10">
        <div className="grid grid-cols-2">
          <div></div>
          <AboutCard />
        </div>
        <div className="grid grid-cols-2">
          <AboutCard />
          <div></div>
        </div>

        <div className="grid grid-cols-2">
          <div></div>
          <AboutCard />
        </div>
        <div className="grid grid-cols-2">
          <AboutCard />
          <div></div>
        </div>
        <div className="grid grid-cols-2">
          <div></div>
          <AboutCard />
        </div>
        <div className="grid grid-cols-2">
          <AboutCard />
          <div></div>
        </div>
      </div>

      <OurTeamSection />
    </div>
  );
}

const AboutCard = () => {
  return (
    <div className="p-4 rounded-2xl bg-gray-300 w-fit shadow-sm">
      <h1>Co-working Space</h1>
      <h2>Work remotely in your designated workspace.</h2>
      <div className="h-60 w-80">
        <Image
          src={pokheraImage}
          alt="pokhara image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
