import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-6xl font-bold mb-0">Welcome to <span className="animate-gradient-spin bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">my website</span>!</h1>
      <p className="mt-5 text-lg">Here is a test project for learning sanity!</p>
      
      <h2 className="mt-24 font-bold text-3xl">My projects:</h2>
      
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} className="p-1 border border-gray-500 rounded-lg hover:scale-105 hover:border-blue-500 transition-all">  
            <h3 className="mb-3 ml-3 mt-3 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</h3>
            
            {project.image && (
              <Image 
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg "
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
