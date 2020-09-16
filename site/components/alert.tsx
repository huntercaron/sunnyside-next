export function Alert({ preview }) {
    return (
        <>
            {preview && (
                <>
                    This page is a preview.
                    <a href="/api/exit-preview">Click here</a>
                    to exit preview mode.
                </>
            )}
        </>
    )
}
