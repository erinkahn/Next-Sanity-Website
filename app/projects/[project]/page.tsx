import { getProject } from "@/sanity/sanity-utils";

type Props = {
   params: { 
      project: string;
   }
}

export default async function Project({params}: Props) {
   const slug = params.project;
   const project = await getProject(slug);

   // console.log(slug, project)
   
   return (
      <div>
         <h1>Project: <b>{project.name}</b></h1>
         {/* <p>{project.content.}</p> */}
      
      </div>
   )
}