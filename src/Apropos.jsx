// import Header from "./component/header";
import Layout from "./component/layout/layout.jsx";

function Apropos(){
return (
    <Layout>
        <div className="text-white font-serif italic w-screen h-screen">
<h1 className="absolute right-12 underline top-16 text-2xl"> A propos</h1>
<hr class="w-1 h-80 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10" />
<p className="my-3 absolute right-3/4 top-24">HTML/CSS</p>
<p className="my-3 absolute right-3/4 top-32">Javascript</p>
<button class=" w-24 h-10 bg-black text-white absolute top-80 right-2 border-4 border-white-500/100 hover:bg-slate-500 rounded-lg

">Mon cv</button>
</div>
    </Layout>
);
}

export default Apropos;