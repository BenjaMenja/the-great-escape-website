import {Nav, Navbar, NavItem, NavLink} from "reactstrap";

function MyNavbar() {
    return (
        <div>
            <Navbar color='dark' dark style={{
                background: '#000000',
                display: 'flex',
                height: '8.5vh',
                marginBottom: '5rem',
                fontSize: '1.2rem',
                alignItems: "center"
            }}>
                <Nav className="mx-auto">
                    <NavItem>
                        <NavLink href="/" className='mx-4' style={{color: '#FFFFFF'}}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/people" className='mx-4' style={{color: '#FFFFFF'}}>
                            People
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/design" className='mx-4' style={{color: '#FFFFFF'}}>
                            Design
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/download" className='mx-4' style={{color: '#FFFFFF'}}>
                            Download
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MyNavbar