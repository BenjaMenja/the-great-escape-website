import DesignReturn from "../../components/design/DesignReturn";
import {Col, Row} from "reactstrap";
import ImageCaption from "../../components/design/ImageCaption";
import microwavefridge from "../../images/microwave-fridge-opening.gif";

function Objects() {
    return (
        <div>
            <h1>
                Objects: Hanwen Xu
            </h1>
            <DesignReturn />
            <div style={{margin: "auto", width: '80%'}}>
                <Row>
                    <Row>
                        <Col md={'6'}>
                            <ImageCaption source={microwavefridge} caption={"Microwave and Fridge"} width={"90%"}/>
                        </Col>
                    </Row>
                </Row>
            </div>
            <DesignReturn />
        </div>
    )
}
export default Objects