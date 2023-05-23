let Tooltip = (props) => {
    console.log(props);
    return (
        <>
            {/* top */}
            {(props.postion === 'top'&&<div>top</div>)}

            {/* right */}
            {(props.postion === 'right'&& <div>right</div>)}

            {/* bottom */}
            {(props.postion === 'bottom'&& <div>bottom</div>)}

             {/* left */}
            {(props.postion === 'left'&& <div>left</div>)}
        </>
    )
}

export default Tooltip;