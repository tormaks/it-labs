import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './images/img.png';
import img_1 from './images/img_1.png';
import img_2 from './images/img_2.png';
import pka from './CPT/IT_LR3_Torchinskii_IDM-22-01.pka';
import docx from './CPT/IT_LR3_Torchinskii_IDM-22-01.docx';

function App() {
  return (
      <>
          <div className="sidenav">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'space-between', padding: '0 20px' }}>
                  <a href="#lab1" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Лабораторная №1</a>
                  <a href="#lab2" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Лабораторная №2</a>
                  <a href="#lab3" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Лабораторная №3</a>
              </div>
          </div>
          <div style={{ margin: '0 auto 0 200px', textAlign: "center" }}>
              <h1 style={{ borderBottom: '4px solid black', margin: 0, padding: '20px 0' }}>Лабораторные работы по дисциплине "Интернет-технологии"</h1>
              <div id="lab1" style={{ borderBottom: '4px solid black' }}>
                  <div style={{ maxWidth: 800, margin: '0 auto' }}>
                      <h2 style={{ marginTop: '40px' }}>Лабораторная работа №1</h2>
                      <img style={{ width: 500, marginTop: '20px' }} src={img} alt="github" />
                      <Table striped bordered hover variant="dark" style={{ marginTop: '20px' }}>
                          <thead>
                          <tr>
                              <td colSpan={2} align="center">Знакомство с основными инструментами и нотациями</td>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td colSpan={2} align="center">Ссылка на веб-ресурсы</td>
                          </tr>
                          <tr>
                              <td>Исходный код</td>
                              <td><a target="_blank" href="https://github.com/tormaks/it-labs">/tormaks/it-labs</a></td>
                          </tr>
                          <tr>
                              <td>Репозиторий</td>
                              <td><a target="_blank" href="https://github.com/tormaks/it-labs">/tormaks/it-labs</a></td>
                          </tr>
                          <tr>
                              <td colSpan={2} align="center">Описание</td>
                          </tr>
                          <tr>
                              <td colSpan={2}>GITHUB - информационная система коллективной разработки программных средств. В рамках данной лабораторной работы необходимо зарегистрироваться на github.com, создать личный репозиторий, создать личную веб-страницу с описанием выполнения лабораторных работ, разместить код веб-страницы в репозитории, а также разместить ее на хостинге.</td>
                          </tr>
                          </tbody>
                      </Table>
                  </div>
              </div>
              <div id="lab2" style={{ borderBottom: '4px solid black' }}>
                  <div style={{ maxWidth: 800, margin: '0 auto' }}>
                      <h2 style={{ marginTop: '40px' }}>Лабораторная работа №2</h2>
                      <img style={{ width: 500, marginTop: '20px' }} src={img_1} alt="team" />
                      <Table striped bordered hover variant="dark" style={{ marginTop: '20px' }}>
                          <thead>
                          <tr>
                              <td colSpan={2} align="center">IT Проект</td>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td colSpan={2} align="center">Ссылка на веб-ресурсы</td>
                          </tr>
                          <tr>
                              <td>Исходный код</td>
                              <td><a target="_blank" href="https://github.com/tormaks/leonardo-landing-page">/tormaks/leonardo-landing-page</a></td>
                          </tr>
                          <tr>
                              <td>Landing page</td>
                              <td><a target="_blank" href="https://tormaks.github.io/leonardo-landing-page/">/tormaks/Landing-page</a></td>
                          </tr>
                          <tr>
                              <td colSpan={2} align="center">Описание</td>
                          </tr>
                          <tr>
                              <td colSpan={2}>В рамках данной лабораторной работы необходимо разработать проект и создать Landing page с описанием самого проекта.</td>
                          </tr>
                          </tbody>
                      </Table>
                  </div>
              </div>
              <div id="lab3">
                  <div style={{ maxWidth: 800, margin: '0 auto' }}>
                      <h2 style={{ marginTop: '40px' }}>Лабораторная работа №3</h2>
                      <img style={{ width: 500, marginTop: '20px' }} src={img_2} alt="team" />
                      <Table striped bordered hover variant="dark" style={{ marginTop: '20px' }}>
                          <thead>
                          <tr>
                              <td colSpan={2} align="center">Работа с Cisco Packet Tracer</td>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td colSpan={2} align="center">Ссылка на веб-ресурсы</td>
                          </tr>
                          <tr>
                              <td>Сценарий CPT</td>
                              <td><a href={pka}>CPT/IT_LR3_Torchinskii_IDM-22-01.pka</a></td>
                          </tr>
                          <tr>
                              <td>Отчет</td>
                              <td><a href={docx}>CPT/IT_LR3_Torchinskii_IDM-22-01.docx</a></td>
                          </tr>
                          <tr>
                              <td colSpan={2} align="center">Описание</td>
                          </tr>
                          <tr>
                              <td colSpan={2}>В рамках данной лабораторной работы необходимо настроить локальные сети на основе коммутаторов.</td>
                          </tr>
                          </tbody>
                      </Table>
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
