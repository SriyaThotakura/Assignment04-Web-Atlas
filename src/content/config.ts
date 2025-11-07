// import { defineCollection, z } from "astro:content";
type Site = {
  NAME: string;
  EMAIL: string;
  DESCRIPTION: string;
};

type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export const collections = {};

export const SITE: Site = {
  NAME: "Sensing the Inequity",
  EMAIL: "sriyathotakura@example.com",
  DESCRIPTION: "An atlas of environmental injustice in the South Bronx.",
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Sensing the Inequity Atlas Homepage",
};
