import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// get all projects
export async function getProjects(): Promise<Project[]> { // returns a promise that resolves to an array of projects
   return createClient(clientConfig).fetch(
      groq`*[_type == "project"]{ // get all projects
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         url,
         content
      }`
   )
}

// get a single project
export async function getProject(slug: string): Promise<Project> { // returns a promise that resolves to a single project
   return createClient(clientConfig).fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{ // get the first project [0]
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         url,
         content
      }`,
      { slug } // pass in the slug
   )
}

