import React from 'react';
import food from "../../../../Images/food.jpeg";
import OfferData from "../../services/OfferData"
import IconText from '../../../../molecules/IconText/IconText';
import "./RestaurantDetails.css"
import TitleData from '../../services/TitleData';
import Title from "../../../../molecules/Title/Title";
import Search from "../../helpers/Search/Search";
import Checkbox from '../../helpers/Checkbox/Checkbox';
import Image from '../../../../atoms/Image/Image';

function RestaurantDetails() {
  return (
    <div className="mid">
    <div className="middle max-width">
        <div className="pic">
            <div className="picture">
                <Image className={'im'} src={food} alt={"food pic"}/>
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
            <div className="o1g">
                <div className="o1gg">
                    <div className="o11">
                        <Search/>
                    </div>
                    
                </div>
                <div className="o2gg">
                    <div className="o11">
                        <span className="o13">
                            <Checkbox/>
                        </span>
                    </div>
                </div>
                <div className="o3gg">
                    <div className="o11">
                        <IconText text={"favourite"} icons={"fa fa-heart"}/>
                    </div>
                </div>
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