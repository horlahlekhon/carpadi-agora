import React from 'react'
import styled from 'styled-components'

export default function SuccessAlert({closeAlert}) {

    const Section = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(12, 12, 12, 0.2);
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    `

    const AlertDiv = styled.div`
    position: absolute;
    padding: 15px;
    width: 342px;
    height: 359px;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    z-index: 2000;
    background: #FFFFFF;
    border-radius: 12px;
    opacity: 1;


   .close-icon-div{
    display: block;
       float: right;
   }

   .close-icon-div button{
       background: transparent;
       border: none;
   }

   .close-icon-div img{
       display: block;
       cursor:pointer;
     
   }

   .success-message{
       display: block;
       margin: 10px auto;
   }
   
   .success-message img{
       display: block;
       margin: 50px auto;
   }

    h2{
        font-weight: 600;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
    }

    p{
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #767676;
    }

    `
  return (
    <Section>
       <AlertDiv>
 <div className='close-icon-div'>
    <button onClick={() => closeAlert()}><img src="https://res.cloudinary.com/grootretro/image/upload/v1646258308/black_close_button_gx1tyz.png" alt="close icon" /></button>
    </div>
    <div className='success-message'>
    <img src="https://res.cloudinary.com/grootretro/image/upload/v1646244421/carpadi-website/bell_icon_g2zuuy.png" alt="bell icon"/>
    <h2>Wait list Joined <br />
Successfully</h2>
<p>You will receive a download link <br />
once we are live!</p>
</div>
       </AlertDiv>
    </Section>
  )
}
