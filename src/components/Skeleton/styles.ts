import styled, { keyframes } from "styled-components";

export const skeletonAnimetion = keyframes`
   0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  flex: 1;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background-color: ${({ theme }) => theme.white};
  padding: 1.125rem 0.875rem 0;

  @media(max-width: 576px) {
    width: 15.6562rem;
    padding: 1rem 1rem 0;
  }
`

export const ImageSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  
  height: 6.9375rem;
  width: 6.9375rem;
  margin-bottom: 0.875rem;

  animation: ${skeletonAnimetion} 1.25s linear infinite;
  background: linear-gradient(to right, #eeeeee 10%, #F9F9F9 18%, #eeeeee 33%);
  background-size: 400% 400%;

`

export const TitleSkeleton = styled(ImageSkeleton)`
  display: flex;
  width: 80%;
  height: 0.875rem;
  margin-bottom: 0.25rem;
  /* margin-top: 0.1rem; */
`

export const DescriptionSkeleton = styled(ImageSkeleton)`
  display: flex;
  width: 100%;
  height: 1rem;
  margin-top: 0.875rem;
  margin-bottom: 3rem;
`

export const ButtonSkeleton = styled(ImageSkeleton)`
  display: flex;
  border-radius: 0 0 0.5rem 0.5rem;
  margin-top: 0.75rem;
  margin-bottom: 0;

  width: 100%;
  height: 1.9943rem;
  border: 0;

  position: absolute;
  bottom: 0;
`