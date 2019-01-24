// let blog ={
//     title:'Blog title',
//     description:'description of blog',
//     username:'ali haider'

// };
// let {title,description} = blog;
// title = "technology";
// console.log(title,'  ',description);


// let website =  ({title,blog}) => {
//     console.log(`${title} and ${blog}`);
// }

// website({
//     title: 'Technology',
//     blog:'iphone'
// })
let website =  ({title,blog}) => {
    alert(`${title} and ${blog}`);
}

website({
    title:prompt(),
    blog:prompt()
})