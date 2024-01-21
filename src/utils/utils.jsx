import { openNotificationWithIcon } from "./ui/notification";
import ClipboardCopy from 'clipboard-copy';

function copytoClipboard(copyclipboarddata) {
  try {
    if(JSON.parse(copyclipboarddata)==copyclipboarddata){
        throw new Error('Invalid data type for clipboard copy');
    }
    ClipboardCopy(copyclipboarddata);
    openNotificationWithIcon('success', 'Data copied to clipboard successfully');
  } catch (error) {
    console.error("Error copying to clipboard:", error);
    openNotificationWithIcon('error', 'Failed to copy data to clipboard');
  }
}

function handleDownloadAsJson(convertedJson) {
  try {
    const jsonBlob = new Blob([JSON.stringify(convertedJson, null, 2)], { type: 'application/json' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(jsonBlob);
    downloadLink.download = 'json_data.json';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    openNotificationWithIcon('success', 'Data downloaded successfully');
  } catch (error) {
    console.error("Error downloading JSON:", error);
    openNotificationWithIcon('error', 'Failed to download data');
  }
}

export { copytoClipboard, handleDownloadAsJson };
