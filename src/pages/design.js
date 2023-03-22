import {Collapse} from "reactstrap";
import {useState} from "react";

function Design(props) {
    const [collapse, setCollapse] = useState(false)
    const toggle = () => {setCollapse(!collapse)}
    let chevron = 'bi-chevron-up'
    return (
        <div>
            <a onClick={() => {
                toggle()
                if (collapse) {
                    chevron = 'bi-chevron-down'
                } else {chevron = 'bi-chevron-up'}
            }}>
                Assets <i className={chevron}></i>
            </a>
            <Collapse vertical isOpen={collapse}>
                FFF
            </Collapse>
        </div>
    )
}

export default Design

