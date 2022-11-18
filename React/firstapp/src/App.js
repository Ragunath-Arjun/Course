import logo from './logo.svg';
import './App.css';

function App() {
  let ele;
  const names=[
  {name:"Arjun" ,
  pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IdG0_YX28_Bsq98ArOewE-IAyucn0CKyPwzN6Oup3d2wVpEI"},
  {name:"Abirami" ,
  pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IdG0_YX28_Bsq98ArOewE-IAyucn0CKyPwzN6Oup3d2wVpEI"},
  {name:"Ragini" ,
  pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IdG0_YX28_Bsq98ArOewE-IAyucn0CKyPwzN6Oup3d2wVpEI"}]
  return (
    <div className="App">
      {/* <User name="Arjun" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IdG0_YX28_Bsq98ArOewE-IAyucn0CKyPwzN6Oup3d2wVpEI"/>
      <User name="Abirami" pic="https://images.news18.com/ibnlive/uploads/2022/09/samantha-ruth-prabhu-5-1-1-166246326216x9.jpg"/>
      <User name="Ragini" pic="https://bl-i.thgim.com/public/companies/9kgabt/article65203813.ece/alternates/FREE_1200/2317_10-7-2019_17-50-39_1_DSC_0104.JPG"/> */}
    {names.map((ele)=>
    (<User name={ele.name} pic={ele.pic}/>
    )
    )};
    </div>

  );
}
function User(props){
  return(
    <div>
  <img src={props.pic} className='img-css' alt="Profile Pic"></img>
  <h1>Hello,{props.name}</h1>
  </div>
  )
}

export default App;
