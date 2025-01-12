import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import contract from "../../assets/images/contract-img.png";
import LiveChat from "../../assets/images/LiveChat.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Contatti() {
  return (
    <>
      <div className="px-10 pb-14">
        <h1 className="pb-24 mx-auto text-5xl font-bold text-center pt-14">
          Write to Us to <br /> Say Hello or For Information!
        </h1>

        <div className="flex gap-12 pb-10">
          <div className="w-[50%]">
            <h2 className="mb-4 text-xl font-bold">Your Message</h2>
            <form className="space-y-4">
              {/* Name and Email Row */}
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-1/2 p-3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#FAF5E6]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-1/2 p-3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#FAF5E6]"
                />
              </div>

              {/* Phone Input */}
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="w-full p-3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#FAF5E6]"
              />

              {/* Message Textarea */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#FAF5E6]"
              ></textarea>

              {/* Submit Button */}
              <button className="text-center gap-4 bg-[#A81A18] py-2.5 px-7 rounded-xl text-white">
                <span className="pr-2 uppercase">Submit</span>
                <span>
                  <ArrowForwardIcon />
                </span>
              </button>
            </form>
          </div>

          <div className="flex w-[45%] bg-[#FAF5E6] justify-between p-3 rounded-md border mt-[43px] h-[256px] shadow-sm">
            <div className="p-4 ">
              <span>Toll Free Call</span>
              <p className="text-[#A81A18] text-2xl font-semibold pt-1.5 pb-4">
                +321 4567 456
              </p>
              <span>Mail Us</span>
              <p className="text-[#A81A18] text-2xl font-semibold pt-1.5 pb-4">
                hello@wortess.com
              </p>
              <button className="text-center gap-4 bg-[#C0C6C6]/40 shadow-md py-2.5 px-5 rounded-xl font-bold">
                <span>
                  <ArrowForwardIcon />
                </span>
                <span className="pl-2 uppercase">Start Shopping</span>
              </button>
            </div>
            <div>
              <img className="w-48" src={contract} alt="contract" />
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-8 border-t-2 border-dashed">
          <div className="flex gap-7 ">
            <div className="relative border-[4px] border-gray-100 rounded-full">
              <img
                className="w-10 rounded-full"
                src={LiveChat}
                alt="LiveChat"
              />
              <span className="absolute bottom-0 right-0 bg-[#2CF040] rounded-full w-2.5 h-2.5 block"></span>
            </div>
            <span className="block w-[2px] h-10 mt-1.5 bg-gray-200"></span>
            <div>
              <p className="font-semibold">Live Chat</p>
              <span className="mr-1.5">Text us now</span>
              <ArrowForwardIcon />
            </div>
          </div>
          <div>
            <ul className="flex gap-7">
              <li>
                <span className="text-[#1877F2]">
                  <FacebookIcon />
                </span>
                <span className="ml-2">Facebook</span>
              </li>
              <li>
                <TwitterIcon className="text-[#1DA1F2]" />
                <span className="ml-2 ">Twitter</span>
              </li>
              <li>
                <LinkedInIcon className="text-[#0072B1]" />
                <span className="ml-2 ">Linkedin</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contatti;
