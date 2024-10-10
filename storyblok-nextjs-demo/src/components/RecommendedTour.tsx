import Link from "next/link";
export const RecommendedTour = (props: any) => {
  console.log(props)
  return (
    <section>
      <Link href={`/${props.story.full_slug}`}>
          <h3>{props.story.content.name}</h3>
      </Link>
    </section>
  )
};