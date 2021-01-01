import React, { Component } from "react"
import Layout from "../../components/layout"
import { Accordion, Icon, Segment } from "semantic-ui-react"
import "../../styles/faqs.css"
import { faqs } from "../../data"
//import AccordionFAQs from "../../components/accordion"

export default class FAQs extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    var i = 0
    return (
      <Layout>
        <h2 className="dark-color-head">FAQs</h2>
        <p className="list-head">
          A list of frequent queries asked by freshers’ and prospective students
        </p>
        <Accordion fluid styled>
          {faqs.map(faq => (
            <div className="accordion-item">
              <Accordion.Title
                active={activeIndex === faq.index}
                index={faq.index}
                onClick={this.handleClick}
              >
                {faq.title}
                <Icon name="dropdown" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === faq.index}>
                {faq.content}
              </Accordion.Content>
            </div>
          ))}
        </Accordion>
      </Layout>
    )
  }
}

{
  /* <Accordion fluid styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            What are the steps I need to take to get a branch change? What
            rituals to perform and what deity to pray?
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            It is a general belief that a branch change is a big task and a very
            difficult thing to achieve. However with a little hard work and
            focus it is possible. The modus operandi for changing your branch is
            to get a good GPA. For this, firstly attend classes regularly.
            Though this might seem tedious and boring, it has its benefits. It
            helps prevent a last minute rush when exams are near. Secondly
            making proper notes is also important – apart from making you
            popular for your famous notes, it also helps summarize the subject
            easily, in your own words. Last but not least, sacrifices - yes,
            sorry to disappoint you but to change the branch sometimes you may
            have to miss some chapos (lingo at IITR for parties) or various
            events which happen round the semester in campus. You might even
            need to ditch the Pronites during Thomso. However, branch change at
            IITR happens at the end of the first semester itself, so it is only
            a semester for which you might have to miss these things. While
            religiously sacrificing everything materialistic is a good idea, do
            not forego recruitments to different groups, because it is these
            which will make your 4-5 years in college worth remembering.
            Instead, make your few sacrifices count using proper time
            management. The cutoffs for each branch vary each year and thus it
            is not possible to predict the branch for a particular grade point.
            However, the better the CGPA, the higher your chances. Even if you
            don’t get it, trying for branch change has its advantages because
            you end up with a good solid CGPA.
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            What are the steps I need to take to get a branch change? What
            rituals to perform and what deity to pray?
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            It is a general belief that a branch change is a big task and a very
            difficult thing to achieve. However with a little hard work and
            focus it is possible. The modus operandi for changing your branch is
            to get a good GPA. For this, firstly attend classes regularly.
            Though this might seem tedious and boring, it has its benefits. It
            helps prevent a last minute rush when exams are near. Secondly
            making proper notes is also important – apart from making you
            popular for your famous notes, it also helps summarize the subject
            easily, in your own words. Last but not least, sacrifices - yes,
            sorry to disappoint you but to change the branch sometimes you may
            have to miss some chapos (lingo at IITR for parties) or various
            events which happen round the semester in campus. You might even
            need to ditch the Pronites during Thomso. However, branch change at
            IITR happens at the end of the first semester itself, so it is only
            a semester for which you might have to miss these things. While
            religiously sacrificing everything materialistic is a good idea, do
            not forego recruitments to different groups, because it is these
            which will make your 4-5 years in college worth remembering.
            Instead, make your few sacrifices count using proper time
            management. The cutoffs for each branch vary each year and thus it
            is not possible to predict the branch for a particular grade point.
            However, the better the CGPA, the higher your chances. Even if you
            don’t get it, trying for branch change has its advantages because
            you end up with a good solid CGPA.
          </Accordion.Content>
        </Accordion> */
}
