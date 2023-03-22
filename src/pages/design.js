import {Button, Collapse, Nav, Navbar, NavItem, NavLink} from "reactstrap";
import {useState} from "react";

function Design() {
    const [collapsed, setCollapsed] = useState(false)
    function toggle() {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <Button onClick={toggle} color={'primary'}>
                <a>Asset List</a>
            </Button>
            <Collapse vertical isOpen={collapsed}>
                <Navbar style={{
                    display: 'flex',
                    height: '7.5vh',
                    fontSize: '1.2rem',
                    alignItems: "center"
                }}>
                    <Nav className={"mx-auto"}>
                        <NavItem>
                            <NavLink href="/design/environment" className={"mx-4"} style={{color: '#000000'}}>
                                Environment
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/design/characters" className={"mx-4"} style={{color: '#000000'}}>
                                Characters
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/design/objects" className={"mx-4"} style={{color: '#000000'}}>
                                Objects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/design/objects" className={"mx-4"} style={{color: '#000000'}}>
                                Objects
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Collapse>
        </div>
    )
}

export default Design

