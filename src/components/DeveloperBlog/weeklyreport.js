import {Col, List, Row} from "reactstrap";


function WeeklyReport(props) {
    const techentries = props.techentries
    const artentries = props.artentries
    const teamentries = props.teamentries
    const hasTeamEntries = (teamentries) => {
        if (teamentries !== undefined) {
            if (teamentries.length > 0) {
                return true
            }
        } else return false
        return false
    }
    return (
        <div style={{marginBottom: '4rem'}}>
            <h3 style={{marginBottom: '2rem'}}>Week: {props.dates}</h3>
            {hasTeamEntries(teamentries) ? <>
                <h4 style={{marginBottom: '2rem'}}>Major Team Milestones</h4>
                <Col style={{marginLeft: '42.5vw', width: '20vw', textAlign: 'left', padding: '0px'}}>
                    <List>
                        {teamentries.map((heading, index) => <li key={index}>{heading}</li>)}
                    </List>
                </Col>
                </>
                : null}
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