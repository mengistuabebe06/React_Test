import React, { useEffect, useState } from "react";
import { fetchRandomPoints } from "../../apiService";
import { Scatter } from "react-chartjs-2";
import styled from "styled-components";
import { Chart, registerables } from "chart.js";
import { NavLink } from "react-router-dom";
Chart.register(...registerables);

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

const ListFieldRandomPoints = () => {
  const [pointsData, setPointsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pointData = {
          side: 10,
          selection: 5,
        };
        const {
          success,
          response: responseData,
          error,
        } = await fetchRandomPoints(pointData)();
        if (success && responseData.listOfPoints) {
          setPointsData(responseData.listOfPoints.map(([x, y]) => ({ x, y })));
        } else {
          setError(error || "Error fetching random points");
        }
      } catch (error) {
        setError("Error fetching random points");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    datasets: [
      {
        label: "Field Random Points List of Points",
        data: pointsData,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        type: "linear",
        position: "left",
      },
    },
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ChartWrapper>
        <Scatter data={chartData} options={chartOptions} />
      </ChartWrapper>
      <div className="link-container">
        <NavLink to="/excel" className="link">
          Visual Excel Point Data
        </NavLink>
      </div>
    </div>
  );
};

export default ListFieldRandomPoints;
