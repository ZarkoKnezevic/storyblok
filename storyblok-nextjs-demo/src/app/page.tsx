import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    resolve_relations: "recommended_tours.tours"
  });
  return response.data.story;
};

const HomePage =  async ()=> {
  const story = await fetchHomePage();
  return (
    <StoryblokStory story={story} bridgeOptions={[]}/>
  );
};

export default HomePage;
