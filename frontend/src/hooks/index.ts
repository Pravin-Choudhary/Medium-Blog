import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface BlogsType {
    title : string;
    content : string;
    id : number;
    published : boolean;
    author : {
        name : string,
        userDp : string | null;
    }
}

interface UserDataType {
        name : string | null;
        email : string;
        userDp : string | null;
        userID : string;
}

export const useBlogs = () => {
    const [blogsLoading , setBlogsLoading] = useState(true);
    const [blogs , setBlogs] = useState<BlogsType[]>([]);

    useEffect(() => {
                    axios.get(`${BACKEND_URL}/api/v1/blog/bulk` , {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => {
                setBlogs(res.data.blogs);
                setBlogsLoading(false);
            });

    },[]);

    return {
         blogsLoading ,
         blogs
    }
}

export const useAvatar = () => {
    const [avatarLoading , setAvatarLoading] = useState(true);

    const [userData , setUserData] = useState<UserDataType>({
        email : "",
        name : "",
        userDp : "",
        userID : "",
    });

    useEffect(() => {

          axios.get(`${BACKEND_URL}/api/v1/user/me` , {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                } 
            }).then(async (res) => {
                const data = await res.data.user;
                setUserData(data);
                setAvatarLoading(false);
            });
    }, []);

    return {
        avatarLoading ,
        userData
    }
}