"use client";
import type { PropsWithChildren } from "react";
import { AppStoryblokInit } from "@/utils/storyblok"; // Use custom initialization function
import { Tour } from "./Tour";
import { Page } from "./Page";
import { Hero } from "./Hero";
import { Grid } from "./Grid";
import { Feature } from "./Feature";
import { Testimonial } from "./Testimonial";
import { RecommendedTours } from "./RecommendedTours";

AppStoryblokInit({
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
