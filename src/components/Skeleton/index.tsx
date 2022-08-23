import { ButtonSkeleton, DescriptionSkeleton, ImageSkeleton, SkeletonContainer, TitleSkeleton } from "./styles";

export function Skeleton() {
  return (
    <SkeletonContainer>
      <ImageSkeleton />
      <TitleSkeleton />
      <TitleSkeleton />
      <DescriptionSkeleton />
      <ButtonSkeleton />
    </SkeletonContainer>
  )
}