import { footerLinks } from "../Links";

const Footer = () => {
  return (
    <section className="flex justify-center items-center px-4 sm:py-16 py-6 flex-col  bg-black gap-10">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full   border-t-4 border-[#9A7BFF] pt-10">
        <div className=" w-full flex flex-row justify-between md:justify-around flex-wrap md:mt-0 mt-10 max-w-[1766px]">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[48px] leading-[45px] text-[#9A7BFF]">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-8">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-[20px] leading-[24px] text-white cursor-pointer mb-4 "
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-poppins font-normal text-white text-[19px] leading-[15px] sm:mb-0 mb-4">
          Backed by
        </p>
        <div className="flex justify-center ">
          <img
            src="src/assets/Logo.png"
            alt="hoobank"
            className="w-[250px] h-[72px] mb-2 object-contain"
          />
        </div>

        <p className="font-poppins font-normal text-white text-[22.27px] leading-[25.5px]  text-center">
          Mentor Academy for Design Entreprenuership Innovation and Technology
        </p>
      </div>
    </section>
  );
};

export default Footer;
