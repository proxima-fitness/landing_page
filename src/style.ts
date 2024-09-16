
const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2Centered: `font-poppins font-semibold xs:text-[48px] text-[40px] flex justify-center items-center text-white xs:leading-[76.8px] text-center md:text-left leading-[66.8px] w-full`,
    heading2End: `font-poppins font-semibold xs:text-[48px] text-[40px] flex justify-center items-end text-white xs:leading-[76.8px] leading-[66.8px] w-full`,
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading2Themes: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] text-center md:text-left md:pl-[100px] w-full",
    heading2PersonalRecords: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] md:pl-[100px] text-center md:text-left w-full",

    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexEnd: "flex justiy-center items-end",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    paddingsmX: "ml-[20px]",
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionCarousel: `flex-1 flex ${styles.flexCenter} md:w-1/2 pr-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  sectionInfoCentered: `flex-1 ${styles.flexCenter} flex-col`,
  sectionInfoEnd: `flex-1 ${styles.flexEnd} flex-col`,
};

export default styles;

