import { useParams, useSearchParams } from "react-router";

const Profile = () => {
    let params = useParams();
    let [query] = useSearchParams();
    console.log(query.get('lastname'));

    return (
        <div className="profile">
            <h1>Profile {params?.username}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
    )
}

export default Profile;