import {Button, Collapse, List} from "reactstrap";
import {useState} from "react";

function Design() {
    const [collapsed, setCollapsed] = useState(false)
    function toggle() {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <Button onClick={toggle} color={'primary'} style={{marginBottom: '2rem'}}>
                <a>Asset List</a>
            </Button>
            <Collapse vertical isOpen={collapsed}>
                <List type={"unstyled"}>
                    <li style={{marginBottom: '1rem'}}>
                        <Button onClick={() => {window.location.href = '/the-great-escape-website/design/environment'}}>
                            <a>Environment</a> <i className={'bi-arrow-right'}></i>
                        </Button>
                    </li>
                    <li style={{marginBottom: '1rem'}}>
                        <Button onClick={() => {window.location.href = '/the-great-escape-website/design/characters'}}>
                            <a>Characters</a> <i className={'bi-arrow-right'}></i>
                        </Button>
                    </li>
                    <li style={{marginBottom: '1rem'}}>
                        <Button onClick={() => {window.location.href = '/the-great-escape-website/design/objects'}}>
                            <a>Objects</a> <i className={'bi-arrow-right'}></i>
                        </Button>
                    </li>
                </List>
            </Collapse>
        </div>
    )
}

export default Design

