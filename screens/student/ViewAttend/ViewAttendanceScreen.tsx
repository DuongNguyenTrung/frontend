import { Card, Col, PageHeader, Row, Table } from 'antd'
import Router from 'next/router'
import { ColumnsType } from 'antd/lib/table'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import useFormatDate from '../../../modules/hooks/useFormatDate'
import AuthLayout from '../../../modules/auth/AuthLayout'
import Filter from './component/Filter'
const defaultFilter = {}

function ViewAttendanceScreen({ }: props) {
    const [data, setData] = useState<any[]>()
    const [filter, setFilter] = useState(defaultFilter)
    const { dateFormat, datetimeFormat } = useFormatDate()

    //handle

    //start

    useEffect(() => {

    }, [filter])
    return <AuthLayout>
        <Card>
            <PageHeader title='' onBack={() => Router.back()} />
            <Row justify='space-between' >
                <Col>
                    <Filter setFilter={setFilter} />
                </Col>
            </Row>
        </Card>
    </AuthLayout>
}
interface props {
}
export default ViewAttendanceScreen