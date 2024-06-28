import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

// returns a promise that resolves to an array of projects
export async function getProjects(): Promise<Project[]> {
   const client = createClient({
      projectId: '9dq0fe83',
      dataset: 'production',
      apiVersion: '2024-06-28',
   });

   return client.fetch(
      groq`*[_type == "project"]{
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

