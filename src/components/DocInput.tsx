// import { useState } from "react";

// interface styleType {
//     bold: boolean;
//     italic: boolean;    
//     underline: boolean;
//     fontSize: number;
//     textColor: string;
// }

// export default function DocInput({ data, setData }: { data: string, setData: React.Dispatch<React.SetStateAction<string>> }) {

//     const [bold, setBold] = useState<boolean>(false);
//     const [italic, setItalic] = useState<boolean>(false);
//     const [underline, setUnderline] = useState<boolean>(false);
//     const [fontSize, setFontSize] = useState<number>(16);   
//     const [textColor, setTextColor] = useState<string>("#000000");

//     let style = {   
//         fontWeight: bold ? 'bold' : 'normal',
//         fontStyle: italic ? 'italic' : 'normal',
//         textDecoration: underline ? 'underline' : 'none',
//         fontSize: `${fontSize}px`,
//         color: textColor
//     };

//     function handleData(e: React.ChangeEvent<HTMLTextAreaElement>): void {
//         setData(e.target.value);
//     }

//     return (
//         <div>
//             <label htmlFor="doc">Add Note</label>
//             <textarea style={style} value={data} name="data" id="doc" onChange={handleData}></textarea>
//             <div>

//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
    toolbar: [
        [{ font: [] }, { size: [] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    ],
};

export default function DocInput (props : {data : string, setData : React.Dispatch<React.SetStateAction<string>>}) {

    function handleData(e: any): void {
        // console.log(e);
        props.setData(e);
    }

    return (
        <div className="w-70">
            <h2 className="text-xl font-bold mb-4">Add Note</h2>
            <ReactQuill modules={modules} theme="snow" value={props.data} onChange={handleData} />
        </div>
    );
};
