import React from "react";
import profile from "../../assets/images/profile.jpg";
import {
  FlagIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserCog2Icon,
} from "lucide-react";

const VendorProfile = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen  w-full  px-6">
        <div className=" flex flex-col">
          <div className=" w-full max-w-lg relative ">
            <div className="h-24 bg-gradient-to-r from-green-300 to-green-700"></div>
            {/* profile picture */}
            <div className="  absolute top-12 left-4">
              <img
                src={profile}
                alt=""
                className="w-20 h-20 rounded-full border-4 border-green-900"
              />
            </div>
            {/* edit profile */}
            <div className="p-2 flex justify-end">
              <button className="px-4 py-1 bg-green-500 text-white text-sm rounded flex items-center">
                Edit Profile
              </button>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-semibold">User Name</h4>
                <p className="flex items-center text-black">
                  <FlagIcon className="w-5 h-5 mr-2 text-black" />
                  |Oyarifa,Greater Accra(GA),GM 125-678,GHANA
                </p>
              </div>
              <p className="leading-tight">
                Age:45 | Gender: Female | Status:
                <span className="text-green-700"> Active *</span>
              </p>
              <p className="flex items-center text-gray-700">
                <UserCog2Icon className="w-5 h-5 mr-2 text-gray-500" />
                <span className="font-medium mr-45">Role:</span>Vendor
              </p>
              <p className="flex items-center text-gray-700">
                <MailIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className="font-medium mr-42"> Email:</span>
                afuaduma@gmail.com
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full border-t border-gray-300 mt-6 mb-10" />
        <div className="flex  bg-gray-100">
          <div className="w-full bg-white shadow-md rounded-md p-6 border ">
            <h2 class="text-lg font-semibold mb-4">Your Activities</h2>
            <div>
              <div class="flex justify-between text-gray-700">
                <p>
                  You posted an add on shirts
                  <span class="italic">'Dress Shirts'</span>
                </p>
                <span class="text-sm text-gray-500 text-right">
                  19/02/2025 <br /> 10:40:55 AM
                </span>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>
                  You edited your profile
                  <span class="italic">'Changed your email'</span>
                </p>
                <span class="text-sm text-gray-500 text-right">
                  19/02/2025 <br /> 07:40:55 PM
                </span>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>
                  You deleted one advert
                  <span class="italic">'Deleted the shirt advert'</span>
                </p>
                <span class="text-sm text-gray-500 text-right">
                  19/02/2025 <br /> 12:40:55 AM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorProfile;
