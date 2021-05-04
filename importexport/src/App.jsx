
const youtuber="Thapa technical";
 const favprog="Reactjs";
 function myname(){
   let name='vinod';
   return name;
 }
 function mynames(){
   let names='vinod thapa';
   return names;
 }
 export default youtuber;
//  When we use default at the time of exporting then at the time of importing we can any name 
// to the file.
export {favprog,myname,mynames};