import Image from "next/image";
import avatar1 from "@/public/images/avatar-1.webp";
import avatar2 from "@/public/images/avatar-2.webp";
import avatar3 from "@/public/images/avatar-3.webp";
import avatar4 from "@/public/images/avatar-4.webp";
import avatar5 from "@/public/images/avatar-5.webp";

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 py-32 justify-center items-center ">
      <div className="flex flex-col gap-6 justify-center items-center text-center">
        <h1 className="text-3xl font-extrabold lg:text-6xl text-center">
          Personal Storefront for My Coding Resources
        </h1>
        <p className="text-balance lg:text-lg text-gray-500">
          A tailor-made platform where I sell source code, templates, and
          learning resources directly to you—free from third-party fees and
          restrictions.
        </p>
      </div>
      <button className="bg-primary px-8 py-2 rounded-md font-semibold">
        Browse Project
      </button>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex">
          <div className="-ml-4 bg-white p-1 border border-gray-200 rounded-full">
            <Image
              className="rounded-full"
              width={50}
              loading="lazy"
              src={avatar1}
              alt="avatar1"
            />
          </div>
          <div className="-ml-4 bg-white  p-1 border border-gray-200 rounded-full">
            <Image
              className="rounded-full"
              width={50}
              loading="lazy"
              src={avatar2}
              alt="avatar1"
            />
          </div>
          <div className="-ml-4 bg-white  p-1 border border-gray-200 rounded-full">
            <Image
              className="rounded-full"
              width={50}
              loading="lazy"
              src={avatar3}
              alt="avatar1"
            />
          </div>
          <div className="-ml-4 bg-white  p-1 border border-gray-200 rounded-full">
            <Image
              className="rounded-full"
              width={50}
              loading="lazy"
              src={avatar4}
              alt="avatar1"
            />
          </div>
          <div className="-ml-4 bg-white  p-1 border border-gray-200 rounded-full">
            <Image
              className="rounded-full"
              width={50}
              loading="lazy"
              src={avatar5}
              alt="avatar1"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex gap-1">
            <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <g transform="translate(0 -1028.4)">
              <path
                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                fill="#f39c12"
              />
              <path
                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                fill="#f1c40f"
              />
            </g>
          </svg>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <g transform="translate(0 -1028.4)">
              <path
                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                fill="#f39c12"
              />
              <path
                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                fill="#f1c40f"
              />
            </g>
          </svg>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <g transform="translate(0 -1028.4)">
              <path
                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                fill="#f39c12"
              />
              <path
                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                fill="#f1c40f"
              />
            </g>
          </svg>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <g transform="translate(0 -1028.4)">
              <path
                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                fill="#f39c12"
              />
              <path
                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                fill="#f1c40f"
              />
            </g>
          </svg>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <g transform="translate(0 -1028.4)">
              <path
                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                fill="#f39c12"
              />
              <path
                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                fill="#f1c40f"
              />
            </g>
          </svg>
          <p>5.0</p>
        </div>
        <p>from reviews <span>+ 100</span></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
