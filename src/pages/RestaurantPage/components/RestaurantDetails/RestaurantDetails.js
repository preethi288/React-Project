import React from 'react';
import "./RestaurantDetails.css";
import IconText from '../../../../molecules/IconText/IconText';
import Title from "../../../../molecules/Title/Title";
import Image from '../../../../atoms/Image/Image';

function RestaurantDetails(props) {
    const {OfferData,TitleData,foodimg}=props
  return (
    <div className="mid">
    <div className="middle max-width">
        <div className="pic">
            <div className="picture">
                <Image className={'im'} src={foodimg} alt={"food pic"}/>
            </div>
        </div>
        <div className="inf">       
            <Title text={TitleData.Title[0].text} location1={TitleData.Title[0].location1} location2={TitleData.Title[0].location2}/>
            <div className="rat">
                {
                    TitleData.Details.map(item=>{
                        return(
                            <div>
                            <div className='r11'>
                            <IconText icons={item.icon} text={item.text} className={'r4'}/>
                            <span className='r5'>{item.detail}</span>
                            
                            </div>
                            <div className='und'></div>
                            </div>
                        )
                    })

                }
            </div>
        </div>
        <div className="offer">
            <div className="oo1">
                Offer
            </div>
            <div className="off">
                <div className="o1">
                {
                    OfferData.map(item=>{
                        return(
                            <IconText icons={item.icon} text={item.off} />
                        )
                    })
                }
                </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default RestaurantDetails