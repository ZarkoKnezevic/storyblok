import { StoryblokComponent } from "@storyblok/react/rsc";

export const Page = (props: any) => {
  return (
    <main>
      {props.blok.blocks.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}