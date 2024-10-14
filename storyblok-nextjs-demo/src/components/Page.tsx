import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react/rsc";

interface PageProps {
  blok: {
    blocks: SbBlokData[];
  };
}

export const Page = ({ blok }: PageProps) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.blocks?.map((blok: SbBlokData) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};