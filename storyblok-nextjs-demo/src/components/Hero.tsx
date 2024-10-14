import { storyblokEditable } from "@storyblok/react/rsc";

export const Hero = (props: any) => {
  return (
    <section {...storyblokEditable(props.blok)} className="container w-full mx-auto px-4 pt-32 pb-16">
      <h1 className="text-5xl md:text-7xl font-bold text-center">{props.blok.headline}</h1>
      <p className="mt-8 text-xl text-center">{props.blok.content}</p>
    </section>
  );
};