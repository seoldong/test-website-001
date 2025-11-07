function Loading() {

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
            <div>Loading...</div>
        </section>
    )
}

export default Loading;