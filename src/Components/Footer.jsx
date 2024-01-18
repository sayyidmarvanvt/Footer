import { footerLinks, socialMedia } from "../Links";

const Footer = () => {
  return (
    <section
    className={`flex justify-center items-center px-4 sm:py-16 py-6 flex-col bg-primary`}
  >
    <div
      className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}
    >
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src="./src/assets/rowgrid2blc.png"
          alt="hoobank"
          className="w-[250px] h-[72px] mb-2 object-contain"
        />
        <p
          className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px]`}
        >

          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4 last:mb-0`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center  flex-col pt-5 m-2 border-t-[1px] border-t-[#3F3E45]">
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social) => (
         <a href={social.link} className="mx-3">
          <img
            src={social.icon}
            alt={social.id}
            key={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6 last:mr-0`}
          />
         </a> 
        ))}
      </div>
      <p className="font-poppins pt-2 font-normal text-center text-[18px] leading-[27px] text-white">
        2021 RowGrid. All Rights Reserved.
      </p>
    </div>
  </section>
  )
}

export default Footer