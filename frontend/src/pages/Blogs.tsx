import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { CategoryTabs } from "../components/CategoryTabs"
import { useBlogs } from "../hooks"

export const Blogs = () => {
  const {blogsLoading , blogs} = useBlogs();


    return <div>
              <Appbar />
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 ">
                <div className="flex justify-center w-full p-2  col-span-1 lg:col-span-2  border-r border-r-slate-200">
                  <div className=" p-2 sm:px-2 sm:p-3 flex flex-col justify-center md:max-w-[680px] lg:max-w-[705px] w-full m-2 mt-5">

                    <CategoryTabs/>

                {blogsLoading ? ( Array(4).fill(0).map((_,index) => (
                          <BlogSkeleton key={index}/>
                        )) ) : 
                            (blogs.map((blog) => (
                            <BlogCard authorName={blog.author.name} 
                                      title={blog.title}
                                      content={blog.content}
                                      key={blog.id}
                                      userDp={blog.author.userDp}
                                      publishedDate={"23 Oct,2025"} 
                            />)
                      ))}

                </div>
            </div>
             <div className=" lg:col-span-1 mt-2 invisible lg:visible">
               
            </div>
        </div>
</div>
   
}