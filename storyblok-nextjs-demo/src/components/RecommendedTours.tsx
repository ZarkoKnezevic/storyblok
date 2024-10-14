import { RecommendedTour} from "./RecommendedTour";
import {storyblokEditable} from "@storyblok/react/rsc";

export const RecommendedTours = (props: any) => {
  return (
    <section
      {...storyblokEditable(props.blok)}
      className="container w-full mx-auto py-16 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">{props.blok.headline}</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-16">
        {props.blok.tours.map((tour: any) => (
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </section>
  )
};