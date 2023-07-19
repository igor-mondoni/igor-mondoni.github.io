import React, { useState, useEffect } from 'react';

import Nav from './components/Nav'
import Pdf from './components/Pdfpagecomponent'
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Index() {

  const [companies, setCompanies] = useState([]);
  const [courses, setCourses] = useState([]);
  const [knownledge, setKnownledge] = useState([]);

  useEffect(() => {
    fetch('experience.json', {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json()).then(res => {
      setCompanies(res.company);
    })

    fetch('courses.json', {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json()).then(res => {
      setCourses(res.courses);
    })

    fetch('knownledge.json', {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json()).then(res => {
      setKnownledge(res.knownledge);
    })
  }, []);

  return (
    <div className="container">

      <Nav />
      <br />
      <br />
      <br />
      <br />
    
      <main>
      <Pdf />
      <Button href={'https://wa.me/5511989840340?text=Olá,poderia mandar uma cópia do seu currículo?'} target="_blank" variant="contained" color="success" startIcon={<SendIcon />}>
        WhatsApp
      </Button>
        <br />
        <div style={{ width: '100%' }}>
          <Box>
            <h1>Conhecimentos</h1>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >
              {knownledge.map(known => (
                <Box>
                  <ul>
                    <li>Nome do curso: {known.language}</li>
                    <li>Duração: {known.typeknown}</li>
                  </ul>
                </Box>
              ))}
            </Box>
          </Box>


          <Box>
            <h1>Cursos</h1>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >
              {courses.map(cour => (
                <Box>
                  <ul>
                    <li>Nome do curso: {cour.course}</li>
                    <li>Duração: {cour.duration}</li>
                    <li>Tipo: {cour.type}</li>
                  </ul>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <h1>Experiencia profissional</h1>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >
              {companies.map(company => (
                <Box>
                  <ul>
                    <li>Empresa:{company.company_name}</li>
                    <li>Tempo de serviço:{company.service_time}</li>
                    <li>Cargo:{company.office}</li>
                    <li>Resumo:{company.resume}</li>
                    <li>Website:<a href={company.company_website} target="_blank">{company.company_website}</a></li>
                    <ul>
                      {company.functions.map(funct => (
                        <li>{funct}</li>
                      ))}
                    </ul>
                  </ul>
                </Box>
              ))}
            </Box>
          </Box>
        </div>
      </main>

      <footer>
        Direitos reservados a mim
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
//
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
//
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
