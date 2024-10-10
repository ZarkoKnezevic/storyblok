import { RecommendedTour} from "./RecommendedTour";

export const RecommendedTours = (props: any) => {
  return (
    <section>
      <h2>{props.blok.headline}</h2>
      {props.blok.tours.map((tour: any) => (
        <RecommendedTour story={tour} key={tour.content._uid} />
      ))}
    </section>
  )
};