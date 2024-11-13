const ProfileCard = ({name, job, image, teks, warna, fungsi }) => {
    return (
        <>
        <h1>{name}</h1>
        <h2>{job}</h2>
        <h3><img src={image} /></h3>
        <button style={{color: warna}} onClick={fungsi}>{teks}</button>
        </>
    )
}

export default ProfileCard;