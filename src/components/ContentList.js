import { useEffect, useState } from 'react'
import Content from './Content'
import "./ContentList.css"
import { products } from "../product_data"

function ContentList() {
  const percentOff = 40;
  const [basic, setBasic] = useState(9.99);
  const [pro, setPro] = useState(19.99);
  const [master, setMaster] = useState(29.99);
  const [yearly, setYearly] = useState(false);

  const handleClick = () => {
    setYearly(!yearly);
  }

  //Calculate Price Yearly
  const calcYearly = (num, percentOff) => {
    return (num * 12) * (100 - percentOff) / 100;
  }

  useEffect(() => {
    if (yearly) {
      setBasic(calcYearly(basic, percentOff).toFixed(0));
      setPro(calcYearly(pro, percentOff).toFixed(0));
      setMaster(calcYearly(master, percentOff).toFixed(0));
    } else {
      setBasic(9.99);
      setPro(19.99);
      setMaster(29.99);
    }
  }, [yearly])

  return (
    <section className='main'>
      <div className="container">
        <div className="title">
          <h2>Pricing</h2>
          <div className="--line"></div>

          <div className='--flex-center --my2'>
            <p>Monthly</p>
            <div className='--mx2'>
              <span className={yearly ? "toggle-btn toggled" : "toggle-btn"} onClick={handleClick}>
                <div className={yearly ? "ball move" : "ball"}></div>
              </span>
            </div>
            <p>Yearly</p>
          </div>
        </div>

        <div className="sub-plans">
          <Content plan={"Basic"} theme={"theme1"} price={basic} packages={products[0].package} yearly={yearly} percentOff={percentOff} onBuy={() => alert(basic)} />
          <Content plan={"Pro"} theme={"theme2"} price={pro} packages={products[1].package} yearly={yearly} percentOff={percentOff} onBuy={() => alert(pro)} />
          <Content plan={"Master"} theme={"theme3"} price={master} packages={products[2].package} yearly={yearly} percentOff={percentOff} onBuy={() => alert(master)} />
        </div>

      </div>
    </section>
  )
}

export default ContentList