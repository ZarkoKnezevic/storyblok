import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { RecommendedTour } from "@/components/RecommendedTour";
import { draftMode } from "next/headers";

const fetchToursPage = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: process.env.NODE_ENV === "development" || isEnabled
      ? "draft"
      : "published",
  });
  return response.data.story;
};

const fetchAllTours = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" || isEnabled
      ? "draft"
      : "published",
  });
  return response.data.stories;
};

const ToursPage =  async ()=> {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  return (
    <div>
      <StoryblokStory story={story} bridgeOptions={[]}/>
      <div className="container grid md:grid-cols-2 gap-8 w-full mx-auto py-16 px-4">
        {tours.map((tour: any) => (
          <RecommendedTour story={tour} key={tour.content._uid}/>
        ))}
      </div>
    </div>
  );
};

export default ToursPage;