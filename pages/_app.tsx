import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

// chakra-ui
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

// components
import Layout from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ChakraProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </RecoilRoot>
    );
}
