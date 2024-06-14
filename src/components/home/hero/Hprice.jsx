import React from 'react'
import Title from '../../common/title/Title'
import PriceCard from '../../pricing/PriceCard'
const Hprice =() =>{
  return (
      <>
          <section className="hprice padding">
              <div className="container">
                  <Title subtitle='OUR PRICING' title='Pricing & Packages' />
                  <div className="price  grid">
                    <PriceCard/>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Hprice