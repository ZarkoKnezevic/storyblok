import {
  StoryblokClient,
  apiPlugin,
  getStoryblokApi as getStoryblokApiDefault,
  storyblokInit,
} from "@storyblok/react/rsc";

let storyblokApi: StoryblokClient | undefined = undefined;

export const AppStoryblokInit = (options?: {
  components?: Record<string, any>;
  enableFallbackComponent?: boolean;
}) => {
  if (!storyblokApi) {
    storyblokInit({
      accessToken: process.env.STORYBLOK_TOKEN,
      use: [apiPlugin],
      components: options?.components || {},
      enableFallbackComponent: options?.enableFallbackComponent || false,
    });

    storyblokApi = getStoryblokApiDefault();
  }

  return storyblokApi;
};

export const getStoryblokApi = (): StoryblokClient => {
  return AppStoryblokInit();
};
