import { getProject } from "@/sanity/sanity-utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
   params: { 
      project: string;
   }
}

export default async function Project({params}: Props) {
   const slug = params.project;
   const project = await getProject(slug);
   
   return (
      <div>
         <header className="flex justify-between">
            <h1 className="text-5xl drop-shadow font-extrabold animate-gradient bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</h1>
            <Link className="bg-gray-100 rounded-lg text-gray-500 py-3 px-4 whitespace-nowrap font-extrabold hover:bg-pink-500 hover:text-pink-100 transition" href={project.url} title="View Project" target="_blank" rel="noopener noreferrer">View Project</Link>
         </header>

         <div className="mt-5 text-lg">
            <PortableText value={project.content}/>
         </div>

         <Image src={project.image} alt={project.name} width={1200} height={600} className="border border-gray-200 drop-shadow mt-10 object-cover rounded-xl"/>
      </div>
   )
}