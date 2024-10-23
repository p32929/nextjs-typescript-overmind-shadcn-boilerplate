import { config } from "@/overmind/OvermindHelper"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { createOvermind } from "overmind"
import { Provider } from "overmind-react"
import React, { useEffect, useLayoutEffect } from "react"
// import { SessionProvider } from "next-auth/react"

const overmind = createOvermind(config)

const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const AllProviders: React.FC<any> = (props) => {

    useIsomorphicLayoutEffect(() => {
        // This will now only run on the client
        console.log("Running useLayoutEffect-like logic");
    }, []);

    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="light"
            storageKey="theme"
            disableTransitionOnChange>
            <Provider value={overmind}>
                {props.children}
                {/* <SessionProvider>
                    
                </SessionProvider> */}
            </Provider>
        </NextThemesProvider>
    )

}

export default AllProviders;