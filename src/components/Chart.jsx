import React,{useEffect, useState} from 'react'
import LineChart from './ChartComponents/LineGraph';
import MapWithMarkers from './ChartComponents/MapWithMarkers';

import axios from 'axios';

const Chart = () => {

    const [chartData, setChartData] = useState({})
    const [chartDates, setChartDates] = useState([])
    const [countriesData, setCountriesData] = useState([
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
      ])
    const [userData, setUserData] = useState({
        labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct"],
        datasets: [
          {
            label: "Changes in cases",
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
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

        const cout = async () => {
            const data = await axios.get('https://disease.sh/v3/covid-19/countries')
            console.log("Data is ",data);
            setCountriesData(data.data.map((country) => ({
                name: country.country,
                lat: country.countryInfo.lat,
                lng: country.countryInfo.long,
                active: country.active,
                recovered: country.recovered,
                deaths: country.deaths,
                })))
        }
        cout()

    },[])




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
