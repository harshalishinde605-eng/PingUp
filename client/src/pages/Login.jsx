import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'
import { SignIn } from '@clerk/clerk-react'

const Login = () => {
  return(
  
    <div className='min-h-screen flex items-center justify-center p-4 sm:p-6'>
    
        <img src={assets.bgImage} alt="" className='absolute top-0 left-0 -z-10 w-full h-full object-cover'/> 
        
      
        <div className='flex flex-col md:flex-row w-full max-w-6xl md:max-w-7xl h-full md:h-[600px] overflow-hidden'> 

            
            <div className='md:flex-1 flex flex-col items-start justify-between p-8 md:p-12 lg:p-16'>
            
                <img src={assets.logo} alt="Pingup Logo" className='h-10 object-contain mb-4'/> 

          
                <div className='my-auto'> 
                    
                   
                    <div className='flex items-center gap-3 mb-4'>
                       
                        <img src={assets.group_users} alt="User Group" className='h-8 md:h-10'/> 
                        <div>
                            <div className='flex'>
                                {Array(5).fill(0).map((_, i)=>(
                                    <Star key={i} className='size-4 md:size-4.5 text-transparent fill-amber-500'/>
                                ))}
                            </div>
                         
                            <p className='text-sm text-yellow-100'>Used by 12k+ developers</p>
                        </div>
                    </div>
                    
                    
                    <h1 className='text-3xl md:text-6xl md:pb-2 font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent leading-tight'>
                        More than just friends truly connect
                    </h1>
                    
                  
                    <p className='text-xl md:text-3xl text-yellow-500 max-w-xs md:max-w-sm mt-4'>
                        connect with global community on pingup
                    </p>
                </div>
                
                
                <div className='h-8'></div> 
            </div>

           
            <div className='md:flex-1 flex items-center justify-center p-8 sm:p-10 md:p-12'>
                <SignIn   appearance={{
        variables: { 
          // This color will ONLY apply to this SignUp component
          colorPrimary: '#a8d203ff', 
          colorBackground: '#ecec8eff',
          colorInput: '991B1B'
        },
      }}/>
            </div>
            
        </div>
    </div>
  )
}

export default Login