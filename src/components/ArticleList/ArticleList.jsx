import data from '../../../articles.json'
import Article from '../Article/Article'

const ArticleList = () =>{
    return(
        <div className='mt-5 grid sm:mt-0 m-auto max-w-2xl gap-5 sm:grid-cols-2 lg: grid-cols-3 lg:max-w-[1000px]'>
        {
            data.map( (props, index) => <Article key={index} {...props}  /> )
        }
        </div>
    )
}

export default ArticleList