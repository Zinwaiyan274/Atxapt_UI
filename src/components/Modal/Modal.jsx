import React, { useState } from "react";
import { areaIcon, bathIcon, buildingIcon, image_1, image_2, locationIcon } from "..";
import { data } from "autoprefixer";
import { datas } from "../../datas";
const Modal = ({ show, setShow,index ,props }) => {
  const textColor = "#B14B3C"
  const [selectImg,setSelectImg] = useState(props.images[0])
  const selectClick = (index)=>{
    setSelectImg(props.images[index])
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative max-w-7xl h-screen my-6 mx-auto">
          {/*content*/}
        <form action="mailto:minphonet6@gmail.com" method="post" encType="text/plain">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-secondary font-semibold">{props.title}</h3>
              <button onClick={()=>setShow(false)}>Close</button>
            </div>
            {/*body*/}
            <div className="relative p-10 flex">
              <div className="w-1/2 mx-10">
                <img src={selectImg} alt="" className="object-cover w-[567px] h-[300px] selected" />
                <div className=" w-[142px] h-[90px] justify-between flex mt-4 ">
  
                  {
                    props.images.map((img,index)=>(
                      <img key={index} src={img} alt="" className=" object-cover me-2 cursor-pointer" onClick={()=>selectClick(index)} />

                    ))
                  }
                </div>
              </div>
              <div className="w-1/2 ">
                {props.features.map((item) => (
                  <div className="flex mb-2 gap-2">
                    <div
                      class=" w-7 h-7 rounded-full p-1 flex items-center justify-center
                       bg-red-700 hover:bg-red-500 text-white"
                    >
                      <img src={item.img} alt="" className=" object-cover w-auto" />
                    </div>
                    <h2 className="text-gray-900 font-extralight">{item.text}</h2>
                  </div>
                ))}
                <h2>Price</h2>
                <p className={`text-4xl text-[${textColor}] font-extrabold mb-2 mt-2`}>
                  $ {props.cost.start} - $ {props.cost.end}
                </p>
                <a
                  href="tel:+95259661223"
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-[#B14B3C] rounded-none hover:bg-gray-800 focus:shadow-outline focus:outline-none" 
                >
            
                  <input type="submit" value='Connect with Agent' />
                </a>
                <a
                  href={props.siteLink} target="__blank"
                  class={`relative px-5 py-3 overflow-hidden font-medium text-[${textColor}] bg-gray-100 border border-gray-100 rounded-lg shadow-inner group mx-4` } onClick={() => setShow(false)}
                >
                  <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    View Details
                  </span>
                </a>
                
              </div>
             
            </div>
            {/*footer*/}
            
          </div>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;

const Feature = ({ Icon, text }) => {
  <>
    <div className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
      <img src={Icon} alt="" />
    </div>
    <h2 className="text-gray-900 font-extralight">{text}</h2>
  </>;
};
