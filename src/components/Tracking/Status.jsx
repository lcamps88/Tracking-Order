import React, { useState, useEffect } from 'react'

const Status = ({ listCodes, trackingCode }) => {
  const [code, setCode] = useState([])
  const [vendor, setVendor] = useState([])
  const [vendorStatus, setVendorStatus] = useState()
  const [status, setStatus] = useState()
  let arrayCodes = [listCodes]
  let tracking = [trackingCode]
  // Status 
  const ValuesObject = () => {
    arrayCodes.map((x) => {
      if (x) {
        setCode(x) 
        setVendor(...vendor, x.tracking_code_vendor_locales)
      }
    })
  }

  useEffect(() => {
    ValuesObject()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code])

  const trackCode = () => {
    tracking.map((t) => {
      if (t) {
        setVendorStatus(...t.tracking_code_locales)
      }
    })
  }
//----
  useEffect(() => {
    trackCode()
    if (vendorStatus) {
      setStatus(vendorStatus.description)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vendorStatus])

  return (
    <div>
      <h4>{vendor.description}</h4>
      <h4>{status}</h4>
    </div>
  )
}
export default Status
