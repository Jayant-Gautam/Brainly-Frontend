export default function Background ({children} : {children : React.ReactElement}) {
    return (
        <div className="pl-35 gap-1 flex justify-start items-center w-screen h-screen bg-[url(./public/image.jpg)] bg-contain bg-right">
            {children}
        </div>
    )
}