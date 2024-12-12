import blogPosts from "../content.js"

const checkIdExists = (req, res, next) =>{
    const postId = parseInt(req.params.id);
    let answer = false;
    for (let i = 0; i < blogPosts.length; i++) {
        if (blogPosts[i].id === postId) {
            answer = true;
            break
        }
    }
    if (answer===false) {
        res.statusCode =404;
        res.json({
            error: true,
            message: "Post non trovato"
        })
    } else{
        next()
    }
}

export default checkIdExists