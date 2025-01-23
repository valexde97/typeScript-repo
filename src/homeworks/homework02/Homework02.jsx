import "../../components/ProfileCard";
import ProfileCard from "../../components/ProfileCard";

function Homework02() {
  return(
    <>
    <h1>Candidates:🧑‍🏫</h1>

    <ProfileCard
    avatar={"https://cdn-a.prisma.de/cdn/img/default/118/1176774_3367247b02aafd5d7e97a1f30bb82be7_1280re0.jpg"}
    name={"Lucy"}
    occupation={"Going hard"}
    hobbies={"Killing, Shooting, Productivity"}
    />
<ProfileCard
    avatar={"https://hairstyles.thehairstyler.com/hairstyle_views/front_view_images/14023/original/Jessica-Alba-long-hairstyle.jpg"}
    name={"Jessica Alba"}
    occupation={"Actress"}
    hobbies={"Dancing, Acting, Fighting, Saving nature"}
    />
    <ProfileCard
    avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MNK8O81a-xjZ8976z5Jx5JA__viMGW8ciA&s"}
    name={"Penelope Cruz"}
    occupation={"Actress"}
    hobbies={"Acting, Reading, Yoga, Meditation"}
    />
    </>
  )
  
  }


export default Homework02;
