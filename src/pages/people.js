import {Col, List} from "reactstrap";

function People() {
    return(
        <div>
            <Col style={{width: '50%', marginLeft: '25%', textAlign: 'left'}}>
                <h1 style={{paddingBottom: '5rem'}}>
                    Meet the team at 34 Studios
                </h1>
                {/*TODO: Fill in each person's specific contributions to the game as they are made*/}
                <h2 style={{paddingBottom: '2rem'}}>
                    Tech
                </h2>
                <h4>
                    Bright Lin
                </h4>
                <List>
                    <li>
                        Project Leader
                    </li>
                    <li>
                        Level Designer
                    </li>
                    <li>
                        Gameplay Programmer and Designer
                    </li>
                    <li>
                        UI Design & Integration
                    </li>
                </List>
                <h4>
                    Andrew Hariyanto
                </h4>
                <List>
                    <li>
                        Gameplay Programmer
                    </li>
                    <li>
                        Level Designer
                    </li>
                    <li>
                        Art Integration
                    </li>
                    <li>
                        Sound Effects
                    </li>
                </List>
                <h4>
                    Ben Gelinas
                </h4>
                <List>
                    <li>
                        Gameplay Programmer
                    </li>
                    <li>
                        Level Designer
                    </li>
                    <li>
                        Art Integration
                    </li>
                    <li>
                        Lead website designer
                    </li>
                </List>
                <h4>
                    Oliver Chen
                </h4>
                <List>
                    <li>
                        Gameplay Programmer
                    </li>
                    <li>
                        Level Designer
                    </li>
                    <li>
                        AI Programming
                    </li>
                    <li>
                        Animation Integration
                    </li>
                </List>
                <h2 style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                    Art
                </h2>
                <h4>
                    Hanwen Xu
                </h4>
                <List>
                    <li>
                        3D environment asset production
                    </li>
                    <li>
                        Level / Environment art
                    </li>
                    <li>
                        Lighting
                    </li>
                </List>
                <h4>
                    Victoria Rindeiko
                </h4>
                <List>
                    <li>
                        3D character asset production
                    </li>
                    <li>
                        Character Rigging
                    </li>
                    <li>
                        Cloth Simulation
                    </li>
                    <li>
                        Animation
                    </li>
                </List>
            </Col>
        </div>
    )
}

export default People