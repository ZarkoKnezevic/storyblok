import Link from "next/link";
export const RecommendedTour = (props: any) => {
  return (
    <div className="bg-white rounded-md shadow">
      <img
        className="w-full aspect-video object-cover"
        src={props.story.content.main_image.filename}
        alt=""
      />
      <div className="p-8">
        <div className="flex justify-between gap-4 text-lg font-bold">
          <h3>{props.story.content.name}</h3>
          <p>
            {Number(props.story.content.price).toLocaleString("en-US", {
              style: "currency",
              currency: "TWD",
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-700 font-bold tracking-wide uppercase">{props.story.content.location}, Taiwan</p>
        <Link className="block mt-6 text-base text-blue-700 font-bold underline" href={`/${props.story.full_slug}`}>View Tour</Link>
      </div>
    </div>
  )
};