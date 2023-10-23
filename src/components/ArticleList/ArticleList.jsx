import data from '../../../articles.json'

const ArticleList = () =>{
    return(
        <div className='mt-5 grid sm:mt-0 m-auto max-w-2xl gap-5 sm:grid-cols-2 lg: grid-cols-3'>
        {
            data.map( props => <p>{props.title}</p>)
        }
        </div>
    )
}

export default ArticleList