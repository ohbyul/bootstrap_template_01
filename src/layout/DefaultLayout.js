import React, { useEffect, useState } from 'react'

import {
    AppContent,
    AppFooter,
    AppHeader
} from './index'


const DefaultLayout = (props) => {
    
    return (
        <div id='wrap' className='bg-white dark:bg-gray-900'>
            <div id='container'>
                <AppHeader {...props}/>
                <div id='contents'>
                    <AppContent {...props} />
                </div>
                <AppFooter />
            </div>
        </div>
    )

}

export default DefaultLayout
