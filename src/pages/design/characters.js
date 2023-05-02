import DesignReturn from "../../components/design/DesignReturn";
import {Col, Row} from "reactstrap";
import ImageCaption from "../../components/design/ImageCaption";
import daughter from "../../images/g_controls.PNG";
import mom from "../../images/m_controls.PNG";
import aunt from "../../images/a_controls.PNG"
import daughtertextured from "../../images/Girl_Front.png"
import daughtertextured2 from "../../images/Girl_Side.png"

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
                        <ImageCaption source={aunt} caption={'Aunt model w/ controls'} width={'60%'} />
                    </Col>
                    <Col md={'6'}>
                        <ImageCaption source={daughter} caption={'Daughter model w/ controls'} width={'60%'} />
                    </Col>
                </Row>
                <Row>
                    <Col md={'6'}>
                        <ImageCaption source={mom} caption={'Mother model w/ controls'} width={'60%'} />
                    </Col>
                    <Col md={'6'}>
                        <ImageCaption source={daughtertextured} caption={'Daughter model w/ textures (Front View)'} width={'60%'} />
                    </Col>
                </Row>
                <Row>
                    <Col md={'6'}>
                        <ImageCaption source={daughtertextured2} caption={'Daughter model w/ textures (Side View)'} width={'60%'} />
                    </Col>
                </Row>
            </div>
            <DesignReturn />
        </div>
    )
}
export default Characters