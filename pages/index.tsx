import Head from "next/head"
import { Item } from "../components"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <p>Test</p>
            <Item />
        </div>
    )
}
