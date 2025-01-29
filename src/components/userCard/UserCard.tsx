import './userCard.css';

interface IUserCardProps{
  name:string;
  age:number;
  hobby:string;
}

function UserCard(props:IUserCardProps):JSX.Element {
  const {name, age, hobby} = props;
  return (
    <div className="userCard">
      <h4>Name: {name}</h4>
      <p>Age: {age}</p>
      {/* если props.hobby - true, то часть выражения после && будет показана */}
      {/* {props.hobby && (<p>Hobby: {props.hobby}</p>)} */}
      {/* если использовать тернарный оператор, то нужно указывать второе значение, если false */}
      {hobby ? (<p>Hobby: {hobby}</p>) : (<p>No hobby 🙇‍♂️</p>)}
    </div>
  );
}

export default UserCard;
