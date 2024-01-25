import React, { useEffect, useState } from 'react';
import { JSONTree } from 'react-json-tree';
import { generateRandomJSON } from '../../utils/Jsongenerator';
import { Button, Card, Col, Image, Input, Row, Space, Spin, Tooltip } from 'antd';
import style from '../../styles/jsonsection.module.scss'
import { IoCopyOutline, IoSearch } from "react-icons/io5";
import { copytoClipboard, handleDownloadAsJson } from '../../utils/utils';
import { TiDownload } from "react-icons/ti";
import { openNotificationWithIcon } from '../../utils/ui/notification';
import Cardsection from './Cardsection';
import {theme} from '../../utils/utils'
function Jsonsection() {
  const [json, setJson] = useState([]);
  const [convertedjson,setConvertedJson] = useState({});
  const [loading,setLoading] = useState(false);
  const [showcards,setShowCards] = useState(false);
  const [disablecreatenewcards,setDisableCreateNewCards] = useState(true);
  const [copyclipboarddata,setcopyClipboardData] = useState([]);
  function generatenewJson(){
    setJson([]);
    setConvertedJson([]);
    setLoading(true);
    setShowCards(false)
    setTimeout(() => {
        try {
      const generatedJsonString = generateRandomJSON();

      setcopyClipboardData(generatedJsonString);
      const generatedJsonObject = JSON.parse(generatedJsonString);
      console.log(generatedJsonString);
      setJson(generatedJsonObject);
      const convertedJsonObject = generatedJsonObject.reduce((acc, jsonObject, index) => {
        acc[index] = jsonObject;
        return acc;
      }, {});
    //   throw new Error('Simulated error during JSON generation'); // simulating error
      setConvertedJson(convertedJsonObject);
      setLoading(false);
      setDisableCreateNewCards(false);
    }catch (error) {    
        console.error('Error generating JSON:', error);
        openNotificationWithIcon('error','Something went wrong while generating the Json please try again !!')
        setLoading(false);
        setJson([]);
        setConvertedJson([]);
      }
    }, 2000);
  }
  function showCards(){
    setShowCards(true);
    setDisableCreateNewCards(true);
  }
  useEffect(() => {
    console.log(json); 
  }, [json]);

  return (
    <>
    <Space className={style.generatejsonpage}>
    <Row className={style.jsongreeting}>
        <span>WELCOME TO JSON GENERATOR</span></Row>
    <Row className={style.jsonarea}>
    {!loading ? (
  Object.keys(json).length > 0 ? (
    <Card className={style.jsoncard}>
      <Row className={style.jsondatacopydownloadrow}>
     
      <Tooltip placement="top" title='copy to clipboard'><Button onClick={()=>copytoClipboard(copyclipboarddata)} className={style.copytoclipboardbtn}><IoCopyOutline className={style.icons}/></Button></Tooltip>
      <Tooltip placement="top" title='download as json'><Button onClick={()=>handleDownloadAsJson(json)} className={style.downloadjsonbtn}><TiDownload className={style.icons}/></Button></Tooltip>
      </Row>
      <JSONTree data={convertedjson} shouldExpandNode={() => true} theme={theme} invertTheme />
    </Card>
  ) : (
    <div className={style.emptyjsontext}>
        <Image src='/nothinghere.png' preview={false} className={style.nothinghereimage}/>
        Nothing to show here. Click on create new json
        </div>
  )
) : (
  <Spin size='large' className={style.spinnerstyle}/>
)}

      </Row>
      <Row className={style.togglebuttons}>
      <Button onClick={generatenewJson} disabled={loading} className={style.generatejsonbtn}>Create new json</Button>
      <Button disabled={disablecreatenewcards||loading} onClick={showCards}  className={style.generatejsoncardsbtn}>Create Cards</Button>
      </Row>
      {showcards && (
       <Cardsection loading={loading} json={json}/>
  )}
      </Space>
    </>
  );
}

export default Jsonsection;




