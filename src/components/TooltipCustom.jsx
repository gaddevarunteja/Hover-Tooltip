import { Tooltip } from 'react-tooltip';

export default function TooltipCustom({place}) {
    return <>
        <span data-tooltip-id="my-tooltip" data-tooltip-content="Thanks for hovering! I'm a tooltip"
            data-tooltip-place={place} style={{borderBottom: "1px dotted black"}}>
            Hover over me!
        </span>
        
        <Tooltip
            key={place}
            id="my-tooltip"
            // content={`Thanks for hovering! I'm a tooltip`}
            place={place}
        />
    </>
}