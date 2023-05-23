let Tooltip = (props) => {
    console.log(props);
    return (
        <>
            {/* top */}
            {(props.postion === 'top'&&<span className="top tooltiptext">{props.postion} tooltip</span>)}

            {/* right */}
            {(props.postion === 'right'&& <span className="right tooltiptext">{props.postion} tooltip</span>)}

            {/* bottom */}
            {(props.postion === 'bottom'&& <span className="bottom tooltiptext">{props.postion} tooltip</span>)}

             {/* left */}
            {(props.postion === 'left'&& <span className="left tooltiptext">{props.postion} tooltip</span>)}
        </>
    )
}

export default Tooltip;