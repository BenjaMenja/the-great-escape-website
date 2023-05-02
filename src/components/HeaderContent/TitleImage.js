function TitleImage(props) {
    return (
        <div style={{color: '#000000', paddingBottom: props.padding, backgroundColor: '#7c7c7c'}}>
            {/*TODO: Background image will go here and maybe a logo?*/}
            <h1 style={{paddingTop: '5rem'}}>
                The Great Escape
            </h1>
            <h3 style={{paddingTop: '2rem'}}>
                A stealth mission game by 34 Studios
            </h3>
        </div>
    )
}

export default TitleImage