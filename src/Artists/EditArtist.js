import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import artistActions from "../redux/actions";
import ArtistNavBar from "./ArtistNavBar";
import "./EditArtist.css";

const EditArtist = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(artistActions.persistArtist());
  });

  const artist_id = useSelector((state) => state.id);
  const artist_username = useSelector((state) => state.username);
  const artist_email = useSelector((state) => state.email);
  const artist_profile_picture = useSelector((state) => state.profile_picture);
  const artist_bio = useSelector((state) => state.bio);
  const artist_fav_color = useSelector((state) => state.fav_color);
  const artist_instagram_url = useSelector((state) => state.instagram_url);
  const artist_facebook_url = useSelector((state) => state.facebook_url);
  const artist_first_name = useSelector((state) => state.first_name);
  const artist_last_name = useSelector((state) => state.last_name);

  const [profileForm, setProfileForm] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    fav_color: "",
    facebook_url: "",
    instagram_url: "",
    bio: "",
  });

  const handleChange = (e) =>
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  console.log(profileForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(artistActions.commitChangesToDB(profileForm, artist_id));
    props.history.push("/artist_dashboard");
  };


  const { username, first_name, last_name, bio, facebook_url, instagram_url, email, fav_color, profile_picture } = profileForm;
  return (
    <div>
      <ArtistNavBar />
      <div className="container">
        <div className="container-time">

        <div className="text-center">
        <img src={artist_profile_picture} value={profile_picture} name="profile_picture" className="avatar img-circle img-thumbnail" alt="avatar"/>
        <h6>Upload a different photo...</h6>
        <input type="text" placeholder={artist_profile_picture} className="text-center center-block file-upload"/>
        </div>

        </div>

        <div className="container-form">
          <form onSubmit={handleSubmit} >
            <h2 className="heading heading-yellow">Profile Information</h2>

            <div className="form-field">
              <p>Username</p>
              <input 
              value={username}
              onChange={handleChange}
              name="username"
              type="text" 
              placeholder={artist_username} />
            </div>
            <div className="form-field">
              <p>Email</p>
              <input 
              value={email}
              onChange={handleChange}
              name="email"
              type="text" 
              placeholder={artist_email} />
            </div>
            <div className="form-field">
              <p>First Name</p>
              <input 
              value={first_name}
              onChange={handleChange}
              name="first_name"
              placeholder={artist_first_name}
              type="text" />
            </div>
            <div className="form-field">
              <p>Last Name</p>
              <input 
              value={last_name}
              onChange={handleChange}
              placeholder={artist_last_name}
              name="last_name"
              type="text" />
            </div>
            <div className="form-field">
              <p>Favorite Color</p>
              <input 
              value={fav_color}
              onChange={handleChange}
              placeholder={artist_fav_color}
              name="fav_color"
              type="text" />
            </div>
            <div className="form-field">
              <p>Facebook Url</p>
              <input 
              value={facebook_url}
              onChange={handleChange}
              placeholder={artist_facebook_url}
              name="facebook_url"
              type="text" />
            </div>
            <div className="form-field">
              <p>Instagram Url</p>
              <input 
              value={instagram_url}
              onChange={handleChange}
              placeholder={artist_instagram_url}
              name="instagram_url"
              type="text" />
            </div>
            <div className="form-field">
              <p>Bio</p>
              <textarea 
              value={bio}
              onChange={handleChange}
              placeholder={artist_bio}
              name="bio"
              type="textarea" />
            </div>
            <div className="form-field">
              <p>Confirm Your ID</p>
              <select value={artist_id} name="artist_id" onChange={handleChange} id="#">
                  <option>
                    {artist_id}
                  </option>
                  <option>
                    {artist_id}
                  </option>
                ))
              </select>
            </div>

            <button className="sub-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditArtist;
