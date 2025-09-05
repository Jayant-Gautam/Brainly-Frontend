import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
    toolbar: [
        [{ font: [] }, { size: [] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    ],
};

export default function DocInput(props: { data: string, setData: React.Dispatch<React.SetStateAction<string>> }) {

    function handleData(e: any): void {
        // console.log(e);
        props.setData(e);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-full max-h-80 bg-gray-100">
            <h2 className="text-xl font-bold mb-4">Add Note</h2>
            <div className="w-full max-w-2xl h-full overflow-auto mb-4 rounded shadow bg-white">
                <ReactQuill modules={modules} theme='snow' value={props.data} onChange={handleData} />
            </div>
        </div>
    );
};
