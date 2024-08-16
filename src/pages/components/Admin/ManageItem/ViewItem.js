
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import axios from '../../../../api/axios';
const URL="./item/";

function ViewItem ()  {    
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "img",
            headerName: "Image",
            width: 200,
            renderCell: (params) => (
              <img
                // src={params.value} 
                src={"http://localhost:3006" + params.value}// Assuming 'img' field contains the image URL
                alt="Item Image"
                style={{ width: '30%', height: '50%', objectFit: 'cover' }}
              />
            ),
          },
        { field: "catname", headerName: "Category", width: 130 },
        { field: "name", headerName: "Item Name", width: 160 },
        { field: "price", headerName: "Price", width: 160 },
        { field: "item_status", headerName: "Status", width: 160 },
        { field: "item_date", headerName: "Date", width: 160 },

       
        
      ];
    
      const [dataList, setDataList] = useState([]); 

      useEffect(() => {
        loadData();        
    },[]);

    const loadData = async () => {
      try {
          const response = await axios.get(URL);
  
          if (response.data.status === 401) {
              setDataList([]);
          } else {
              const responseData = response.data.data;
              for (let i = 0; i < responseData.length; i++) {
                  responseData[i].id = i + 1;
              }
              setDataList(responseData);
          }
      } catch (err) {
          if (!err?.response) {
              console.log("No server response");
          } else {
              console.log(err?.response.data);
          }
      }
  };
    
    return (
      <div style={{ padding: '5px' }}>
      <Box sx={{ position: 'relative', top: '10px', left: '-80px', height: 400, width: '110%' }}>
      <DataGrid
        rows={dataList}
        columns={columns}
      />    
    </Box>
  </div>
      );
};
export default ViewItem;
      