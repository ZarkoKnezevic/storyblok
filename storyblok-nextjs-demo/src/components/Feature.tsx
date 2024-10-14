import { storyblokEditable } from "@storyblok/react/rsc";

export const Feature = (props: any) => {
  return (
    <div
      {...storyblokEditable(props.blok)}
      className="p-8 rounded-md bg-white shadow"
    >
      <h3 className="text-3xl font-bold">{props.blok.headline}</h3>
      <p className="mt-6 text-lg">{props.blok.content}</p>
    </div>
  )
};