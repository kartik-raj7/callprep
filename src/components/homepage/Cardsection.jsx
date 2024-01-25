import { Button, Card, Col, Image, Input, Row, Space, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { IoCopyOutline, IoSearch } from 'react-icons/io5'
import style from '../../styles/jsonsection.module.scss'
import { JSONTree } from 'react-json-tree'
import { copytoClipboard, handleDownloadAsJson } from '../../utils/utils'
import { TiDownload } from 'react-icons/ti'
import {theme} from '../../utils/utils'
import ToggleButtons from '../common/ToggleButtons'
const Cardsection = ({loading,json}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredJson, setFilteredJson] = useState([]);
    function handleSearchInputChange(event) {
        setSearchTerm(event.target.value);
      }
      useEffect(() => {
        setFilteredJson(
          json.filter((jsonObject) => JSON.stringify(jsonObject).includes(searchTerm))
        );
      }, [json, searchTerm]);
  return (
    <Space className={style.cardssection}>
      <Col span={24} className={style.cardssectionheading}>
        <span>Section for new cards</span>
      </Col>
      <Col span={24} className={style.searchsection}>
            <Input
              placeholder="Search JSON"
              value={searchTerm}
              disabled={loading}
              className={style.searchbar}
              suffix={<IoSearch/>}
              onChange={handleSearchInputChange}
            />

          </Col>
      <Row>
        <Col className={style.cardsdisplaysection}>
          {Array.isArray(filteredJson) && filteredJson.length>0? (
            filteredJson.map((jsonObject, index) => (
                <Card key={index} className={style.listcards}>
                <Row className={style.jsondatacopydownloadrow}>
       
                <ToggleButtons jsonObject={jsonObject}/>
       </Row>
              <JSONTree data={jsonObject} hideRoot={true} shouldExpandNode={() => true} theme={theme} invertTheme/>
            </Card>
            ))
          ) : (
            <div className={style.emptyjsontext}>
            <Image src='/nothinghere.png' preview={false} className={style.nothinghereimage}/>
            <div className={style.searchemptytext}>Nothing to show here. Try Searching Something else </div>
            </div>
          )}
        </Col>
      </Row>
    </Space>
  )
}

export default Cardsection