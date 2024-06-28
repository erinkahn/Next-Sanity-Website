import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "next-sanity";

type Props ={
   params: { slug: string}
}

export default async function Page({params}: Props){
   const page = await getPage(params.slug);

   return (
      <div>
         <h1 className="text-5xl drop-shadow font-extrabold animate-gradient bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{page.title}</h1>
         
         <div className="mt-5 text-lg">
            <PortableText value={page.content}/>
         </div>
      </div>
   )
}