import {Button} from "reactstrap";

function DesignReturn() {
    return(
        <div>
            <Button color='primary' onClick={() => {window.location.href = '/the-great-escape-website/design'}}>
                <a>Back to Design</a> <i className={'bi-arrow-right'}></i>
            </Button>
        </div>
    )
}

export default DesignReturn