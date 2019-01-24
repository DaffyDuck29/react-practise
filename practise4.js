// function welcome(Message = prompt())
// {
// return alert(`${Message} everyone`);
// }
// welcome();



// let welcome = message => alert(`hello ${message}`);
// welcome('ali');



// let createblog = (username,Message) => alert(`hello ${username} and ${Message}`);
// createblog("ali","hello world");

let blog = (title = prompt('title'), body = prompt('blog')) => {
    if(!title)
    {
        throw new Error('title is required');
    }
    if(!body)
    {
        throw new Error('please write your blog');
    }
    return alert(`${title} - ${body}`);

}
blog();

