function Error({ dataName, onRetry }) {
    const message = `Failed to load  ${dataName}.`;

    // 
    const sectionStyles = {
        width: '100%',
        height: '500px',
        backgroundColor: 'var(--farmWhite)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    // 
    return (
        <section style={sectionStyles}>
            <div>{message}</div>
            <button onClick={() => { onRetry() }}>Retry</button>
        </section>
    )
}

export default Error;