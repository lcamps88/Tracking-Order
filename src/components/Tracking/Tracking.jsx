import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import 'react-vertical-timeline-component/style.min.css'
import moment from 'moment'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle'
import Status from './Status'
// Test #1.
const Tracking = () => {
  const [resultTrack, setResultTrack] = useState()
  const [resultStatus, setResultStatus] = useState()
  const [order, setOrder] = useState([])

 const initialState = {values:''}
  const[number, setNumber] = useState(initialState)


  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2MDM5MTYyMDAsImV4cCI6MTYzNTQ1MjIwMCwiYXVkIjoiaHR0cHM6Ly9icmluZ2VycGFyY2VsLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNTI1eXM2YWh4d3UyIiwianRpIjoiOGFiYWY3ZGQtYmQ0NS00NzcyLWJhMGQtNDBkMTMwMWI4NDY0In0.I0R5iJOLUASXmelc7dQ6pcEKstIPYwjTkcHvLu4IRk'

  const getTracking = async () => {
    try {
     
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(
        'https://bps.bringer.dev/public/api/v2/get/parcel/tracking.json?tracking_number=BPS65O4WYLBWWBR',
        config
      )
      setResultTrack(response.data.parcel_tracking_items)
      setResultStatus(response.data.status)
      setOrder(response.data.label)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getTracking()
  }, [])


  const Search = (value) =>{
    console.log("value", value);
  }
  // ---
  return (
    <div>
      <Container style={{ maxWidth: '1170px', width: '90%', padding: '0px' }}>
        <Row>
          <Col>
            <h3>
              Status Order: {<CheckCircleIcon />} {resultStatus}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Tracking Number:</h4>
            <p>{order.tracking_number}</p>
          </Col>
          <Col>
            <h4>External Tracking Number:</h4>
            <p>{order.external_tracking_number}</p>
          </Col>
        </Row>
        
       
        <Form
          style={{
            padding: '30px',
            backgroundColor: 'rgb(41 52 67)',
            color: '#000',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={Search(number)}
          >
          <Row>
            <Col>
              <Form.Control placeholder="Enter your tracking number" type="text" name="number" value="Sample Text" />
            </Col>
            <Col>
              <Button variant="success">Search</Button>
            </Col>
          </Row>
        </Form>
      
    
      </Container>
      <VerticalTimeline>
        <div
          style={{
            padding: '30px',
            backgroundColor: 'rgb(41 52 67)',
            color: '#000',
            borderRadius: '10px',
          }}
        >
          {resultTrack?.map((result, i) => (
            <VerticalTimelineElement
              style={{ color: '#fff' }}
              key={i}
              className="vertical-timeline-element--work"
              date={moment(result.timestamp).format('MM/DD/YYYY')}
              iconStyle={{ background: '#d9534f', color: '#fff' }}
              icon={<AirportShuttleIcon />}
            >
              <Status
                listCodes={result.tracking_code_vendor}
                trackingCode={result.tracking_code}
              />

              <p style={{ color: '#000' }}>
                {result.city}, {result.state}
              </p>
            </VerticalTimelineElement>
          ))}
        </div>
      </VerticalTimeline>
    </div>
  )
}

export default Tracking
