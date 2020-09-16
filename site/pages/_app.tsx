import type { AppProps } from "next/app"
import "ress/dist/ress.min.css"
import "../lib/base.css"

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App
