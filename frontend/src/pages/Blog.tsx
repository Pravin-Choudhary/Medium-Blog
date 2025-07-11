import {  RecoilRoot, useRecoilValueLoadable } from "recoil";
import { blogAtomFamily } from "../recoil/atomsSelectors";
import { useParams } from "react-router-dom";
import { Alert } from "../components/Alert";
import { BlogDeatils } from "../components/BlogDeatils";
import { Appbar } from "../components/Appbar";
import { BlogDetailSkeleton } from "../components/BlogDetailSkeleton";




export const Blog = () => {
 return <RecoilRoot>
    <BlogContent/>
 </RecoilRoot>
};

function BlogContent() {
   const {id} = useParams<{id : string}>(); 

    const blogLoadable = useRecoilValueLoadable(blogAtomFamily(id!));
    
    return  <div className="space-y-8 md:space-y-12 lg:space-y-20">
                 <Appbar blogType="update" id={id} authorId={blogLoadable.contents.authorID}/>

                { blogLoadable.state == "loading" ? (<div>
                    <BlogDetailSkeleton/>
                </div>) : ( blogLoadable.state == "hasError" ? (<div>
                    <Alert errorText="Unable to get blog Data"/>
                </div>) : (
                    <BlogDeatils authorName={blogLoadable.contents.author.name} userDp={blogLoadable.contents.author.userDp} title={blogLoadable.contents.title} content={blogLoadable.contents.content}/>
                ) )}

    </div>
}
