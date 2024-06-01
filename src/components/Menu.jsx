import { useState } from "react";

export const Menu = (props) => {

    

    const toggle = props.toggle;



  

   

    const handleSelectDocument = (index) => {
        const selectedDoc = props.newDocument[index];
        props.setSelectedDocument(selectedDoc);
      };
      
    
      const handleDocumentDelete = (index) => {
        props.handleDeleteDocument(index);
      };
    

    

    return (


        <div className="absolute p-6 w-[250px] bg-[#1D1F22] h-full justify-between flex  flex-col">
            <div className="flex flex-col">

                <div className="my-documents flex items-center justify-center">
                    <p className="uppercase mt-6 text-sm text-[#7C8187] font-medium tracking-[2px] leading-normal">My Documents</p>
                </div>

                <div onClick={() => props.handleNewDocument()} className="new-document bg-[#E46643] h-10 w-[202px] mt-[29px] rounded-[4px] flex justify-center items-center">
                    <p className="text-white text-[15px] font-normal leading-normal">+ New Document</p>
                </div>

                {props.newDocument.map((ele,index) => {
                    return (
                        <div className="flex justify-between" >
                            <div className="flex gap-4 float-left mt-6 text-left" onClick={() => handleSelectDocument(index)}>
                                <div className="flex items-center">
                                    <img src="./icon-document.svg" alt="document" />
                                </div>
                                <div className="flex flex-col gap-[3px] ">
                                    <p className="text-[#7C8187] text-[13px] font-light leading-normal">{ele.createdAt}</p>
                                    <p className="text-white text-[15px] font-normal leading-normal ">{ele.name}</p>
                                </div>
                            </div>

                            <div className="flex items-center " onClick={() => handleDocumentDelete(index)}>
                                <img src="./icon-delete.svg" alt="delete" />
                            </div>
                        </div>
                    )

                })}



            </div>

            <div className="toggle-theme flex gap-4 items-center">
                <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.141 8.804a.823.823 0 0 0-.864-.115 6.622 6.622 0 0 1-2.772.6A6.704 6.704 0 0 1 5.81 2.626 7.066 7.066 0 0 1 6.015.981a.823.823 0 0 0-1.094-.93 8.341 8.341 0 1 0 11.516 9.617.823.823 0 0 0-.296-.864Zm-7.814 5.503A6.696 6.696 0 0 1 4.164 2.404v.222a8.35 8.35 0 0 0 10.069 8.16 6.671 6.671 0 0 1-5.906 3.554v-.033Z" fill={toggle ? "#5A6069" : "#FFFFFF"} /></svg>
                <input className="hidden" name="theme" id="theme" type="checkbox" />
                <label onClick={() => props.toggleTheme()} className={` before:absolute before:content-[''] before:bg-white before:w-3 before:h-3 before:rounded-full before:my-[6px] before:mx-[6px] ${toggle ? "before:right-0" : "before:left-0"} before:translate-[0.2s] w-12 h-6  rounded-[14.5px] bg-[#5A6069] cursor-pointer relative transition-[0.2s] `} htmlFor="theme"></label>
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 9a.9.9 0 0 0-.9-.9H.9a.9.9 0 0 0 0 1.8h.9a.9.9 0 0 0 .9-.9Zm.576 4.5-.639.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 1.269 0l.639-.639A.9.9 0 0 0 3.276 13.5ZM9 2.7a.9.9 0 0 0 .9-.9V.9a.9.9 0 0 0-1.8 0v.9a.9.9 0 0 0 .9.9Zm5.094 2.106a.9.9 0 0 0 .63-.261l.639-.639a.9.9 0 1 0-1.269-1.269l-.594.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 .594.261Zm-10.8-.261a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.639-.639a.904.904 0 1 0-1.287 1.269l.657.639ZM17.1 8.1h-.9a.9.9 0 1 0 0 1.8h.9a.9.9 0 1 0 0-1.8Zm-2.376 5.4a.9.9 0 0 0-1.224 1.224l.639.639a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.684-.594ZM9 4.05A4.95 4.95 0 1 0 13.95 9 4.959 4.959 0 0 0 9 4.05Zm0 8.1a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Zm0 3.15a.9.9 0 0 0-.9.9v.9a.9.9 0 1 0 1.8 0v-.9a.9.9 0 0 0-.9-.9Z" fill={toggle ? "#FFFFFF" : "#5A6069"} /></svg>
            </div>

        </div>
    )
}