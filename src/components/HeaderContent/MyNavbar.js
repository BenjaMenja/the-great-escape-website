import {Nav, Navbar, NavItem, NavLink} from "reactstrap";

function MyNavbar() {
    return (
        <div>
            <Navbar color='dark' dark style={{
                display: 'flex',
                height: '8.5vh',
                marginBottom: '5rem',
                fontSize: '1.2rem',
                alignItems: "center"
            }}>
                <Nav className="mx-auto">
                    <NavItem>
                        <NavLink href="/the-great-escape-website" className='mx-4' style={{color: '#FFFFFF'}}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/the-great-escape-website/people" className='mx-4' style={{color: '#FFFFFF'}}>
                            People
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/the-great-escape-website/design" className='mx-4' style={{color: '#FFFFFF'}}>
                            Design
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/the-great-escape-website/download" className='mx-4' style={{color: '#FFFFFF'}}>
                            Download
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MyNavbar