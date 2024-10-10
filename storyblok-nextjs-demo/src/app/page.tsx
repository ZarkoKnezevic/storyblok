import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    version: "draft"
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
