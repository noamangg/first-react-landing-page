import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

footerLinks;
function Footer() {
  return (
    <footer className="flex-center padding-y flex-col">
      <div className="md:flex-row flex flex-col mb-8 w-full">
        <div className="flex-1 flex flex-col justify-start mr-10 mb-8">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className="paragraph mt-4 max-w-[310px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt:10">
          {footerLinks.map((link) => (
            <div
              key={link.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-lg leading-7 text-white mb-3">
                {link.title}
              </h4>
              <ul className="flex flex-col gap-3 list-none">
                {link.links.map((minLink) => (
                  <li
                    key={minLink.name}
                    className="font-poppins font-normal text-base leading-6 text-dimWhite hover:text-secondary cursor-pointer"
                  >
                    {minLink.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-white py-4 border-t-[1px] border-t-[#3f3e45] w-full flex justify-between">
      <p>Designed By <a href="https://www.oneweekwonders.com" target="_blank" rel="noreferrer" className="font-bold underline">One Week Wonders</a>, <a href="https://dribbble.com/OWWStudio" className="underline">Dribbble</a></p>
      <p>Developed By <a href="https://www.github.com/noamangg" className="underline font-bold">Noaman Grewatiy</a></p>
      </div>
      <div className="flex flex-col w-full justify-between items-center md:flex-row  pt-4">
        <p className="font-poppins font-normal text-center text-lg leading-7 text-white mb-3">2023 HooBank. All Rights Reserved.</p>
        <div className="flex flex-row md:mt-0 mt-6 gap-6">
          {socialMedia.map((social) => (
            <img key={social.id} src={social.icon} alt={social.icon} className="w-[21px] h-[21px] object-contain cursor-pointer"/>
          ))}
        </div>  
      </div>

    </footer> 
  );
}

export default Footer;
