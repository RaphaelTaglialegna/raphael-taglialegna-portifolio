import styled from "styled-components";
import tw from "twin.macro";

const AboutContainer = styled.div`
  ${tw`
    relative
    w-full
    h-screen
    bg-white
    flex-auto
    justify-center
    lg:flex
  `};
  .divContainer {
    width: 80%;
    ${tw`
      h-full
      m-auto
      w-full
      lg:w-4/5  
      `};

.containerAbout { 
  ${tw`
      h-full
      mt-2
      mx-4
      w-full
      lg:w-1/2
      lg:mt-20
      `};
}

.containerContent {
  display: flex;
}
  }
`;

const ImageContainer = styled.img`
  ${tw`
  `};
    top: auto;
    right: 0%;
    bottom: auto;
    margin: auto;
    z-index:1;
`;  

const ParagraphAbout = styled.p`
${tw`
mt-3 
text-base
text-gray-500 
sm:mt-5 
sm:text-lg 
sm:mx-auto 
md:mt-5 
md:text-xl 
lg:mx-0`};
  
`;  

export { 
  AboutContainer,
  ImageContainer,
  ParagraphAbout,
};
