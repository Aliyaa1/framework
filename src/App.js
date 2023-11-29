import Layout from "./component/layout/layout.jsx";


function App(){
  let toto ="tata";
  
  return(
    <Layout>
    {/* // {children} */}
    <section >
    <div class="h-screen flex items-center justify-center">
       <h1 className="title" class=" text-white text-7xl font-serif md:font-mono font-extrabold text-center 
"  >Portfolio</h1>
    </div>
   
    
    {/* <div className="App">Bonjour: {toto}</div>
    <div className="App">toto</div> */}
    </section>
    </Layout>
  );
};
export default App;