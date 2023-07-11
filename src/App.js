import './App.css';
import CardMenu from './components/cardMenu/cardMenu'
import Cardshow from './components/card-show/Cardshow';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {  useState } from 'react';
const Data=[
  {
    id:"1",
    src:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw214bee3e/images/hi-res/51O2JRVAC1A00.jpg?sw=360&sh=360",
    name:"Regal Yazhi Bangle",
    prize:"₹ 387633",
    stars:[
      { star:true,},
      { star:true,},
      { star:true,},
      { star:true,},
      { star:false,}
    ]
  },
  {
    id:"2",
    src:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwca79cc43/images/hi-res/51O2JRVAB1A00_1.jpg?sw=360&sh=360",
    name:"Simhazhi Bangle",
    prize:"₹ 446981",
    stars:[
      { star:true,},
      { star:true,},
      { star:true,},
      { star:true,},
      { star:false,}
    ]
  },
  {
    id:"3",
    src:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1f2c44aa/images/hi-res/51F2KCVAD1A00.jpg?sw=360&sh=360",
    name:"Bangle for Kids",
    prize:"₹ 375798",
    stars:[
      { star:true,},
      { star:true,},
      { star:true,},
      { star:true,},
      { star:false,}
    ]
  },
  {
    id:"4",
    src:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw86bfbf7d/images/hi-res/51O3EXVIV1A00_1.jpg?sw=360&sh=360",
    name:"Opulent Bangle",
    prize:"₹ 193528",
    stars:[
      { star:true,},
      { star:true,},
      { star:true,},
      { star:true,},
      { star:false,}
    ]
  },
  {
    id:"5",
    src:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw56b2ce97/images/hi-res/51D2D1VXD1A00.jpg?sw=360&sh=360",
    name:"Contemporary Bangle",
    prize:"₹ 117249",
    stars:[
      { star:true,},
      { star:true,},
      { star:true,},
      { star:true,},
      { star:false,}
    ]
  },
  {
    id:"6",
    src:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw72c61a37/images/hi-res/51D2A3VHB1A00_1.jpg?sw=360&sh=360",
    name:"Floral Bangle",
    prize:"₹ 78907",
    stars:[
      { star:true,},
      { star:true,},
      { star:false,},
      { star:true,},
      { star:false,}
    ]
  },
  {
    id:"7",
    src:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw52a5eb6b/images/hi-res/510115VEA2A00.jpg?sw=360&sh=360",
    name:"Divine Bangle",
    prize:"₹ 164779",
    stars:[
      { star:true,},
      { star:true,},
      { star:true,},
      { star:true,},
      { star:false,}
    ]
  },
  {
    id:"8",
    src:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4163d817/images/hi-res/51O2AKVCL2A00_1.jpg?sw=360&sh=360",
    name:"Pankhudi Bangle",
    prize:"₹ 431782",
    stars:[
      { star:false,},
      { star:true,},
      { star:false,},
      { star:false,},
      { star:false,}
    ]
  }
]
export default function App() { 
  const [card,cardCount]=useState(0)
   function findCount(pushdata,check) {
    console.log(check)
    if(check){
      cardCount(card + 1)
    }else{
      cardCount(card -1)
    }
  }
  // if needed for nex page let use this otherwise simple
// function addremove(card=[],isAvailable=[]){
//  return card.some((result)=>result.id !== isAvailable.id )
//  }
  return (
    <div className="App">
       <CardMenu card={card}/>
       <Header />
       <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"> 
               {Data.map((e,i) =>(<Cardshow data={e}  findCount={findCount} key={`card-show-${i}`} />))}
          </div>
        </div>
    </section> 
    <Footer />
    </div>
  );
}