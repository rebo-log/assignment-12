function string_join(string , c ) {
    let space = ' ';
    let x = '-';
     let a = `#`;
     if ( c == ` `){
     return  string.split(space).join(space).trim();
     }else if ( c == x){
       return  string.split(space).join(x).trim();
     }else if (c == a  ){
      return  string.split(space).join(a).trim();
     }else {
      return  string.split(space).join(`,`).trim() ;
     }
     
  }
   console.log(string_join(`i love programming`,``)); 
   