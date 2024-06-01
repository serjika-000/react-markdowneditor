import { useState } from "react";
export const Navbar = (props) => {

    const [editedContent, setEditedContent] = useState(props.selectedDocument.content);

    let state = props.active;
    const handleSaveChanges = () => {
        props.onContentChange(editedContent);
        setSelectedDocument((prev) => ({
          ...prev,
          content: editedContent, 
        }));
      };
    return (
        <div className={`flex ${state ? "" : "ml-[250px]"} justify-center w-full bg-[#2B2D31] h-[72px]`}>
            <div className="flex justify-between w-full ">
                <div className="navbar-left flex justify-center items-center">
                    <div className="flex justify-center items-center menu w-[72px] h-[72px] bg-[#35393F]" onClick={() => props.handleMenu()}>
                        <img className={`${state ? "w-8" : "w-6"} h-6`} src={state ? "./icon-menu.svg" : "./icon-close.svg"} alt="menu" />
                    </div>
                    <img className="px-8" src="./logo.svg" alt="logo" />
                    <p className="divider h-10 w-[1px] bg-[#5A6069]"></p>
                    <div className="flex justify-center items-center gap-4 ml-6">
                        <img className="" src="./icon-document.svg" alt="document" />
                        <div className="flex flex-col text-white gap-[3px]">
                            <p className="text-[13px] font-light leading-normal text-[#7C8187]">document name</p>
                            <div className="flex gap-2">
                                <p className="text-[15px] font-normal leading-normal text-white">
                                    {props.selectedDocument.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-right mx-4 gap-6 text-white flex justify-center items-center">
                    <img src="./icon-delete.svg" alt="delete" onClick={props.onDeleteDocument} />
                    <div onClick={handleSaveChanges} className="flex items-center justify-center w-[152px] h-10 rounded-[4px] bg-[#E46643] gap-2">
                        <img src="./icon-save.svg" alt="save" />
                        <p className="text-[15px] font-normal leading-normal text-white">Save Changes</p>
                    </div>
                </div>
            </div>
        </div>

    )
}