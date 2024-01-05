function Article(props){
    return (
        <article className={'flex flex-col w-full justify-center items-center px-12 min-w-36 space-y-10'}>
            {props.children}
        </article>
    )
}

export default Article