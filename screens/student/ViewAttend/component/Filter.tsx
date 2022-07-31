import { Col, Row } from 'antd'
import React, { useState, useEffect } from 'react'
import useFormatDate from '../../../../modules/hooks/useFormatDate'
function Filter({ setFilter }: props) {
    const [data, setData] = useState([])
    const [subjectId, setSubjectid] = useState()
    const [termId, setTermid] = useState()
    const [lsSubject, setlsSubject] = useState([])
    const [lsterm, setlsTerm] = useState([])

    const { dateFormat, datetimeFormat } = useFormatDate()
    //handle


    //start
    useEffect(() => {

    }, [])
    return <Row justify='space-between'>
        <Col>
        </Col>
        <Col>
        </Col>
    </Row>
}
interface props {
    setFilter: any
}
export default Filter