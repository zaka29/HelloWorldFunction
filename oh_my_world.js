function OhHelloWorld(count){
    
    count = count || 1
    
    var str = '';

    str += !(count % 4) ? 'Hello' : '';
    str += !(count % 5) ? 'World' : ''; 
    
    console.log(str || count)

    if(count >= 100) return

    OhHelloWorld(++count)
};
