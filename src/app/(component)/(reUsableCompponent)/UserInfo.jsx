import React from "react";
import Image from "next/image";

const UserInfo = ({ imageSrc, altText, name, age, gender, serial }) => {
  return (
    <div className="flex justify-between md:justify-start md:text-start ml-1 md:ml-3 items-center gap-2  text-white  text-xs md:text-base">
      <div className="rounded-full overflow-hidden">
        <Image
          width={50}
          height={50}
          className="min-h-[50px] min-w-[50px] rounded-full"
          src={imageSrc}
          alt={altText}
        />
      </div>
      <div>
        <div>
          {name} ({`${serial}`})
        </div>
        <div>
          {`${gender}`} - {`${age}y`}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
