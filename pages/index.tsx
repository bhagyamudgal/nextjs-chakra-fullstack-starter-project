import Head from "next/head";
// chakra-ui
import { Box } from "@chakra-ui/react";
import CustomContainer from "@/components/CustomContainer";

export default function Home() {
    return (
        <Box>
            <Head>
                <title>Home</title>
                <meta name="description" content="" />
            </Head>
            <CustomContainer>Home page container</CustomContainer>
        </Box>
    );
}
