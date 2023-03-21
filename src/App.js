import i18next from 'i18next';
import { useState } from 'react';
import { Col, Container, Nav, Navbar,  Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './App.css';
import ReactLoading from 'react-loading';
function App() {
const [done, setDone] = useState(true)
  const { t } = useTranslation()

  const onChange = (event) => {
    i18next.changeLanguage(event.target.value)
  }
  setTimeout(() => {
    setDone(false)
    
  }, 1000);

  return (
    <>
    
    {!done ?  <Container>
        <Row className='justify-content-center mt-5'>
          <Col xs={12}>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">{t("text.home")}</Nav.Link>
                    <Nav.Link href="#link">{t("text.link")}</Nav.Link>
                    <select onChange={onChange} style={{color: "gray", border:"none", marginLeft: "0px"}} name="Translation" id="1">
                      <option  value="eng">English</option>
                      <option  value="ru">Russian</option>
                      <option   value="uz">Uzbek</option>
                    </select>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
         <div className='text-center  mt-4'>
         <h5>{t("text.apple")}</h5>
          <h5>{t("text.city")}</h5>
          <h5>{t("text.house")}</h5>
          <h5>{t("text.country")}</h5>
          <h5>{t("text.cheese")}</h5>
          <h5>{t("text.weather")}</h5>
          <h5>{t("text.car")}</h5>
          <h5>{t("text.bike")}</h5>
          <h5>{t("text.spider")}</h5>
          <h5>{t("text.food")}</h5>
         </div>
          </Col>
        </Row>
      </Container>
      : <ReactLoading type={"bars"} color={"#03fc4e"} height={100} width={100} />
    
      }
   
    
    
   
   
    
    </>
  );
}

export default App;



{/* 
<button onClick={() => handleClick("eng")}>English</button>
<button onClick={() => handleClick("ru") }>Russian</button>
<button onClick={() => handleClick("uz") }>Uzbek</button> */}