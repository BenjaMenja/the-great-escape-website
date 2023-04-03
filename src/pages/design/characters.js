import DesignReturn from "../../components/design/DesignReturn";
import {Col, Row} from "reactstrap";
import ImageCaption from "../../components/design/ImageCaption";
import daughterfront from "../../images/daughter_front.png"
import daughterside from "../../images/daughter_side.png"
import motherfront from "../../images/mother_front.png"
import motherside from "../../images/mother_side.png"
import auntfront from "../../images/aunt_front.png"
import auntside from "../../images/aunt_side.png"

function Characters() {
    return (
        <div>
            <h1>
                Characters: Victoria Rindeiko
            </h1>
            <DesignReturn />
            <div style={{margin: 'auto', width: '80%'}}>
                <Row>
                    <Col md={'6'}>
                        <ImageCaption source={daughterfront} caption={'Daughter (Front View)'} width={'60%'} />
                    </Col>
                    <Col md={'6'}>
                        <ImageCaption source={daughterside} caption={'Daugher (Side View)'} width={'19%'} />
                    </Col>
                </Row>
                <Row>
                    <Col md={'6'}>
                        <ImageCaption source={motherfront} caption={'Mother (Front View)'} width={'60%'} />
                    </Col>
                    <Col md={'6'}>
                        <ImageCaption source={motherside} caption={'Mother (Side View)'} width={'24%'}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={'6'}>
                        <ImageCaption source={auntfront} caption={'Aunt (Front View)'} width={'60%'} />
                    </Col>
                    <Col md={'6'}>
                        <ImageCaption source={auntside} caption={'Aunt (Side View)'} width={'20.5%'} />
                    </Col>
                </Row>
            </div>
            <DesignReturn />
        </div>
    )
}
export default Characters