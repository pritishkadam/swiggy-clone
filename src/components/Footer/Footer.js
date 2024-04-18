import { companySection, contactSection, legalSection } from './footerConfig';
import github from './../../assets/img/github.svg';
import linkedIn from './../../assets/img/linkedin.svg';

const Footer = () => {
  const companyConfig = companySection();
  const contactConfig = contactSection();
  const legalConfig = legalSection();

  return (
    <div id='footer' className='max-w-full h-auto bg-black py-10'>
      <div className='w-full lg:w-8/12 flex flex-col items-center text-center lg:text-start lg:flex-row  mx-auto py-5 justify-between border-b border-white'>
        <LinkSection title={'COMPANY'} section={companyConfig} />
        <LinkSection title={'CONTACT'} section={contactConfig} />
        <LinkSection title={'LEGAL'} section={legalConfig} />
      </div>
      <div className='w-8/12 flex flex-col lg:flex-row items-center lg:items-start text-center justify-between mx-auto py-5'>
        <div id='start'>
          <a>
            <img
              src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza'
              alt='swiggy-logo'
              className='w-40 my-2  lg:my-0'
            />
          </a>
        </div>
        <div id='center'>
          <h3 className='text-white text-lg font-medium w-44 text-center my-2 lg:my-0'>
            @2023 Swiggy Clone By Pritish
          </h3>
        </div>
        <div id='end' className='flex gap-4 my-2 lg:my-0'>
          <a href='https://www.linkedin.com/in/pritish-kadam/'>
            <img src={linkedIn} alt='' className='w-8 text-white' />
          </a>
          <a href='https://github.com/pritishkadam'>
            <img src={github} alt='' className='w-10 bg-black self-center' />
          </a>
        </div>
      </div>
    </div>
  );
};

const LinkSection = (props) => {
  const { title, section } = props;
  return (
    <div className='flex flex-col mb-6 lg:self-start'>
      <h2 className='text-gray-500 text-lg font-medium mb-6'>{title}</h2>
      {section &&
        section.map((element, index) => {
          return (
            <a
              key={index}
              href={element.link}
              className='text-white text-base mb-1 break-words w-56 cursor-pointer'
            >
              {element.text}
            </a>
          );
        })}
    </div>
  );
};

export default Footer;
