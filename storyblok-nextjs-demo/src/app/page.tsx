import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
import { getStoryblokApi } from "@/utils/storyblok";

const fetchHomePage = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  console.log(isEnabled)
  const response = await client.getStory(`home`, {
    version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
    resolve_relations: "recommended_tours.tours",
  });
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();
  return <StoryblokStory story={story} bridgeOptions={["recommended_tours.tours"]} />;
};

export default HomePage;
