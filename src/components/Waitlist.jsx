import React from 'react'
import styled from 'styled-components'

const WaitlistDiv = styled.div`
position: relative;
background: #FFFFFF;
box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.04);
border-radius: 12px;  
padding: 0 0 0 20px; 
margin: 50px auto;
width: 90%;
height: 505px;
background-image: url('https://res.cloudinary.com/grootretro/image/upload/v1646830149/carpadi-website/desktop_bent_iphone_sh2bcg.png');
background-repeat: no-repeat;
background-position: right top;


.waitlist-main{
    position: relative;
    display: block;
    top: 50%;
  }

.waitlist-info {
  position: absolute;
  display: block;
}


.waitlist-info h2{
  font-weight: 600;
font-size: 28px;
line-height: 33px;
color: #243773;
margin: 10px 0;

}


.waitlist-info p{
font-weight: 300;
font-size: 14px;
line-height: 18px;
color: #212120;

}



.waitlist-form{
  position: absolute;
 display: flex;
 margin:140px 0 0;
 align-items: center;
 width: 90%;

}

.waitlist-form input{
width: 211px;
height: 52px;
background: #F3F3F3;
border: 1px solid #DEDEDE;
border-radius: 10px;
padding: 10px;
font-weight: 300;
font-size: 12px;
line-height: 16px;
color: #A3A3A3;

}

.waitlist-form button{
  width: 116px;
  height: 52px;
  background: #243773;
border-radius: 10px;
outline: none;
border: none;
font-weight: 500;
font-size: 12px;
line-height: 14px;
text-align: center;
color: #FFFFFF;
margin-left: 10px;
cursor: pointer;


}

@media (min-width: 992px){
  width: 90%;
  height: 378px;
  margin: 50px auto;
  background-image: url('https://res.cloudinary.com/grootretro/image/upload/v1646830149/carpadi-website/desktop_bent_iphone_sh2bcg.png');


  .waitlist-main{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 10%;
  }

  .waitlist-info {
 position: absolute;
 top: 0%;
 display: block;
 margin: 0 auto;
}
  .waitlist-info img{
    display: block;
    margin: 30px auto;
}
  .waitlist-info h2{
  font-weight: 900;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
}
  .waitlist-info p{
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
}

.waitlist-form{
  position: relative;
  display: block;
  margin: 240px auto 0;
  width:auto;
}


.waitlist-form input{
width: 349px;
height: 64px;
font-weight: 300;
font-size: 16px;
line-height: 24px;
}

.waitlist-form button{
width: 150px;
height: 64px;
font-size: 16px;
line-height: 24px;

}


}

`


function Waitlist({handleClick}) {


  return (
    <WaitlistDiv id="waitlist">

<div className='waitlist-main'>
<div className='waitlist-info'>
 <img style={{width: '55px', height: '57px'}} src="https://res.cloudinary.com/grootretro/image/upload/v1646753369/carpadi-website/message-icon_yzemgw.png" alt="message" />
 <h2>Join Our Waitlist</h2>
 <p>Get informed once we’re live</p>
</div>
<div className='waitlist-form'>
    <input name='email' placeholder='Enter your email address' />
    <button onClick={() => handleClick()}>Join Waitlist</button>
</div>
</div>
    </WaitlistDiv>
  )
}

export default Waitlist