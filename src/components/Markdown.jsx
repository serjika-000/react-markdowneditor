import { useState,useEffect } from "react";
import Markdown from 'react-markdown';



export const MarkDown = (props) => {

    const [viewPreview, setviewPreview] = useState(true)

   
    const initialContent = typeof props.selectedDocument.content === 'object' ? props.selectedDocument.content.content : props.selectedDocument.content;
    

    const [inputText, setInputText] = useState(initialContent || "");

    useEffect(() => {
        
        setInputText(props.selectedDocument.content || "");
    }, [props.selectedDocument.content]);
    let state = props.active;




    return (
        <div className={`flex ${state ? "" : "ml-[250px]" }  justify-center w-full h-screen`}>
           {viewPreview && <div className="markdown w-1/2 h-full border-r border-[#E4E4E4] dark:border-[#5A6069]">
                <div className="markdown-nav px-4 flex items-center w-full h-[42px] bg-[#F5F5F5] dark:bg-[#1D1F22]">
                    <p className="uppercase text-sm font-medium tracking-[2px] text-[#7C8187] dark:text-[#C1C4CB] leading-normal">Markdown</p>
                </div>
                <textarea  value={inputText} onChange={(e) => setInputText(e.target.value)} className="no-scrollbar w-full outline-none h-full  p-4 text-[#35393F] dark:text-[#C1C4CB] dark:bg-[#2B2D31] text-sm "></textarea>

            </div>}
            <div className={`preview ${viewPreview ?" w-1/2" : "w-full" }  h-full bg-white border-l border-[#E4E4E4] dark:border-[#5A6069] flex flex-col`}>
                <div className="markdown-nav items-center px-4 w-full h-[44px] bg-[#F5F5F5] dark:bg-[#1D1F22] flex justify-between">
                    <p className="uppercase text-sm font-medium tracking-[2px] text-[#7C8187] dark:text-[#C1C4CB] leading-normal">Preview</p>
                    <img onClick={() => setviewPreview(!viewPreview)} src={viewPreview ? "./icon-show-preview.svg" : "./icon-hide-preview.svg" } alt="hide" />
                </div>

                <div className={`p-4 prose max-w-full h-full ${viewPreview ? "" : " flex justify-center"} ${inputText ? "overflow-y-scroll" : ""}  dark:bg-[#2B2D31]`}>
                    <Markdown className={`markdown ${viewPreview ? "w-full " :'w-[672px]'}`} >{inputText}</Markdown>
                </div>
            </div>
        </div>

    )
}