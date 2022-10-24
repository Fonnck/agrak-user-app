import { FC } from "react";
import { Container, styled } from "@nextui-org/react";

import { Nav } from "../ui/Nav";

/* interface Props {
    children: JSX.Element
} */

export const Layout = ({ children }) => {

    const Box = styled("div", {
        boxSizing: "border-box",
    });

    return (
        <div style={{width:"100%"}}>
            <Container>
                {children}
            </Container>
        </div>

    )
}
