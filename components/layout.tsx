import { Alert } from "./alert"

export function Layout({ preview, children }) {
    return (
        <>
            <Alert preview={preview} />
            <main>{children}</main>
        </>
    )
}
