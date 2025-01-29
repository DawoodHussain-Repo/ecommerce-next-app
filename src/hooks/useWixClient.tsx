"use client"

import { useContext } from 'react'
import { WixClientContext } from '@/context/wixContext'


const useWixClient = () => {
    const mywixClient = useContext(WixClientContext);
     return mywixClient;
}

export default useWixClient
