import React from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { jobItem } from '../styles';



const JobItem = (props) => {
  // console.log(props)

  return (
    <TouchableOpacity
      style={jobItem.container}
      onPress={props.onSelect}
    >

      <Text style={jobItem.jobname}>{props.job.title}</Text>
      <Text style={jobItem.desc}>{props.job.company}</Text>
      <Text>{props.job.type} / {props.job.location}</Text>

    </TouchableOpacity>
  )
}
export { JobItem };

// company: "PHMG"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1NOIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d9b1a8cd3530880937aced443859e8023f2a1d40/logo.jpg"
// company_url: "https://www.phmg.com/careers"
// created_at: "Tue Nov 03 15:47:54 UTC 2020"
// description: "<p><strong>PHMG is the world’s leading audio branding agency, working with more than 36,000 clients in 39 countries. Globally renowned brands such as Audi, Adidas and Coca-Cola trust us to make them sound as good as they look. If you are passionate about technology, we want to hear from you!</strong></p>↵<p><strong>To maintain our position at the forefront of our industry – and sustain our continual growth – we need an expert operational team behind us to support the smooth running of the business.</strong></p>↵<p>As a Software Engineer you will possess a genuine passion for what you do, a keen eye for detail and problem-solving skills along with an eagerness to continue learning and developing your skills. Day to day you will be researching, designing, implementing and managing software programs, you will be a fantastic team player, working in close collaboration with your peers and the Head of Product Delivery to build efficient programs and systems that always serve user needs.</p>↵<p>Your eye for detail will support you in writing clean, efficient code whilst having the ability to troubleshoot, debug and improve existing software. Some of the duties include, Integration of software components and third-party programs, create technical documentation for reference and reporting, Verify and deploy programs and systems.</p>↵<p>And on top of this, you’ll be an expert communicator with excellent interpersonal skills.↵This is an exciting opportunity for someone who wants to join a growing team where they can take ownership in shaping the future of the PHMG software development landscape.</p>↵<p><strong>Office location:</strong> Old Trafford, Manchester, M16 0PQ</p>↵<p><strong>Working hours:</strong> 8:45am – 5:15pm</p>↵<p><strong>What you’ll be doing:</strong></p>↵<ul>↵<li>Researching, designing, implementing and managing software</li>↵<li>Writing and implementing efficient code based on user and business requirements</li>↵<li>Gaining an understanding of our current focus and brand cogency</li>↵<li>Establishing awareness for the projected work and ongoing plans</li>↵<li>Developing and supporting new solutions using contemporary technologies</li>↵<li>Troubleshoot, debug and upgrade existing software↵-Gather and evaluate user feedback</li>↵<li>Promoting and advising on best software engineering best practises</li>↵</ul>↵<p><strong>What you’ll need:</strong></p>↵<ul>↵<li>Proven experience as a Software Developer, Software Engineer or similar role</li>↵<li>Strong knowledge of Agile ceremonies and techniques</li>↵<li>Experience with software design and development in a test-driven environment</li>↵<li>You’ll come with a strong technical background with good working knowledge of C#, .Net, MVC, Javascript/JQuery, HTML5, CSS, SQL Server</li>↵<li>Dynamics CRM, Sharepoint, SSIS would be advantageous</li>↵<li>Experience with databases and Object-Relational Mapping (ORM) frameworks (e.g. Hibernate)</li>↵<li>Ability to learn new languages and technologies</li>↵<li>Excellent communication skills</li>↵<li>Resourcefulness and troubleshooting aptitude</li>↵<li>Attention to detail</li>↵</ul>↵<p><strong>What you’ll get in return:</strong></p>↵<ul>↵<li>Competitive salary and rewards</li>↵<li>Career development and progression directly linked to your performance</li>↵<li>Free gym membership at PureGym</li>↵<li>All expenses paid company events in sought after venues</li>↵<li>Birthday gifts and time off to celebrate</li>↵<li>On-site barber and beautician</li>↵<li>Exciting social scene and lively atmosphere</li>↵<li>Creative, spacious offices with breakout areas and bar</li>↵<li>Dry cleaning and tailoring service</li>↵<li>Fundraising initiatives for our registered charity – the PHMG Foundation</li>↵<li>Cycle to work scheme</li>↵<li>Smart pension scheme following a three-month probationary period</li>↵</ul>↵<p><strong>About PHMG:</strong>↵Established in 1998, PHMG has grown from a renowned Manchester-based business to the world’s leading audio branding agency – working with 36,000 clients in 39 countries across the globe. This expansive client list includes household names of the calibre of Samsung, Audi and Adidas, as well as SMEs in every sector of the global market. We give each of them a stellar production that combines creative copy, world-class voice artistry and an exclusive Brand-Sound-Track™ – strengthening their business identity in the most memorable, emotive way.</p>↵<p>#LI-AH1</p>↵"
// how_to_apply: "<p><a href="https://www.linkedin.com/jobs/search/?currentJobId=2267844508&amp;f_C=419443&amp;geoId=92000000">https://www.linkedin.com/jobs/search/?currentJobId=2267844508&amp;f_C=419443&amp;geoId=92000000</a></p>↵<p>Or submit a CV to <a href="mailto:abi.hart@phmg.com">abi.hart@phmg.com</a></p>↵"
// id: "48a69447-dcdc-456a-a9cf-20d4c7887aef"
// location: "Manchester"
// title: "Full Stack .NET Software Engineer "
// type: "Full Time"
// url: "https://jobs.github.com/positions/48a69447-dcdc-456a-a9cf-20d4c7887aef"