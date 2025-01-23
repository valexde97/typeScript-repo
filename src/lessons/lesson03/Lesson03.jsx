import MyButton from "../../components/MyButton";
import UserCard from "../../components/userCard/UserCard";
import Button from "../../homeworks/homework04/Button";

function Lesson03() {
  function profilePicture(){
    return("https://img-webcalypt.ru/uploads/admin/images/meme-templates/b4kHFk8Pz3I7OfhMUY1RtuGFvwxOFTMt.jpg")
  }

  let count = 0;

  function someFunctionOne(name) {
    

    if (count < 3) {
      count++;
      console.log(`${name} you pushed me ${count} times`);
    } else {
      console.log(`${name} stop pushing me🥺!`);
    }
  }

    return (
      <div>
        {/* <h2>React Props👨‍👩‍👧‍👦</h2>
        <UserCard name={"Peter"} age={35} hobby={"Hiking"} />
        <UserCard name={"Rosa"} age={40} hobby={"Diving"} />
        <UserCard name={"Anton"} age={28} /> */}



        <Button text="Don`t click me!" func={() => window.open(profilePicture())} 
         type="button"/>
        <Button text="Don't push me!" func={() => someFunctionOne("Bro")} type="submit"/>

        
      </div>
    );
  }


export default Lesson03;
