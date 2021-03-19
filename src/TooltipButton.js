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
        return (
            <OverlayTrigger placement={this.props.tooltipPlacement} delayHide={150}
                            overlay={<Tooltip id={this.props.tooltipId}>{this.props.tooltipText}</Tooltip>}>
                <div className="tooltip-button-helper">
                    {this.props.renderedButton? this.props.renderedButton : (<Button {...this.props} disabled>{this.props.title}</Button>)}
                </div>
            </OverlayTrigger>
        );
    }
}

export default TooltipButton;
