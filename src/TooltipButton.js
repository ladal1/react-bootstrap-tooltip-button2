import React from 'react'
import {Button, Tooltip, OverlayTrigger} from 'react-bootstrap'
import './TooltipButton.css'

// button that, if disabled, shows a tooltip explaining why it's disabled
// by default, this component will render the button and disable it if prop disabled is set
// but optionally, a rendered button can be passed as prop renderedButton (the caller must then disable it themselves)

class TooltipButton extends React.Component{
    static defaultProps = {
        disabled: false,
        title: '',
        tooltipText: '',
        tooltipId: 'tt1',
        tooltipPlacement:'bottom',
        renderedButton: null
    }

    render(){
        const {disabled, title, tooltipText, tooltipId, tooltipPlacement, renderedButton, ...rest} = this.props
        return (
            <OverlayTrigger key="buttonOverlay" placement={tooltipPlacement} delayHide={150}
                            overlay={<Tooltip id={tooltipId}>{tooltipText}</Tooltip>}>
                <div className="tooltip-button-helper">
                    {this.props.renderedButton? this.props.renderedButton : (<Button {...rest} disabled={disabled}>{title}</Button>)}
                </div>
            </OverlayTrigger>
        );
    }
}

export default TooltipButton;
