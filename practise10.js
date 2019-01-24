class blog 
{
    constructor(username,title,blogg)
    {
        this.username = username;
        this.title = title;
        this.blogg = blogg;
    }
 info() {
    console.log(`The username is ${this.username} and title is ${this.title} and blog is ${this.blogg} `);
 }    
}
const trip = new blog('Ali','Technology','Iphone');

// console.log(trip.info());

// ham = 'johnny';

class expedetion extends blog {
    constructor(username , title , blogg , ham )
    {
        super(username,title,blogg)
           this.ham = ham;
    }
    info(){
        console.log(`the username is ${this.username} and title is ${this.title} and blog is ${this.blogg} and picture is ${this.ham.join(" and ")}`);
    }
    }
const main = new expedetion('Ali','Technology','Iphone',['image','name','holland']);
console.log(main.info());