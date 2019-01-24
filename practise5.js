let pakistan = {
    //add property
    blog:['name','title','blog'],
    blog2:['ali','technology','iphone is a trillion dollar company'],
    //add method
   PrintWithDash: function(){ setTimeout(() => {
       console.log(this.blog.join(' - '))
        alert(this.blog2.join(' - '))
},1000);
        
    
    
   }
};
pakistan.PrintWithDash();