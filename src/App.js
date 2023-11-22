import React, { useState, useEffect } from 'react';

import Nav from './components/Nav'
import Pdf from './components/Pdfpagecomponent'
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Container from '@mui/material/Container';

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
    <Container className="container">

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
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'space-between',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  p: 1,
                  m: 1,
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                }}
              >


                {knownledge.map(known => (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ArticleOutlinedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={known.language} secondary={known.typeknown} />
                  </ListItem>
                ))}

              </Box>
            </List>
          </Box>


          <Box>
            <Box>

              <h1>Cursos</h1>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'space-between',
                flexWrap: 'wrap',
                flexDirection: 'row',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >
              {courses.map(cour => (
                <Box sx={{ minWidth: 275 }}>
                  <Card variant="outlined">
                    <React.Fragment>
                      <CardContent>
                        <Typography variant="h5" gutterBottom>
                          {cour.course}
                        </Typography>
                        <Typography component="div" color="text.secondary">
                          {cour.duration}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {cour.type}
                        </Typography>
                      </CardContent>
                    </React.Fragment>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <h1>Experiencia profissional</h1>
            {companies.map(company => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography><h2>{company.company_name}</h2></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>

                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <HourglassEmptyOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={company.service_time} />
                    </ListItem>


                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <ComputerOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={company.office} />
                    </ListItem>


                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <ArticleOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={company.resume} />
                    </ListItem>


                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SubjectOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={company.company_website} />
                    </ListItem>

                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow sx={{ background: 'rgba(0, 0, 0, 0.7)', color:'white' }}>
                            <TableCell>Funções</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {company.functions.map((funct,i) => (
                            <TableRow
                              key={i}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {funct}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </div>
      </main>

      <footer>
        WIP
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 1.0rem;
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
    </Container>
  )
}
