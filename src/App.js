
import './App.css';
import './style.css'
import React from 'react';
import ProfilePhoto from "./component/profile/ProfilePhoto";
import FullName from "./component/profile/FullName";
import Address from "./component/profile/Address";






function App() {
  return (
    <div class="container" >

    <div style={{border:"solid 1px black",maxWidth:"100vw"}}/>


 <ProfilePhoto/>

 <FullName/>

 <Address/>

    </div>
  );
}

export default App;
