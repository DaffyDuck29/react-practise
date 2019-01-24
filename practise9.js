function Blog( title , description)
{
this.title = title;
this.description = description;
}

Blog.prototype.ali = function(){
    console.log(`${this.title} and ${this.description} `);
}

var blog = new Blog('technology','iphone xs is the best gaming phone of 2018');

console.log(blog.ali());

// function ali(cls , date)
// {
//     this.cls = cls;
//     this.date = date;
// }
// ali.prototype.blog = function(){
//     console.log(`${this.cls} and this is ${this.date}`);
// }

// var cle = new ali('tecnology','iphone is best game');
// console.log(cle.blog());