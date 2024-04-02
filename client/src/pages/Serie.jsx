import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Serie = () => {
  const [sorozatok, setSorozatok] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adat = await fetch("http://localhost:3500/megjelenit", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (adat.ok) {
          const response = await adat.json();
          setSorozatok(response.series);
        } else {
          const response = await adat.json();
          alert(response.msg);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [sorozatok]);

  const filteredSeries = sorozatok.filter((sorozat) => {
    const serieNameLower = sorozat.cim.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    return serieNameLower.includes(searchTermLower);
  });

  return (
    <div className="form-c">
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Keresés név alapján"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </InputGroup>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Cím</th>
              <th>Megjelenés</th>
              <th>Műfaj</th>
              <th>Szereplők</th>
              <th>Leírás</th>
            </tr>
          </thead>
          <tbody>
            {filteredSeries.map((sorozat) => (
              <tr key={sorozat._id}>
                <td>{sorozat.cim}</td>
                <td>{sorozat.megjelenes}</td>
                <td>{sorozat.mufaj}</td>
                <td>{sorozat.szereplok}</td>
                <td>{sorozat.leiras}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Serie;
