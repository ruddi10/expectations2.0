import { graphql } from "gatsby"

export const dropups = [
  {
    value: "Academics",
    fields: [
      "Branches",
      "CGPA",
      "Branch Change",
      "Scholarships",
      "NPTEL",
      "Research",
      "First Semester",
      "PG and Phd",
    ],
  },
  {
    value: "Co-Curricular",
    fields: [
      "Cultural Groups",
      "Technical Groups",
      "Sports",
      "Inter-IIT",
      "NCC/NSS/NSO",
    ],
  },
  {
    value: "Campus",
    fields: [
      "Hostels",
      "How to reach",
      "Places",
      "Gallery",
      "Healthcare(Covid Measures)",
      "Eateries",
    ],
  },
  {
    value: "Student's Corner",
    fields: [
      "To-do list",
      "Packing list",
      "IITR Lingo",
      "In campus commute and payments",
      "FAQs",
    ],
  },
  { value: "Experiences", fields: ["Freshman", "Alumni"] },
  { value: "Placements", fields: ["Analysis"] },
  {
    value: "Parent's Section",
    fields: [
      "Anti-Ragging policy",
      "Banking, Fees and loans",
      "Where to stay",
      "Secqurity",
    ],
  },
]

export const h2data = [
  {
    title: "Campus Groups",
    Content:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. ",
    src:
      "https://cdn.dribbble.com/users/1036545/screenshots/2491401/iitr_dribbble.png",
    link: "/campus-groups",
  },
  {
    title: "Hostels",
    Content:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. ",
    src:
      "https://cdn.dribbble.com/users/1036545/screenshots/2491401/iitr_dribbble.png",
    link: "/hostels",
  },
  {
    title: "Eateries",
    Content:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. ",
    src:
      "https://cdn.dribbble.com/users/1036545/screenshots/2491401/iitr_dribbble.png",
    link: "/esteries",
  },
]

export const testimonialExcerpt = [
  {
    text:
      "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.",
    author: "Ketan Dhanuka",
    branch: "Applied Mathematics, IITR’24",
    source: "gg_logo.png",
  },
  {
    text:
      "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.",
    author: "Ketan Dhanuka",
    branch: "Applied Mathematics, IITR’24",
    source: "gg_logo.png",
  },
  {
    text:
      "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.",
    author: "Ketan Dhanuka",
    branch: "Applied Mathematics, IITR’24",
    source: "gg_logo.png",
  },
]

export const homeColumn = [
  {
    heading: "Student’s Corner",
    body:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
    to: "/",
    isReverse: false,
    backdrop: "tr",
    image: "dummy_image.png",
  },
  {
    heading: "Student’s Corner",
    body:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
    to: "/",
    isReverse: true,
    backdrop: "tl",
    image: "dummy_image.png",
  },
  {
    heading: "Student’s Corner",
    body:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
    to: "/",
    isReverse: false,
    backdrop: "tr",
    image: "dummy_image.png",
  },
  {
    heading: "Student’s Corner",
    body:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
    to: "/",
    isReverse: true,
    backdrop: "tl",
    image: "dummy_image.png",
  },
]

export const scholarships = [
  {
    title: "Merit-Cum-Means Scholarship",
    content:
      "<p>This scholarship is awarded to 25% of the undergraduate students based on their family income and merit.<br><strong>How to apply-</strong> The form is available on channelI notice board in the beginning of autumn semester. It has to be submitted along with an affidavit and an income certificate.</p>",
    src:
      "https://www.iitr.ac.in/admissions/pages/Financial_Aids+Scholarships.html",
  },
  {
    title: "Aditya Birla Scholarship",
    content:
      "<p>Students in the top 20 of the institute according to their JEE ranks are eligible to apply for this scholarship, which they receive after clearing a written round and an interview. This scholarship is given to students studying at IITs and BITS Pilani.</p> <p><strong>How to apply-</strong> Applications are submitted via the Dean as soon as the first week of August. These applications include a write-up about one’s aims and vision for the society. Shortlisted candidates have to appear for an interview in Mumbai in mid-October.</p>",
    src: "http://www.adityabirlascholars.net/",
  },
  {
    title: "Inspire Scholarship",
    content:
      "<p>This scholarship is awarded to students for undertaking Bachelor and Masters level education in Natural and Basic sciences. Students enrolled in Integrated Mathematics can avail it within a month after admission.</p>",
    src: "http://online-inspire.gov.in/",
  },
  {
    title: "Encore Scholarship",
    content:
      "<p>This alumni-funded scholarship is awarded to meritorious second and fourth-year students during the autumn semester.</p> <p><strong>How to apply-</strong> The application form is available on the website from August and a notice is posted on ChannelI regarding the same. Candidates who are shortlisted on the basis of application have to clear an interview to become eligible for the scholarship.",
    src: "https://sites.google.com/site/iitrencore89/",
  },
  {
    title: "Google Anita Borg Scholarship",
    content:
      "<p>This scholarship is awarded to women at under-graduation/ post-graduation level in the field of Computer Science, Computer Engineering or a closely related branch. The application is available on womentechmakers from mid April until mid of May (may vary by a week or two).</p> <p><strong>How to apply-</strong> Applicants need to submit write ups to four to five essay questions along with their resume/cv and transcripts. ",
    src: "https://www.womentechmakers.com/scholars",
  },
  {
    title: "Heritage Awards",
    content:
      "<p>This scholarship is awarded to students of all branches from second year onwards who excel academics as well as extra-curricular activities during the autumn semester.- The application form is available on the website from September to the beginning of October.</p>",
    src: "http://www.iitr-heritagefund.org/heritage-awards",
  },
  {
    title: "James Thomson Scholarship",
    content:
      "Announced recently, the James Thomson Scholarship facilitates the students entering IIT Roorkee through JEE Advanced to avail a monthly scholarship of ₹25,000 per month if they satisfy any of the following two set of criteria— any student with an All India Rank within 300 can benefit from the scholarship apart from the best-ranked student from every department if s/he has an All India Rank within 500. As the scholarship has been announced recently, the procedure for applying and other associated detailed are not yet available. Information regarding these will be passed on to students upon arrival, by the concerned authorities.</p> <p>For further details on the various other trust scholarships available for various departments, visit the following website.</p>  ",
    src:
      "https://www.iitr.ac.in/admissions/uploads/File/2017/Scholarships22062017.pdf",
  },
]

export const branchCh = {
  title: "Branch Change",
  content:
    "<p>Finding people in IITs who are enrolled in a branch that was not their first choice is not a rarity. Also, owing to the limited knowledge that people have about the different branches and their curriculum, choosing the right branch for yourself is not as easy as it may seem. In order to compensate for this almost all the IITs provide an option of branch change for the students including IIT Roorkee. Contrary to most of the other IITs that offer an option of branch change at the end of the first year, at IIT Roorkee the process takes place at the end of the first semester itself.</p><p>Talking about the technical details related to branch change, there isn’t much actually. As stated in the <a href='https://www.iitr.ac.in/academics/uploads/File/2016/syllabus/Academic%20Syllabus%202016-17.pdf'>UG Ordinances and Regulations 2016 </a>, all the undergraduate students except for the students enrolled in the B.Arch course are eligible for a branch change. This also means that there are no restrictions placed on changing from a five year course to a four year course or vice versa. Earlier, the change of branch takes place against the number of vacant or unoccupied seats in the branch or two(2) whichever is higher, but recently the number has been increased to 10% of the total number of seats in the branch. The unoccupied/vacant seats are filled only on the basis of merit(read SGPA) in that particular category in which the seats are vacant, however the two extra seats are filled on the basis of combined merit and have no reservations. Also, in the cases where two people with the same SGPA have the same preference of branch, the JEE Advanced rank is used as a tiebreaker. There are a few other criterias that need to be fulfilled for a branch change such as not having backlogs and not having been penalized for indiscipline, but in most cases these will be implicitly fulfilled even if you have a near-decent shot at a branch change.</p><p>When we come to the rigour associated with getting a branch change, it actually depends on the branch that you are trying to change to. Based on general trends, the branches which are most sought after in the JEE counselling also become the most desired branches during branch change. For branches like CSE, the competition is very tough and one might miss it even after scoring a perfect 10 SGPA. As we move other branches, it becomes comparatively less difficult but is still arduous enough. The most efficient and probably the best way of scaling this task to workable limits is consistency. Attending the classes regularly and taking proper notes are recommended if not exhorted. The pursuit of getting a branch change will also involve some sacrifices on your part such as completing all the tutorials on your own (and watching your batchmates copy them, thanklessly) and missing out on some chapos, but in the end it will be all worth it. The added benefit is that even if you miss out on a branch change by some grade points, you will have a healthy CGPA at the end of your first semester, a thing that will prove to be really helpful in the long run.</p>",
}

export const nptel = {
  title: "NPTEL Courses",
  content:
    "<p>NPTEL is an initiative by the Ministry of Education which offers video-based courses and web-based e-courses.</p><p>Recent changes allow students to swap some on-campus courses to web based NPTEL courses. A maximum of 2 courses or 8 credits can be completed on NPTEL throughout the duration of your programme. These courses can be availed in any semester. The process for applying to an NPTEL course starts with filling out an application to the department. After their approval, the student has to register on the NPTEL website.</p><p>For grading, the Marks obtained by the students of IIT Roorkee as per the procedure of NPTEL guidelines would be requested from NPTEL Central team. After that, the grading procedure of IIT Roorkee will be followed.</p><p>Checkout the NPTEL link here:<br><a href='https://nptel.ac.in/'>https://nptel.ac.in/</a></p>",
}

export const research = {
  title: "Research",
  content:
    "<p><i><strong>Research is to see what everybody else has seen, and to think what nobody else has thought</strong></i><br>-Dr. Albert Szent-Gyorgyi</p><p>Being one among the most sought after institutes of the country, and hence, an agglomeration of some of the brightest minds, IIT Roorkee is an institute that is expected to have a firm-footed research culture and produce some unparalleled research output. These assumptions turn out to be true but only to limited extents. Owing to the heterogeneity of the student population in terms of their interests and future aspirations, the research culture at IIT-R lags behind a few other research centred colleges in India (read IISc, IISERs, etc) but is still dynamic enough to provide adequate opportunities to the enthusiastic. On a positive note, the state of undergraduate research at IIT Roorkee is consistently improving both due to the efforts of the administration and also the student community (essentially, people who are already pursuing a career in research).</p><p>Research activities at IITR are aptly supported by proper infrastructure and facilities. The Central Library at IIT Roorkee is a member of the National Digital Library Consortium through which students can gain access to over 15000 journals belonging to various domains of Science, Engineering and Technology. Apart from this, several standard books on varied topics are present for the reference of students at both the Central and the departmental libraries. Talking about infrastructure, the institute has several dedicated facilities like the Institute Computer Centre and the Institute Instrumentation Centre, apart from the departmental laboratories and research centres.In addition to this, the newly set-up Tinkering Lab provides free 3-D printing facilities to the students which could provide a huge boon for engineering-based research taking place at IITR. All this is supported by a 400 member strong faculty where some of the professors are the pioneers in their field at the global stage.</p><p>The step of initiation for any undergraduate at IITR, in the field of research, is generally taking up a project under a professor. There is no set procedure for doing this. Just being on the lookout for professors who have common fields of interests and discussing the prospects of a project with them is sufficient. The process is actually much easier than it sounds. After having started working on a project, the outcomes generally depend on the amount of hard work put in and some people even succeed in getting their research published in renowned journals and conferences.</p><p>A recent initiative by the administration is the Spark IITR programme, aimed at cultivating enthusiasm for research amongst UG students. Under the Spark programme, the institute offers funded, project-based summer internships to UG students of IITR and other institutes. Candidates can choose from a list of projects with their associated faculty after two semesters of undergraduate study, provided they fulfill the CG requirements. Applications for the program are to be submitted in the spring semester, before February 28th, and selected candidates would be allowed to start their summer training immediately after the completion of their end term exams. The project serves as a gateway for potential research enthusiasts to follow their passion through Master’s or PhD courses in the institute.</p><p>A lot of national and international programs also open their doors for the students of IITR for pursuing research in various top institutions around the world. Through these programs, students are offered funded research internship positions during the summer breaks. Summer Undergraduate Research Fellowship(SURF) offered by CalTech, Charpak Scholarship offered by the Embassy of France, German Academic Exchange Service(DAAD) for German Colleges and Mitacs Globalink Research Internship offered for Canadian universities are some of the many programs utilised by students for getting an international research exposure. Other programs such as those by Indian Academy of Sciences(IAS), Tata Institute of Fundamental Research(TIFR) and various IITs and IISERs offer similar research opportunities in India. To apply for these programs, it is important to keep track of updates on their websites since the beginning of the Autumn semester. Students can also mail professors with coherent interests to ask for research internships.Though a little tough administratively, this is a good approach to work with researchers of aligning interests irrespective of their participation in any program or eligibility criteria.</p><p>Students also have an option for undergoing a semester exchange at colleges such as KTH Royal Institute of Technology Sweden, Lucerne University of Applied Sciences and Arts Switzerland, York University Canada, HTWD Germany, ESTP France, University of Southampton, IIT Delhi and IIT Bombay.</p><p>Another provision that helps in encouraging students towards research is the ability to carry out projects outside IIT Roorkee. Students can avail this if they have an offer letter from the supervisor of the organisation.</p><p>In addition to this, Prime Minister’s Research Fellows is another opportunity that is offered to the students. This is open to final year students with a CGPA>8.0. If they are selected to pursue a PhD in the PMRF granting institutes of the country, they are granted a fellowship(upwards of INR 70000 per year) and a research grant of INR 200,000 per annum.</p><p>What sets IITR apart from other Institutes is the ability to pursue your Bachelor Thesis in a foreign university. Bachelor Thesis Project or BTP is the final year project, every undergraduate must undertake for completion of their graduation. IITR gives a student the flexibility to choose a foreign university to conduct his/her bachelor thesis, given he qualifies the criteria. Thus, a student can visit a university for a duration of 4th year, 1st semester and complete his/her BTP. This is made possible by taking courses early on such that you end up clearing a complete semester for your foreign visit. With a professor backing you up, semester courses cleared and approval from the title of Department, you can pursue research in a foreign university which is a feat in its own.</p><p>Altogether, even though the research at IIT-R lacks behind on some pointers, the university succeeds in providing ample opportunities to people who have the will and grit to pursue core research as a career.</p>",
}

export const pgphd = {
  title: "PG and Phd",
  content:
    "<p>The primary objective of engineering is solving problems. With rapid advancements in technology, the problems that are associated with them are becoming increasingly complex. In order to equip the students graduating from the college with more relevant skill-sets and knowledge base, the provision of pursuing a Minors in some other department or an Honors in your department of study has been running quite successfully at IITR.</p><h2 className='normal-title'>Minor Specialization</h2><p>Students who are willing to excel in some specialization other than his/her own department, have the option for doing a Minor specialization in that department. Earlier, one needed to have a CGPA>7.5 to opt for a minor. Recent changes have scrapped this rule, however, a limit on the number of students in a course might be imposed. It consists of 4-8 additional courses equivalent to 18-30 credits that need to be taken up in the pre-final and the final year of college. Also, it is not necessary for the specialization to belong to the same discipline of study and it may be taken from any one of engineering, management, science and humanities. The most recent addition to this basket was a minor in Economics. Before the beginning of every semester, courses being offered for a particular minor specialization are floated and students have to pick up a few from that basket. These courses are called Minor Specialization Courses and have a fixed number of seats. For the people who successfully fulfill the required credits have the name of the minor specialization aptly mentioned on their degree they receive upon graduation.</p><h2 className='normal-title'>Departmental Honours</h2><p>The basic structure of Departmental Honours is similar to Minor Specialization. Students with interests in their own department and having a CGPA greater than 7.5 can take 4-5 extra courses from their department and pass out with an Honours degree. The courses for gaining an honours degree are floated before the beginning of every semester by the concerned department and are called Departmental Honours Courses. Similar to Minors, a student passing out with an Honours will have it mentioned in his degree.</p><h2 className='normal-title'>Switching to an Integrated Dual Degree Program(IDD) from BTech Program</h2><p>Students at the end of their 3rd year are offered an option to switch to an integrated dual degree program (BTech + MTech). The MTech degree choices are unique to the student’s BTech branch and they depend on whether it satisfies the required eligibility criteria. This option to switch is offered only to the students having a CGPA greater than 7.5 and an approval from their respective departments.</p>",
}
