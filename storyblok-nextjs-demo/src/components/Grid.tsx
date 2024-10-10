import { StoryblokComponent } from "@storyblok/react/rsc";

export const Grid = (props: any) => {
  return (
    <section>
      <h1>{props.blok.headline}</h1>
      {props.blok.items.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </section>
  )
}