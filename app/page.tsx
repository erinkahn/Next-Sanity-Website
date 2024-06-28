import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Welcome to my website</h1>
      <p>projects:</p>
      
      {projects.map((project) => (
        <div key={project._id} className="flex flex-col items-center">  
          <h2 className="text-4xl font-bold">{project.name}</h2>
          <img src={project.image} alt={project.name} className="w-1/2" />
          <p>{project.content.toString()}</p>
        </div>
      ))}
    </main>
  );
}
