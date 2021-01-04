import React from "react"
import { Image, Label } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import "../../styles/packing-list.css"
import { packinglist } from "../../data"
function PackingList(props) {
  return (
    <div>
      <Layout>
      <h2 className="dark-color-head">What to bring?</h2>
        <p className="list-head">
        A list of must haves and things required to help you have a wonderful stay at IIT Roorkee!
        </p>
        <div className="legend-box">
          <p className="normal-head">Legend</p>
          <div className="flex-container">
            <div>
              <Label size="large"  className="label-blue">Blue</Label>
              <p className="label">Could be brought from home if you own them already</p>
            </div>
            <div>
              <Label className="label-red" size="large">Red</Label>
              <p className="label">Must be brought from home</p>
            </div>
            <div>
              <Label className="label-green" size="large">Green</Label>
              <p className="label">Best to purchase from Roorkee</p>
            </div>
          </div>
        </div>
        <p className="para">
          This is probably the first time most of you will be moving away from home, and even for those who were away for coaching - this will be your first experience in setting up your rooms all by yourself. The rooms in campus are typically small in size and a little tight to accommodate, a fact that often shocks/scares parents, but then you do learn alot . Here is a list curated for you to help in your packing, color-coded for your convenience.
        </p>

        <div>
          {packinglist.map(list => (
            <div className="list">
              <Label size="large" className={`${ list.type}`}>
                {list.title}
              </Label>
              <p className="label"> {list.content}</p>
            </div>
          ))}
        </div>

      </Layout>
    </div>
  )
}

export default PackingList


/*<div className="legends">
<div>
  <div className="label label-blue">
    Blue
  </div>
  <p>Could be brought from home if you own them already</p>
</div>
<div>
  <div className="label label-red">
    Red
  </div>
  <p>Could be brought from home if you own them already</p>
</div>
<div>
  <div className="label label-green">
    Green
  </div>
  <p>Could be brought from home if you own them already</p>  
</div>           
</div>


      







"<h2>Documents-</h2><p>The most important requirement. Even if you forget everything else at home be sure to carry these.</p><h2>Laptop-</h2><p>Although you can buy a laptop later, it’d be best to have one from the start.</p><p>All the other things that are required can be purchased after coming to IIT-R. On the registration day, stalls are put up inside the campus for bedding and bicycles. And all the other things that you’ll require in your room will be available to purchase right outside the campus.</p>",
*/