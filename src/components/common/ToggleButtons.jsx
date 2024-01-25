import { Button, Tooltip } from 'antd'
import React from 'react'
import { copytoClipboard, handleDownloadAsJson } from '../../utils/utils'
import { TiDownload } from 'react-icons/ti'
import { IoCopyOutline } from 'react-icons/io5'
import style from '../../styles/jsonsection.module.scss'
const ToggleButtons = ({jsonObject}) => {
  return (
    <>
      <Tooltip placement="top" title='copy to clipboard'><Button onClick={()=>copytoClipboard(JSON.stringify(jsonObject))} className={style.copytoclipboardbtn}><IoCopyOutline className={style.icons}/></Button></Tooltip>
       <Tooltip placement="top" title='download as json'><Button onClick={()=>handleDownloadAsJson(jsonObject)} className={style.downloadjsonbtn}><TiDownload className={style.icons}/></Button></Tooltip>
    </>
  )
}

export default ToggleButtons