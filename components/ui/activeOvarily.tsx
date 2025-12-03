function ActiveOvaraly({ isactive, onclick }: { isactive: boolean, onclick: () => void }) {
    return (
        <>
            {isactive && <div onClick={onclick} className="z-1 w-full h-screen top-0 left-0  fixed "></div>}


        </>
    );
}

export default ActiveOvaraly;