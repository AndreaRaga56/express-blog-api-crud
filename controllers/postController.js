import blogPosts from "../content.js";

function index(req, res) {
    const filterTag = req.query.tags;
    let postDaMostrare =  blogPosts;
    if (filterTag!==undefined){
        postDaMostrare = blogPosts.filter((curElem, i)=>(blogPosts[i].tags.includes(filterTag)));
    }    
    const bacheca = {
        blogPosts: postDaMostrare,
        tot: postDaMostrare.length
    };
    res.json(bacheca);
}

function show(req, res) {
    const postId = parseInt(req.params.id);
    let answer = 0;
    for (let i = 0; i < blogPosts.length; i++) {
        if (blogPosts[i].id === postId) {
            answer = blogPosts[i];
        }
    }

    if (!isNaN(answer)) {
        res.sendStatus(404);
    }
    res.json(answer);
};

function store(req, res) {
    res.json("Hai creato un nuovo elemento")
};

function update(req, res) {
    res.json("Hai modificato interamente un elemento")
};

function modify(req, res) {
    res.json("Hai modificato parzialmente un elemento")
};

function destroy(req, res) {
    const postId = parseInt(req.params.id);
    let indexDaEliminare = "Default";
    for (let i = 0; i < blogPosts.length; i++) {
        if (blogPosts[i].id === postId) {
            indexDaEliminare = i;
        }
    }
    if (isNaN(indexDaEliminare)) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        });
    } else {
        blogPosts.splice(indexDaEliminare, 1);
        // res.json(blogPosts)
    }
};

export default { index, show, store, update, modify, destroy };
