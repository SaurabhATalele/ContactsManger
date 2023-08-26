import React,{useEffect, useState} from 'react'
import LineChart from './ChartComponents/LineGraph';
import MapWithMarkers from './ChartComponents/MapWithMarkers';
import axios from 'axios';

const Chart = () => {

    const [chartData, setChartData] = useState({})
    const [chartDates, setChartDates] = useState([])
    const [userData, setUserData] = useState({
        labels: chartDates,
        datasets: [
          {
            label: "Changes in cases",
            data: chartData,
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

    useEffect(()=>{
        // call api here using axios
        const fun = async () => {
        const data = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=20')
        console.log("Data is ",data);
        const dates = Object.keys(data.data.cases)
        const values = Object.values(data.data.cases)
        console.log("Dates are ",dates);
        console.log("Values are ",values);
        setChartDates(dates)
        setChartData(values)

        setUserData({
            labels: chartDates,
            datasets: [
              {
                label: "Changes in cases",
                data: chartData,
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
              },
            ],
          });

        
    }
        fun()

    },[])

    const countriesData = [
        {
          name: 'Country A',
          lat: 10,
          lng: 20,
          active: 1000,
          recovered: 800,
          deaths: 50,
        },
        {
          name: 'Country B',
          lat: 30,
          lng: 40,
          active: 500,
          recovered: 300,
          deaths: 20,
        },
        // ... other country data ...
      ];


  return (
     <div>
    <div style={{ width: 700 }}>
    <LineChart chartData={userData} />
  </div>
    <div style={{ width: 700 }}>
    <MapWithMarkers countriesData={countriesData} />
    </div>
  </div>
  )
}

export default Chart