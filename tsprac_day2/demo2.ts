interface IPost{
    
    title: string;
    id: number;
    desc: string;
}


interface IUser{
    
    id: number;
    name: string;
    age: number;
}


// const fetchPostData = async (path: string):Promise<IPost[]> =>{

//    const res =  await fetch('http://example.com${path}');

//    return res.json();
// }

// const fetchUserData = async (path: string):Promise<IUser[]> =>{

//     const res =  await fetch('http://example.com${path}');
 
//     return res.json();
//  }



 const fetchData = async<T> (path: string):Promise<T[]> =>{

    const res =  await fetch('http://example.com${path}');
 
    return res.json();
 }



//  (async)=>{

//     const posts = await fetchPostData('/post');
//     posts[0];
//  }();

//  (async)=>{

//     const users = await fetchUserData('/users');
//     users[0];
//  }();



(async()=>{

        const users = await fetchData<IPost[]>('/posts');
        users[0];
        console.log(users);
})();
    

(async()=>{

        const users = await fetchData<IUser[]>('/users');
        users[0];
        console.log(users);
        
})();
    