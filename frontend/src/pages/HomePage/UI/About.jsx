import React from "react";
import { CardGroup, Card } from "react-bootstrap"
import styles from './About.module.css';
export const About = () => {
    return (
        <div classname={`h-full ${styles.body} mx-2`}>
            <CardGroup>
                <div>
                    <h3 className="text-2xl font-extrabold leading-6 my-5 text-black head-text">step1</h3>
                </div>
                <Card className={styles.card1}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <div>
                    <h3 className="text-2xl font-extrabold leading-6 my-5 text-black head-text">step2</h3>
                </div>
                <Card className={styles.card2}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <div>
                    <h3 className="text-2xl font-extrabold leading-6 my-5 text-black head-text">step3</h3>
                </div>
                <Card className={styles.card3}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}