import React,{useState} from 'react';
import './product.css';
import { BsBookmarkHeart } from "react-icons/bs";
import { GrDocument } from "react-icons/gr";
import { GrGroup } from "react-icons/gr";
import {GiTreasureMap} from "react-icons/gi"
import {IoMdFlashlight} from "react-icons/io"
import {BiTimer} from "react-icons/bi"



const MyCard = ({ id }) => {

    const [showMore, setShowMore] = useState({
        card1: false,
        card2: false,
        card3: false,
      });
      
    const handleShowMore = (id) => {
        setShowMore({
          ...showMore,
          [id]: !showMore[id],
        });
      };

  return (
    <div className='main-cards '>
        <div className='first '>
            <div className="top-1">
            <div className='first-side '> 
                <div className='card-content '>
                    <div className="top-content ">
                        <h2>Base</h2>
                        <h1>$89.00 <span className='year'>/year</span></h1>
                    </div>
                </div>

                <div className="card-icon ">
                <BsBookmarkHeart className='card-icon-1' />
                </div>

                

            </div>
            <button className="main-btn col-12">TO CHOOSE</button>
            </div>

            {/* collapse */}

            <button 
                className="see-more-btn  "
                onClick={() => handleShowMore(id)}
            >
                {showMore[id] ? ' Less' : 'See more'}
            </button>
            <div className={`main-body ${showMore[id] ? 'show' : 'hide'}`}>
                        <p className='title-body'>Membership in the tenant angel club</p>
                    <div className="content-body col-12">
                        <p className='col-12'>
                            <span className='col-8'
                                  style={{fontSize:20,minWidth:"30%",opacity: 0.3}}>
                                    <GrDocument/>
                                    </span>
                                    <span
                                        style={{paddingLeft:10,
                                        fontWeight: 600,
                                        minWidth:"70%",
                                        fontSize:13}} >
                                        Free patterns and templates
                                    </span>
                        </p>

                        <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><GrGroup/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13 }} >Support and appointment<br/></span><span style={{paddingLeft:15,fontWeight: 600,fontSize:13,paddingLeft:30}}> the tenant angel team</span></p>
                    </div>
                    <div className="seconde-content-body">
                        <p className='title-body'>Legal advice from partner lawyer</p>
                    
                        <div className="content-body">
                            <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><GiTreasureMap/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13}} > Free patterns and templates</span></p>
                            <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><IoMdFlashlight/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13 }} > Advice on all rental issues</span></p>
                            <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><BiTimer/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13 }} >No waiting times!</span></p>
                            <p style={{fontSize:14, paddingLeft:30, paddingTop:1}}>Contact usually in 48 hours. </p>
                            <p style={{paddingLeft:30,fontSize:10}}>Note: The tenancy law advice from the partner lawyer can be used immediately after registration!</p>
                        </div>
                        <div className="term">
                            <p style={{fontSize:14}}>Term: 24 months</p>
                        </div>
                        
                    </div>
            </div>
            
            
            

        </div>
        <div className='first '>
            <div className="top-2">
            <div className='first-side '> 
                <div className='card-content '>
                    <div className="top-content ">
                        <h2>Per</h2>
                        <h1>$109.00 <span className='year'>/year</span></h1>
                    </div>
                </div>

                <div className="card-icon ">
                <BsBookmarkHeart className='card-icon-1' />
                </div>

                

            </div>
            <button className="main-btn col-12">TO CHOOSE</button>
            </div>
            {/* collapse */}

            <button 
                className="see-more-btn  "
                onClick={() => handleShowMore(id)}
            >
                {showMore[id] ? ' Less' : 'See more'}
            </button>
            <div className={`main-body ${showMore[id] ? 'show' : 'hide'}`}>
            
                        <p className='title-body-1'>Membership in the tenant angel club</p>
                    <div className="content-body col-12">
                        <p className='col-12'>
                            <span className='col-8'
                                  style={{fontSize:20,minWidth:"30%",opacity: 0.3}}>
                                    <GrDocument/>
                                    </span>
                                    <span
                                        style={{paddingLeft:10,
                                        fontWeight: 600,
                                        minWidth:"70%",
                                        fontSize:13}} >
                                        Free patterns and templates</span>
                        </p>

                        <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><GrGroup/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13 }} >Support and appointment<br/></span><span style={{paddingLeft:15,fontWeight: 600,fontSize:13,paddingLeft:30}}> the tenant angel team</span></p>
                    </div>
                    <div className="seconde-content-body">
                        <p className='title-body'>Legal advice from partner lawyer</p>
                    
                        <div className="content-body">
                            <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><GiTreasureMap/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13}} > Free patterns and templates</span></p>
                            <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><IoMdFlashlight/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13 }} > Advice on all rental issues</span></p>
                            <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><BiTimer/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13 }} >No waiting times!</span></p>
                            <p style={{fontSize:14, paddingLeft:30, paddingTop:1}}>Contact usually in 48 hours. </p>
                            <p style={{paddingLeft:30,fontSize:10}}>Note: The tenancy law advice from the partner lawyer can be used immediately after registration!</p>
                        </div>
                        <div className="term">
                            <p style={{fontSize:14}}>Term: 24 months</p>
                        </div>
                        
                    </div>
            </div>
            
            
            

        </div>
        <div className='first '>
            <div className="top-3">
            <div className='first-side '> 
                <div className='card-content '>
                    <div className="top-content ">
                        <h2>Premium</h2>
                        <h1>$149.00 <span className='year'>/year</span></h1>
                    </div>
                </div>

                <div className="card-icon ">
                <BsBookmarkHeart className='card-icon-1' />
                </div>

                

            </div>
            <button className="main-btn col-12">TO CHOOSE</button>
            </div>
                {/* collapse */}

            <button 
                className="see-more-btn  "
                onClick={() => handleShowMore(id)}
            >
                {showMore[id] ? ' Less' : 'See more'}
            </button>
            <div className={`main-body ${showMore[id] ? 'show' : 'hide'}`}>
            
                        <p className='title-body-2'>Membership in the tenant angel club</p>
                    <div className="content-body col-12">
                        <p className='col-12'>
                            <span className='col-8'
                                  style={{fontSize:20,minWidth:"30%",opacity: 0.3}}>
                                    <GrDocument/>
                                    </span>
                                    <span
                                        style={{paddingLeft:10,
                                        fontWeight: 600,
                                        minWidth:"70%",
                                        fontSize:13}} >
                                        Free patterns and templates</span>
                        </p>

                        <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><GrGroup/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13 }} >Support and appointment<br/></span><span style={{paddingLeft:15,fontWeight: 600,fontSize:13,paddingLeft:30}}> the tenant angel team</span></p>
                    </div>
                    <div className="seconde-content-body">
                        <p className='title-body'>Legal advice from partner lawyer</p>
                    
                        <div className="content-body">
                            <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><GiTreasureMap/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13}} > Free patterns and templates</span></p>
                            <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><IoMdFlashlight/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13 }} > Advice on all rental issues</span></p>
                            <p><span style={{fontSize:20,minWidth:"30%",opacity: 0.3}}><BiTimer/></span><span style={{paddingLeft:10,fontWeight: 600,minWidth:"70%",fontSize:13 }} >No waiting times!</span></p>
                            <p style={{fontSize:14, paddingLeft:30, paddingTop:1}}>Contact usually in 48 hours. </p>
                            <p style={{paddingLeft:30,fontSize:10}}>Note: The tenancy law advice from the partner lawyer can be used immediately after registration!</p>
                        </div>
                        <div className="term">
                            <p style={{fontSize:14}}>Term: 24 months</p>
                        </div>
                        
                    </div>
            </div>
            

        </div>

    </div>
    
  );
}

export default MyCard;
