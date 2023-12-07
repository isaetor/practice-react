import axios from "axios";
import { useQuery } from "react-query";


export const Profile = ()=>{
    const {data: userData, isLoading, isError, error, refetch} = useQuery(["user"], ()=>{
        return axios.get("https://randomuser.me/api/").then((res)=> res.data.results[0])
    })
    if(isLoading)
        return <p>Loading ...</p>
    if(isError)
        return <p>sorry, there was an error <br/> message: {error.message} </p>
    return (
        <div>
            <p>name: {userData?.name?.first}</p>
            <button onClick={refetch}>update</button>
        </div>
    )
}