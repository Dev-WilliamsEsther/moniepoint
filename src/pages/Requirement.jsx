import React from 'react'
import "../styles/requirement.css"

const requireroles = [
  {
    id:1,
    title:"System Administrator",
    height:"h-64",
    bgColor:"#D6F293",
    image:"https://womenintech.moniepoint.com/static/media/jd-sys-admin.e420540a67e87adbdbdb5a4eedc39de2.svg",
    roles:[
      "Responsible for maintaining, configuring, and reliably operating computer systems and network servers.",
      "Upgrading, installing, and configuring application software and computer hardware.",
      "Troubleshooting system errors.",
      "Providing technical support to employees in a timely manner with limited disruptions.",
      "Work collaboratively in a team environment."
    ]
  },
  {
    id:2,
    title:"Backend Engineer",
    height:"h-72",
    bgColor:"#E4D6FD",
    image:"https://womenintech.moniepoint.com/static/media/jd-be.e46df9fdc56051359c19358bd8dd2c71.svg",
    roles:[
      "Translates product requirements into architectural documents and diagrams.",
      "Apply engineering principles to solve complex problems through sound and creative engineering.",
      "Learn new engineering methods and incorporate them into your work processes.",
      "Demonstrates skill in time management and completing software projects in a cooperative team environment.",
    ]
  },
  {
    id:3,
    title:"Data Engineer",
    height:"h-80",
    bgColor:"#E4D6FD",
    image:"https://womenintech.moniepoint.com/static/media/jd-de.ca0105f8476679f2327dc3c84f870283.svg",
    roles:[
      "Work with stakeholders throughout the organization to identify opportunities for leveraging company data to drive business solutions.",
      "Mine and analyze data from company databases to drive optimization and improvements of product development, marketing techniques and business strategies.",
      "Assess the effectiveness of new data sources and data gathering techniques.",
      "Develop custom data models and algorithms to apply to data sets.",
      "Use predictive modeling to increase and optimize customer experiences, revenue generation, ad targeting and other business outcomes.",
      "Develop company A/B testing framework and test model quality.",
    ]
  },
  {
    id:4,
    title:"Product Manager",
    height:"h-40",
    bgColor:"",
    image:"https://womenintech.moniepoint.com/static/media/jd-tpm.9afcb53f8cfd84abdd2ac99a4f6375cf.svg",
    roles:[
      "Work with the engineering team to create and modify products to fulfil customer needs.",
      "Gain a deep understanding of customer experience, identify and fill product gaps and generate new ideas.",
      "Work with internal teams, including developers, engineers, architects, quality assurance, and operations",
    ]
  },
  {
    id:5,
    title:"Mobile Engineer",
    height:"h-76",
    bgColor:"",
    image:"https://womenintech.moniepoint.com/static/media/jd-mobile.d769f4a9287b5279927b37134ba4af15.svg",
    roles:[
      "Assist in developing and improving mobile apps (iOS & Android).",
      "Fix bugs, optimise performance, and maintain the mobile codebase.",
      "Learn and apply industry best practices in mobile development.",
      "Contribute to architectural discussions on scalability, performance, and security.",
      "Collaborate with engineers and participate in team discussions.",
      "Engage in code reviews to enhance code quality.",
    ]
  },
  {
    id:6,
    title:"Frontend Engineer",
    height:"h-76",
    bgColor:"",
    image:"https://womenintech.moniepoint.com/static/media/jd-fe.13aedef41410bb67e872fdd82ec4b634.svg",
    roles:[
      "Develop high-quality software design and architecture.",
      "Identify, prioritize and execute tasks in the software development life cycle.",
      "Develop tools and applications by producing clean, efficient code.",
      "Applies engineering principles to solve complex problems through sound and creative engineering.",
      "Learn new engineering methods and incorporate them into your work processes.",
      "Demonstrates skill in time management and completing software projects in a cooperative team environment.",
    ]
  },
  {
    id:7,
    title:"Technical Support Engineer",
    height:"h-80",
    bgColor:"",
    image:"https://womenintech.moniepoint.com/static/media/jd-tech-supp.67e97be9f92105094f2969693193c7a2.svg",
    roles:[
      "Provide tier two application support to production systems and identify any issue in production.",
      "Taking ownership of customer issues reported and seeing problems through to resolution.",
      "Collaborate with product and engineering teams to fix bugs.",
      "Monitor performance metrics for various production systems, identify root cause for all technical issues and work with the engineering team to resolve them.",
      "Manage team ticket queue and resolve in a timely manner.",
      "Develop and maintain accurate technical, software operations and support related documentation.",
    ]
  },
  {
    id:8,
    title:"Cloud Engineering",
    height:"h-80",
    bgColor:"",
    image:"https://womenintech.moniepoint.com/static/media/jd-ce.45ebfb86f7b792fb2315a276e086d181.svg",
    roles:[
      "Assist in the setup, configuration, and maintenance of cloud infrastructure using GCP.",
      "Support the management of Kubernetes clusters, including deployment, scaling, and monitoring.",
      "Contribute to the design and implementation of CI/CD pipelines for automated application deployment.",
      "Work on infrastructure as code (IaC) using tools such as Terraform or Ansible to automate cloud infrastructure provisioning and management.",
      "Collaborate with the development team to ensure seamless integration of applications in the cloud environment.",
      "Contribute to the implementation of monitoring and logging solutions for cloud-based systems.",
    ]
  },
  {
    id:9,
    title:"Quality Assurance Engineering",
    height:"h-30",
    bgColor:"",
    image:"https://womenintech.moniepoint.com/static/media/jd-qa.2bad376227a61f59b570b01201717a85.svg",
    roles:[
      "Work with other developers, enterprise architects, product and project managers in designing software solutions.",
      "Perform the different types of tests required to certify the quality of an application before deployment.",
      "Maintains records of bugs captured for applications.",
      "Applies engineering principles to solve complex problems through sound and creative engineering.",
    ]
  }
]

const Requirement = () => {
  return (
    <div className='w-full h-full bg-pink-700 overflow-x-auto'>
      <div className="flex space-x-6 p-8 snap-x snap-mandatory">
        {/* {requireroles.map((require))=> ( */}
        <div className='min-w-[500px] h-86 p-6 bg-white rounded-2xl border-2 border-black flex justify-center flex-col'>
          <h2 className='w-80 h- bg-red-300'></h2>
          <p className='w-100 h-max bg-fuchsia-400'></p>
        </div>
        {/* // )} */}
      </div>
    </div>
  )
}

export default Requirement