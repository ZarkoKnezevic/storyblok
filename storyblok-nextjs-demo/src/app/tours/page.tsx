import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import {RecommendedTour} from "@/components/RecommendedTour";

const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    resolve_relations: "recommended_tours.tours"
  });
  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
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