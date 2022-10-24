import { FC } from "react"
import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react"

import { User } from "../../interfaces"


interface Props {
    user: User
}

export const UserInfo: FC<Props> = ({ user }) => {
    return (
        <Grid key={user.id} sm={6} md={4} lg={4} xl={4}>
            <Card className="animate__animated animate__backInUp">
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={user.avatar}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Card example background"
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#ffffff66",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col>
                            <Text h3 color="black">
                                {user.first_name} - {user.second_name}
                            </Text>
                            <Text size={12} weight="bold" transform="uppercase" color="black">
                                {user.email}
                            </Text>
                        </Col>
                        <Col>
                            <Row justify="flex-end">
                                <Button flat auto rounded color="warning">
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        Edit
                                    </Text>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
