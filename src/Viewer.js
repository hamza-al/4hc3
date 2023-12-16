import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  question: {
    fontSize: 14,
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
    textDecoration: 'underline',
  },
});

const PDFFile = () => (
  <Document title='Hello World' >
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>3rd Grade Multiplication Worksheet</Text>
      
      <Text>Name: ______________________  Class: ______________________</Text>
      
      <Text>Multiply the following numbers:</Text>
      <Text style={styles.question}>1. 3 x 4 = <Text style={styles.answer}>___________</Text></Text>
      <Text style={styles.question}>2. 5 x 2 = <Text style={styles.answer}>___________</Text></Text>
      <Text style={styles.question}>3. 6 x 3 = <Text style={styles.answer}>___________</Text></Text>
      <Text style={styles.question}>4. 2 x 7 = <Text style={styles.answer}>___________</Text></Text>
      <Text style={styles.question}>5. 4 x 5 = <Text style={styles.answer}>___________</Text></Text>
      <Text style={styles.question}>1. 3 x 4 = <Text style={styles.answer}>___________</Text></Text>
      <Text style={styles.question}>2. 5 x 2 = <Text style={styles.answer}>___________</Text></Text>

      

      <Text>Total Questions: 6</Text>
      <Text>Final Grade: _______/6</Text>
    </Page>
  </Document>
);

export default PDFFile;
