import { StoryblokComponent } from "@storyblok/react/rsc";

export const Grid = (props: any) => {
  return (
    <section className="py-16 bg-blue-100">
      <div className="container w-full mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">{props.blok.headline}</h2>
        <div className="grid md:grid-flow-col auto-cols-fr gap-8 mt-12">
          {props.blok.items.map((blok: any) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      </div>
    </section>
  )
}