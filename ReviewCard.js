import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const ReviewCard = () => {
    return (

        <CardGroup className='reviewCard'>
            <Card>
                <Card.Body>
                    <Card.Title>Customer Review</Card.Title>
                    <Card.Text>
                        I am a oneplus user since last 8 years.
                        I used oneplus 2 for almost 3 years. I was using oneplus 6 for last 5 years. (5 years of seemless usage and gaming. It had started heating rapidly so I decided to switch)
                        Oneplus 11r is a great device. Feels premium and it's probably the best smartphone in 40000.
                        Camera can be better, I am hoping oneplus will bring update to improve it.
                        Overall flagship killer is back at it again.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 5 Months ago</small>
                </Card.Footer>
                <br />
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Customer Review</Card.Title>
                    <Card.Text>
                        Macros and tele are really good. But the main sensor could do much better in indoors group photos. The sensor is very good it could be the algorithm with miui camera app which can also be improved via updates. Video quality is very good. Performance and charging time is top notch but battery backup could be improved. A little heating is there but it's not much of a concern.

                        I'm down to only 2 things to consider in this phone over OP11, that is 75mm lens which also doubles up a an excellent macro lens and wireless charging. Feels like I spent more money only to get these two things which were not in OP11.

                        Anyways nice buy.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 1 Month ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Customer Review</Card.Title>
                    <Card.Text>
                        Got this as my secondary smartphone as I am a very heavy user.
                        There are just 3 things that i would like to say about this device as i guess everyone has done their research about it before purchasing it.
                        1. Performance is great & the battery life is good too as the SoC is efficient. At this price, have no second thoughts if these 2 things are your priorities. Go for it.

                        2. Cameras, Design, Build : Not something to be very highly praised.Expect Average to Good pics from the stock Camera app. Gcam is still not optimised but you can get better night shots & better sharpness with HDR+ in shots if you get a stable version. i tried 10 versions of it.
                        Design & Build quality is alright. Not premium in this price range. As it's my secondary device wasn't looking for it either way. it'll do the job however.

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 20 Days ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>

    )
}

export default ReviewCard