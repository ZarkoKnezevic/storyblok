import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

export const Page = (props: any) => {
  return (
    <main {...storyblokEditable(props.blok)}>
      {props.blok.blocks.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}