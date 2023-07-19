import React, { useState, useEffect } from 'react';
import { Document, Page, Text, View, PDFDownloadLink } from '@react-pdf/renderer';

const MyPDFComponent = () => {
    const [companies, setCompanies] = useState([]);
    const [courses, setCourses] = useState([]);
    const [knowledge, setKnowledge] = useState([]);
    const [about, setAbout] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await fetch('experience.json');
                const data1 = await response1.json();
                setCompanies(data1.company);

                const response2 = await fetch('courses.json');
                const data2 = await response2.json();
                setCourses(data2.courses);

                const response3 = await fetch('knowledge.json');
                const data3 = await response3.json();
                setKnowledge(data3.knowledge);

                const response4 = await fetch('aboutMe.json');
                const data4 = await response4.json();
                setAbout(data3.knowledge);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const MyDocument = () => (
        <Document>
            <Page>
                <View>
                    {/* Utilize os dados nos componentes PDF aqui */}
                    <Text>Companies: {JSON.stringify(about)}</Text>
                    <Text>Companies: {JSON.stringify(companies)}</Text>
                    <Text>Courses: {JSON.stringify(courses)}</Text>
                    <Text>Knowledge: {JSON.stringify(knowledge)}</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <div>
            <PDFDownloadLink document={<MyDocument />} fileName="meu_pdf.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Carregando documento...' : 'Baixar PDF'
                }
            </PDFDownloadLink>
        </div>
    );
};

export default MyPDFComponent;