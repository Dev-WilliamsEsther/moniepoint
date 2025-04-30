import React from 'react'

const About2 = () => {
  return (
    <div className='w-full h-190 overflow-y-auto'>
        <div className='w-max h-full flex justify-around items-end  gap-6' style={{padding:"30px"}}>
            <div className='w-118 h-170 bg-[#F3FBE0] rounded-4xl flex justify-center flex-col 'style={{padding:"20px"}} >
                <h1 className='text-7xl  text-[#0C3C33] font-bold font-sans'>15 Women</h1>
                <p className=' text-[20px] text-[#092256]'>Each intern will get direct mentorship <br /> from an industry expert in their field</p>
                <img src="https://womenintech.moniepoint.com/static/media/people.35118b5eb851b73748dc.png"  className='w-160 rounded-br-2xl rounded-bl-2xl' style={{marginTop:"50%",padding:"0px"}} />
            </div>

            <div className='w-190 h-170 bg-[#F7F3FE] rounded-4xl flex justify-center flex-col' style={{padding:"30px"}}>
                <h1 className='text-7xl font-bold font-sans'>Different Teams</h1>
                <p className=' text-[20px] text-[#092256]'>Choose from any of the nine teams below to start <br />your awesome career journey</p>

                <div className='h-100 flex justify-center items-center'>
                <img src="https://womenintech.moniepoint.com/static/media/QA-engineering.9f3b51719feca96db4bca72a608b3395.svg" 
                className='w-38' />
                <img src="https://womenintech.moniepoint.com/static/media/roles-tech-supt.da0e57ac94dcbac5e3ceed71db79eae0.svg" 
                className='w-38' />
                <img src="https://womenintech.moniepoint.com/static/media/roles-fe.985a4e3bedd253de0d5fa0ef90c8af96.svg" 
                className='w-38' />
                <img src="https://womenintech.moniepoint.com/static/media/Mobile-engineering.5476ab1b3907ea1e8daf1a03d81ecaf8.svg" 
                className='w-38' />
                </div>
                <div className=' h-100 flex justify-center items-center'>
                    <img src="https://womenintech.moniepoint.com/static/media/roles-sys-admin.e36b50bba02e0d83a3746d70a2e46c37.svg" 
                    className='w-37' />
                    <img src="https://womenintech.moniepoint.com/static/media/roles-be.f565da9c799fcb1ee31239a259c27354.svg" 
                    className='w-37'/>
                    <img src="https://womenintech.moniepoint.com/static/media/roles-de.20e5a181d5155d2bde8551cb11d77059.svg" 
                    className='w-37' />
                    <img src="https://womenintech.moniepoint.com/static/media/Product-management.70581949ef7c5a4b1828e60fa7542467.svg" 
                    className='w-37' />
                    <img src="https://womenintech.moniepoint.com/static/media/roles-ce.1a2c1aa3b66305626b13f32d6dcb1684.svg" 
                    className='w-37' /> 
                </div>
                
            </div>

            <div className='w-170 h-170 rounded-4xl flex flex-col gap-9'>
                <div className='w-170 h-80 bg-[#EFF9FE] rounded-4xl flex flex-col relative gap-4' style={{padding:"20px"}}>
                    <h1 className='text-7xl text-[#092256] font-bold font-sans'>6 Month Long <br /> Internship</h1>
                    <p className=' text-[20px] text-[#092256]'>Spend time working on <b className='text-[#0258EE]'>real projects </b>to help shape <br />finance in Africa.</p>
                    <img src="aboutclock.png" className='w-24 absolute right-5 top-3'/>
                </div>

                <div className='w-170 h-80 bg-[#FFF2EC] rounded-4xl flex flex-wrap relative' style={{padding:"20px"}}>
                    <h1 className='text-7xl text-[#4F1A1C] font-bold font-sans'>Awesome Perks</h1>
                    <div className='w-100 h-25 flex flex-wrap' style={{marginBottom:"40px"}}>
                        <p className=' w-49 text-[20px] text-[#092256]'>+ Nice salary</p>
                        <p className=' w-39 text-[20px] text-[#092256] text-right '>+ Cool merch</p>
                        <p className=' w-49 text-[20px] text-[#092256]'>+ Learn from industry <br /> experts</p>
                        <p className=' w-39 text-[20px] text-[#092256] text-right '>+ Work tools</p>
                    </div>
                    
                    <img src="aboutperks.png" className='w-28 absolute right-3 top-32'/>
                </div>
            </div>
            <div className='w-114 h-170 bg-[#0258EE] rounded-4xl flex items-center flex-col gap-6' style={{paddingTop:"60px"}}>
                <h1 className='text-7xl font-bold font-sans text-center text-[white]'>Take the <br /> leap</h1>
                <p className=' text-[20px] text-[white] text-center'>Come get hands-on experience building <br /> the future of finance in Africa</p>
                <button className='w-50 h-12 bg-[#FFEBAF] font-bold rounded-4xl shadow-[0px_4px_0px_4px_black]' >APPLY NOW</button>
                <img src="aboutlast.png"  className='w-160 rounded-br-2xl rounded-bl-2xl'style={{marginTop:"30%"}} />
            </div>
        </div>
    </div>
  )
}

export default About2
