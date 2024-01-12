import './Post.css'
import { Link } from 'react-router-dom';

function Post({post}) {

    const time = new Date(post.createdAt);
    const PF="http://localhost:5000/images/"
  return (
    <div className='post'>
        {post.photo &&(

        <img className='postImg' src={PF + post.photo} alt="" />
        )}
         <div className="postdata">
        <div className="postInfo">
            <div className="postCats">
                {
                    post.categories.map((c)=>{
                <span className="postCat">
                    {c.name}
                </span>

                    })
                }
               
            </div>
           
            <Link to={`/post/${post._id}`} style={{color:'black', textDecoration:'none'}}>
            <span className="postTitle">
                {post.title} 
            </span>
            </Link>
            <hr />
            <span className="postDate">{time.toDateString()}</span>
        </div>
        <p className='postDesc'>{post.desc}</p>

    </div>
    </div>
  )
}

export default Post