import Link from "next/link";
import Image from "next/image";
// import "../styles/global.css";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import React from "react";

type AppProps = {
    Component: React.ComponentType;
    pageProps: any; // Replace 'any' with the specific type of your 'pageProps' if available
};



export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (

        <React.Fragment>
            <Header />
            <Component {...pageProps} />
        </React.Fragment>

    );
}
