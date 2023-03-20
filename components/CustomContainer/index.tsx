import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function CustomContainer({ children }: Props) {
    return <Container maxW="7xl">{children}</Container>;
}

export default CustomContainer;
