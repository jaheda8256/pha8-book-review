import { useEffect, useState } from "react";

// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

// page ar name 3
const PagesToRead = () => {

    const [bookPage, setBookPage] = useState([]);

    useEffect(() =>{
        fetch('FakeData.json')
        .then(res => res.json())
        .then(data => setBookPage(data));

    }, [])
    return (
        <div>
           
            <h1>Pages to Read {bookPage.length}</h1>

            {/* <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar
        dataKey="uv"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart> */}
        </div>
    );
};

export default PagesToRead;