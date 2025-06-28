import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div className="flex justify-center">
              <div className="p-4 max-w-2xl my-2 flex flex-col justify-center">

                <BlogCard
                authorName = {"Peter Choudhary"}
                title = {"How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"}
                content = {"No need to create a fancy and modern website with hundreds of pages to make money online. -- Making money online is the dream for man"}
                publishedDate = {"Oct 3, 2025"}
                />

                 <BlogCard
                authorName = {"Peter Choudhary"}
                title = {"How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"}
                content = {"No need to create a fancy and modern website with hundreds of pages to make money online. -- Making money online is the dream for man"}
                publishedDate = {"Oct 3, 2025"}
                />

                <BlogCard
                authorName = {"Peter Choudhary"}
                title = {"How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"}
                content = {"No need to create a fancy and modern website with hundreds of pages to make money online. -- Making money online is the dream for man"}
                publishedDate = {"Oct 3, 2025"}
                />
            </div>
    </div>
   
}