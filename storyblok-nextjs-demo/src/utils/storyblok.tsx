import { storyblokInit, apiPlugin, StoryblokClient, getStoryblokApi as getStoryblokApiDefault } from "@storyblok/react/rsc";

let storyblokApi: StoryblokClient | undefined = undefined;

export const AppStoryblokInit = (options?: {
  components?: Record<string, any>;
  enableFallbackComponent?: boolean;
}) => {
  if (!storyblokApi) {
    storyblokInit({
      accessToken: process.env.STORYBLOK_TOKEN as string, // Ensure token is passed correctly
      use: [apiPlugin],
      components: options?.components || {},
      apiOptions: {
        fetch: (input: any, init?: any): Promise<Response> => {
          const cacheVersion = Date.now(); // Generate the cache version dynamically

          const url = new URL(input);
          url.searchParams.set("cv", cacheVersion.toString()); // Set the cache version

          return fetch(url.toString(), {
            ...init,
            cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
          });
        },
      },
    });

    storyblokApi = getStoryblokApiDefault(); // Initialize Storyblok API client
  }

  return storyblokApi;
};

// Function to get the Storyblok API client
export const getStoryblokApi = (): StoryblokClient => {
  return AppStoryblokInit(); // Initialize before getting the API client
};