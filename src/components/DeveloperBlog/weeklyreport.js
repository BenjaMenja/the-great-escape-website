import {Col, List, Row} from "reactstrap";


function WeeklyReport(props) {
    const techentries = props.techentries
    const artentries = props.artentries
    return (
        <div style={{marginBottom: '4rem'}}>
            <h3 style={{marginBottom: '2rem'}}>Week: {props.dates}</h3>
            <Row>
                <Col style={{marginLeft: '25vw', width: '25vw', textAlign: 'left', padding: '0px'}}>
                    <h3>Tech</h3>
                    <List>
                        {techentries.map((heading, index) => <li key={index}>{heading}</li>)}
                    </List>
                </Col>
                <Col style={{width: '25vw', textAlign: 'left', padding: '0px'}}>
                    <h3>Art</h3>
                    <List>
                        {artentries.map((heading, index) => <li key={index}>{heading}</li>)}
                    </List>
                </Col>
            </Row>
        </div>
    )
}

export default WeeklyReport