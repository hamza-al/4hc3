import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import './App.css';

const Resume = ({ data }) => {
  return (
    <div className='ok'>
      <PDFViewer width="1000" height="1000">
        <Document>
          {/* Page 1: Skills */}
          <Page size="A4" style={styles.page}>
            <View style={styles.centeredSection}>
              <Text style={styles.name}>{`${data.personalInfo.firstName} ${data.personalInfo.lastName}`}</Text>
              <Text style={styles.contactInfo}>{data.personalInfo.email} | {data.personalInfo.phoneNumber}</Text>
              <Text style={styles.contactInfo}>{`Age: ${data.personalInfo.age} | Location: ${data.personalInfo.location}`}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.header}>Skills</Text>
              <View style={styles.skillsItem}>
                {data.skills.split(',').map((skill, index) => (
                  <Text key={index} style={styles.skill}>{skill.trim()}</Text>
                ))}
              </View>
            </View>
          
            <View style={styles.section}>
              <Text style={styles.header}>Experience</Text>
              {data.experience.map((exp, index) => (
                <View key={index} style={styles.experienceItem}>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight: "20px" }}>
                    <Text style={styles.companyName}>{exp.company}</Text>
                    <Text style={styles.dateRange}>{`${exp.startDate} - ${exp.endDate}`}</Text>
                  </div>
                  <Text style={styles.jobTitle}>{exp.position}</Text>
                  <Text style={styles.dateRange}>{`${exp.description} `}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.header}>Education</Text>
              {data.education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.subHeader}>{edu.degree}</Text>
                  <Text>{edu.institution}</Text>
                  <Text>{`Graduated on ${edu.graduationDate}`}</Text>
                </View>
              ))}
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: 10,
  },
  section: {
    marginBottom: 10,
  },
  centeredSection: {
    marginBottom: 10,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  skillsItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    fontSize: 12,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 5,
  },
  experienceItem: {
    marginBottom: 10,
    flexDirection: 'column',
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  jobTitle: {
    fontStyle: 'italic',
    fontSize: 12,
    marginBottom: 5,
  },
  dateRange: {
    fontSize: 10,
  },
  educationItem: {
    marginBottom: 10,
  },
  subHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Resume;
