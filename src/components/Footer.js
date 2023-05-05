import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return(
        <footer classname="site-footer">
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Where do you want to go?</h5>
                        <ul className="list">
                            <li>
                                About
                            </li>
                            <li>
                                Experience
                            </li>
                            <li>
                                Projects
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </Col>
                    
                    <Col xs='6' sm='3' className="'text-center">
                        <h5>Check Me Out!</h5>
                        <a
                            className="btn btn-social-icon btn-github"
                            href="https://github.com/Dericknewton1979" target="_blank"
                        >
                            <i className="fa fa-github" />
                        </a>{' '}
                        <a
                            className="btn btn-social-icon btn-linkedin"
                            href="https://www.linkedin.com/in/derick-newton-299a7b166/" target="_blank"
                        >
                            <i className="fa fa-linkedin" />
                        </a>{' '}
                        <a
                            className="btn btn-social-icon btn-codepen"
                            href="https://codepen.io/Dnewton1979" target="_blank"
                        >
                            <i className="fa fa-codepen" />
                        </a>{' '}
                    </Col>

                    <Col sm='4'>
                    <a
                        role='button'
                        className="btn btn-link"
                        href="tel:+12066052332" target="_blank"
                    >
                        <i className="fa fa-phone" /> 1-206-605-2332
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:dericknewton1979@hotmail.com' target="_blank"
                    >
                        <i className='fa fa-envelope-o' /> dericknewton1979@hotmail.com
                    </a>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer;