// let [,blog]= ['Ali','Haider','title']
// console.log(blog);

// var name = 'title';
// var blog = 'description';
// var output =function() {
//     console.log(`this is the ${name} of our blog and ${blog} is given below`);
// };
// var total = {name , blog , output};
// total.output();

var total = {
    name: 'title',
    bsc: 'description',
    output:function(){
        console.log(`this is the ${this.name} of our blog and ${this.bsc} is given below`);
    }
};
total.output();