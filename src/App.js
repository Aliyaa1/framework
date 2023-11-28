import Layout from "./component/layout/layout.jsx";


function App(){
  let toto ="tata";
  
  return(
    <Layout>
    {/* // {children} */}
    <div className="App">Bonjour: {toto}</div>
    <div className="App">toto</div>
    </Layout>
  );
};
export default App;