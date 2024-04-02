import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Addserie = () => {
  const [cim, setCim] = useState("");
  const [megjelenes, setMegjelenes] = useState("");
  const [mufaj, setMufaj] = useState("");
  const [szereplok, setSzereplok] = useState("");
  const [leiras, setLeiras] = useState("");

  const feldolgoz = (event) => {
    event.preventDefault();

    const adatok = {
      cim,
      megjelenes,
      mufaj,
      szereplok,
      leiras,
    };

    const elkuld = async () => {
      const adat = await fetch("http://localhost:3500/hozzaad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adatok),
      });

      if (adat.ok) {
        const response = await adat.json();
        alert(response.msg);
      } else {
        const response = await adat.json();
        alert(response.msg);
      }
    };
    elkuld();
    setCim("");
    setLeiras("");
    setMegjelenes("");
    setSzereplok("");
    setMufaj("");
  };
  return (
    <div className="form-c">
      <div className="form">
        <Container>
          <Form onSubmit={feldolgoz}>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Sorozat címe</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cím"
                value={cim}
                onChange={(e) => {
                  setCim(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
              <Form.Label>Megjelenés</Form.Label>
              <Form.Control
                type="date"
                placeholder="Megjelenés"
                value={megjelenes}
                onChange={(e) => {
                  setMegjelenes(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Műfaj</Form.Label>
              <Form.Control
                type="text"
                placeholder="Műfaj"
                value={mufaj}
                onChange={(e) => {
                  setMufaj(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Szereplők</Form.Label>
              <Form.Control
                type="text"
                placeholder="Szereplők"
                value={szereplok}
                onChange={(e) => {
                  setSzereplok(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Leírás</Form.Label>
              <Form.Control
                type="text"
                placeholder="Leírás"
                value={leiras}
                onChange={(e) => {
                  setLeiras(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
          <div className="buttons">
            <Button variant="danger" onClick={feldolgoz}>
              Felvesz
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Addserie;
