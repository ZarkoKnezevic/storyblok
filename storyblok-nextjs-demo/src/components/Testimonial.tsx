import {storyblokEditable} from "@storyblok/react/rsc";

export const Testimonial = (props: any) => {
  return (
    <div
      {...storyblokEditable(props.blok)}
      className="p-8 bg-white rounded-md shadow"
    >
      <p className="text-xl leading-relaxed text-gray-700">{props.blok.comment}</p>
      <p className="mt-6 text-lg font-semibold">{props.blok.name}</p>
    </div>
  )
};