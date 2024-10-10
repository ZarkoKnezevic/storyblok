import { StoryblokComponent } from "@storyblok/react/rsc";

export const Page = (props: any) => {
  console.log(props.blok.blocks[0])
  return (
    <main>
      {props.blok.blocks.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}