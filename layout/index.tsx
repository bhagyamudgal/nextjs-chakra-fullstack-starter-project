import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function Layout({ children }: Props) {
    return (
        <Flex direction="column" minH="100dvh">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* header */}
            <Header />

            {/* page */}
            <Box flexGrow={1}>{children}</Box>

            {/* footer */}
            <Footer />
        </Flex>
    );
}

export default Layout;
