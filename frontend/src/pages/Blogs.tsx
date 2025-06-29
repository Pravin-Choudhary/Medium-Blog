import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div>
              <Appbar />
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3">
                <div className="flex justify-center lg:justify-end w-full p-2 mt-2 border col-span-1 lg:col-span-2">
                  <div className="p-4 flex flex-col justify-center max-w-2xl m-2 border">

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
             <div className="border lg:col-span-1 mt-2 invisible lg:visible">
                Staff Pick
            </div>
        </div>
</div>
   
}